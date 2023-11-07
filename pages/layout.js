/**
 * layout.js - 全局布局
 * 
 *  - 页面容器样式
 *  - 引入 Google Font
 * 
 * @authro Eltrac
 * @date 2023/11/6
 */

import Footer from '@/components/Footer.js'

export default function Layout({ children }) {
    return (
        <main id="app" 
        className="max-w-5xl mx-auto my-0 md:my-20 p-5 md:p-0">
            <style jsx>{`@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;500;600;700;900&display=swap');`}</style>
            {children}
            <Footer />
        </main>
    )
}