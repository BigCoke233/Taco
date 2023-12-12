'use client';

/**
 * 根布局
 * 
 * @file layout.js
 * @returns jsx
 */

/* === 引入 === */

//全局 CSS
import '@/styles/yue.css'
import '@/styles/prism.css'
import '@/styles/globals.css'

//页面组成部分
import Footer from '@/components/Footer'
import Helpbar from '@/components/Helpbar'

import Transition from '@/components/Transition';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

/* === 主函数 === */

export default function RootLayout({ children }) {
  const MainAppClassName = 'max-w-5xl mx-auto my-0 md:my-6 p-3 md:p-0'

  return (
    <html lang="zh-cn">
    <body>
      <main id="app" className={MainAppClassName}>
        <section id="page">
          <Transition>
            {children}
            <Footer />
          </Transition>
          <ProgressBar
            color="#4d7c0f"
            options={{ showSpinner: false }}
            shallowRouting
          />
        </section>
        <Helpbar />
      </main>
      </body>
    </html>
  )
}