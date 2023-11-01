import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import Claim from '@/app/model/claim'

// Establish database connection
mongoose.connect('YOUR_CONNECTION_STRING', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error))

export async function GET(request) {
  try {
    // Retrieve all claims from the database
    const claims = await Claim.find()

    // Return the claims
    return NextResponse.json({ success: true, claims })
  } catch (error) {
    // Handle unexpected errors
    return NextResponse.json({ error: 'An error occurred while retrieving the claims' })
  }
}

export async function POST(request) {
  const { status, amount, notes } = request.body;

  try {
    // Create a new claim
    const newClaim = new Claim({
      status,
      amount,
      notes,
    })

    // Save the claim to the database
    await newClaim.save()

    // Return a success response
    return NextResponse.json({ success: true, claim: newClaim })
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      // Handle validation errors
      const validationErrors = Object.values(error.errors).map(
        (fieldError) => fieldError.message
      )
      return NextResponse.json({ error: validationErrors })
    } else {
      // Handle other unexpected errors
      return NextResponse.json({ error: 'An error occurred while creating the claim' })
    }
  }
}