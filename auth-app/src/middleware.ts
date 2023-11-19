import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

//if token exists, user won't be able to access public path 
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === '/login' || path === '/signup';

  const token = request.cookies.get('token')?.value || ""
  
  if (isPublicPath && token){
    return NextResponse.redirect(new URL('/', request.nextUrl));
  } 

  if (!isPublicPath && !token){
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
}
 
// See documentation, however, we could also list the paths in an array
export const config = {
  matcher: [
    '/',
    '/profile',
    '/profile/:path*',
    '/login',
    '/signup',
  ],
}