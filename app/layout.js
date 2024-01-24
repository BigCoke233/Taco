'use client';

/**
 * 根布局
 * 
 * @file layout.js
 * @exports RootLayout
 */

/* === 引入 === */

//全局 CSS
import '@/styles/init.css'
import '@/styles/globals.sass'

//页面组成部分
import Footer from '@/components/Footer'
import Helpbar from '@/components/Helpbar'

//UI 和动画
import { Providers } from './providers'

import { Suspense } from 'react';
import Loading from './loading';

/* === 主要页面布局 === */

function Page({children}) {
  return (
    <section id="page">
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
      <Footer />
    </section>
  ) 
}

/* === 根布局 === */

export default function RootLayout({ children }) {
  //body, main#app 的 className 已被移动到 init.css 中
  return (
    <html lang="zh-cn" suppressHydrationWarning={true}>
      <body>
        <Providers>
          <Page>{children}</Page>
          <Helpbar />
        </Providers>
      </body>
    </html>
  )
}