import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './auth'

export async function middleware(request: NextRequest) {
  // 현재 경로 확인
  const path = request.nextUrl.pathname

  // 로그인 상태 확인 (예: JWT 토큰)
  const session = await auth()
  const isLoggedIn = !!session // 토큰이 있으면 로그인 상태로 간주

  // 로그인하지 않은 사용자가 /home 또는 그 하위 경로에 접근하려는 경우
  if (!isLoggedIn && path.startsWith('/home')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // 로그인한 사용자가 / 또는 /signup에 접근하려는 경우
  if (isLoggedIn && (path === '/' || path.startsWith('/signup'))) {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  // 그 외의 경우는 요청을 그대로 진행
  return NextResponse.next()
}

// middleware가 실행될 경로 지정
export const config = {
  matcher: ['/', '/home/:path*', '/signup/:path*']
}
