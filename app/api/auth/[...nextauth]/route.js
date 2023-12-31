import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import { MongoDBAdapter } from '@auth/mongodb-adapter'
import clientPromise from '@/lib/mongo/database'

const adapter = MongoDBAdapter(clientPromise, {
  collectionName: 'client',

})

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: profile.role ?? 'client'
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.role = user.role
      }

      if (trigger === 'update' && session?.name) {
        token.name = session.name
      }

      return token
    },
    async session({ session, token }) {
      session.user.role = token.role
      return session
    }
  },
  pages: {
    signIn: '/auth/signin'
  },
  adapter:adapter,
  session: {
    strategy: 'jwt'
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }