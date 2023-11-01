'use server'

import { updateUser } from '@/lib/mongo/client'

export async function updateName(name, email) {
  await updateUser(email, { name })
}