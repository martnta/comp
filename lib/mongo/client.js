import { ObjectId } from 'mongodb'
import clientPromise from '@/lib/mongo/database'

let con
let db
let client

async function init() {
  if (db) return
  try {
    con = await clientPromise
    db = await con.db()
    client = await db.collection('client')
  } catch (error) {
    throw new Error('Failed to stablish connection to database')
  }
}

/////////////
/// Client/user ///
/////////////

export async function findUserById(clientId) {
  try {
    if (!client) await init()

    const user = await client.findOne({ _id: ObjectId(clientId) })

    if (!user) throw new Error()

    return { user: { ...user, _id: user._id.toString() } }
  } catch (error) {
    return { error: 'Failed to find the user.' }
  }
}


export async function findUserAndPopulatePolicyByEmail(email){
  try{
    const user = await client.findOne({email}).populate('policy').exec();

    if(!user){
      throw new Error('User not fount')
    }
    //access user policy  data 
    const policy = client.policy

    //return the data

    return {
      client:{
        ...user.ObjectId(),
        _id : user._id.toString(),
      },
      policy: policy.toString()
    }
  }catch(error){
    console.error('Error', error.message)
    return {error: 'Failed to find user or Policy'}
  }
} 

export async function findUserByEmail(email) {
  try {
    if (!client) await init()

    const user = await client.findOne({ email })

    if (!user) throw new Error()

    return { user: { ...user, _id: user._id.toString() } }
  } catch (error) {
    return { error: 'Failed to find the user.' }
  }
}

export async function updateUser(email, update) {
  try {
    if (!client) await init()

    await client.updateOne({ email }, { $set: update })

    return { success: true }
  } catch (error) {
    return { error: 'Failed to reset the password.' }
  }
}