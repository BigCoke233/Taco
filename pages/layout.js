/**
 * layout.js - 全局布局
 * 
 *  - 页面容器样式
 *  - 引入 Google Font
 * 
 * @authro Eltrac
 * @date 2023/11/6
 */

import Footer from '@/components/Footer'
import Helpbar from '@/components/Helpbar'

export default function Layout({ children }) {
    return (
        <main id="app" 
        className="max-w-5xl mx-auto my-0 md:my-14 p-5 md:p-0">
            <style jsx>{`@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Serif+SC:wght@300;400;500;600;700;900&display=swap');`}</style>
            {children}
            <Helpbar />
            <Footer />
        </main>
    )
}