import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import './normalize.css'
import './globals.css'
import { pretendard } from '../../public/fonts/Pretendard'

export const metadata: Metadata = {
  title: 'Marvel Explorer',
  description: '🦸‍♂️ Comics API를 활용한 마블 코믹스 캐릭터 정보 웹 어플리케이션'
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className={pretendard.className}>{children}</body>
    </html>
  )
}
