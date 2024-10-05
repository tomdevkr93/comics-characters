import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import './normalize.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marvel Explorer',
  description: '🦸‍♂️ Comics API를 활용한 마블 코믹스 캐릭터 정보 웹 어플리케이션'
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
