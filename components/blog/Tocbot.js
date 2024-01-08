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
 * @returns void
 */

function LinkHeadings() {
    const headings = document.querySelectorAll('h2, h3, h4')
    headings.forEach((heading) => {
        heading.id = `${heading.tagName}-${heading.innerText}`
    })
}

/**
 * 绑定目录链接事件
 * 实现点击后关闭目录
 * 
 * @returns void
 */

function BindTocLinks() {
    const tocList = document.querySelectorAll('#tocbot a')
    const Toc = document.getElementById('tocbot-container')
    const helpbar = document.getElementById('helpbar-content')

    tocList.forEach((item) => {
        item.addEventListener('click', () => {
            Toc.classList.toggle('folded')     //收起目录
            helpbar.classList.toggle('folded') //收起帮助栏
        })
    })
}

/* === CSS === */

const tocbotStyle = `
@media screen and (min-width: 1280px) {
    #tocbot-container {
        left: calc(((100vw - 72rem) / 2) + 72rem - 6rem);
    }
}
`

/* === 主函数 === */

export default function Tocbot() {
    useEffect(() => {
        LinkHeadings()
        doTocbot()
        BindTocLinks()
    })
    return (
        <aside id="tocbot-container" 

        className={`folded top-[5.5rem]
        max-xl:bg-gray-100/[.85] dark:max-xl:bg-zinc-900/[.85] 
        max-xl:backdrop-blur-md max-xl:shadow
        max-xl:fixed max-xl:bottom-0 max-xl:inset-x-0
        max-xl:transition-all max-xl:duration-3000

        md:fixed md:bottom-20 md:inset-x-32 md:h-auto
        md:border md:border-zinc-200 md:dark:border-zinc-800 md:shadow-lg
        md:rounded

        lg:inset-x-72

        xl:absolute xl:bottom-0 xl:pt-[25rem]
        xl:transition-opacity xl:border-0
        xl:h-full xl:shadow-none xl:bg-transparent
        xl:inset-x-auto
        `}>
            <style jsx>{tocbotStyle}</style>
            <header className="border-b border-zinc-300 dark:border-zinc-700 max-xl:px-5 max-xl:py-3 xl:hidden">
                <h2 className="text-center font-bold">文章目录</h2>
            </header>
            <article id="tocbot" className="xl:sticky xl:top-12 md:text-lg
            max-xl:py-2" />
        </aside>
    )
}