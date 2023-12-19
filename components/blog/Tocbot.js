'use client'

/**
 * 文章目录
 * 
 * @file components/blog/Tocbot
 * @exports Tocbot
 */

/* === 引入 === */

import { doTocbot, refreshTocbot, destroyTocbot } from "@/lib/useTocbot"
import { useEffect } from "react"

import '@/styles/tocbot.scss'

/* === 工具函数 === */

/**
 * 为页面中符合要求的标题添加 ID
 * 
 * @params void
 * @returns void
 */

function LinkHeadings() {
    const headings = document.querySelectorAll('h2, h3, h4')
    headings.forEach((heading) => {
        heading.id = `${heading.tagName}-${heading.innerText}`
    })
}

/* === 主函数 === */

export default function Tocbot() {
    useEffect(() => {
        LinkHeadings()
        doTocbot()
    })
    return (
        <aside id="tocbot-container" 
            style={{
                left: 'calc(((100vw - 72rem) / 2) + 72rem - 6rem)',
                bottom: '0',
                paddingTop: '30rem'
            }}
            className="absolute h-full hidden xl:block">
            <article id="tocbot" className="sticky top-12 text-lg" />
        </aside>
    )
}