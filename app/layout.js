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
import Transition from '@/components/Transition';
import { Providers } from './providers';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

/* === 主要页面布局 === */

function Page({children}) {
  return (
    <section id="page">
      <Transition>
        {children}
        <Footer />
      </Transition>
      <ProgressBar color="#4d7c0f" options={{ showSpinner: false }} shallowRouting />
    </section>
  ) 
}

/* === 根布局 === */

export default function RootLayout({ children }) {
  //body, main#app 的 className 已被移动到 init.css 中
  return (
    <html lang="zh-cn">
      <body>
        <Providers>
          <Page>{children}</Page>
          <Helpbar />
        </Providers>
      </body>
    </html>
  )
}