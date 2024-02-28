import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const { 
    data: { session }, 
  } = await supabase.auth.getSession();

  const currentPath = req.nextUrl.pathname; // Get the current requested path

  if (!session) {
   // User is not logged in, allow access to login and signup pages only
   if (currentPath === '/login' || currentPath === '/signup') {
      return res; // Allow access
   } else {
     // Redirect to the login page
     return NextResponse.rewrite(new URL('/login', req.url)) 
   }
  }

  // User is logged in, continue with the request
  return res
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
