/**
 * 关于页面
 * 
 * @file about/page.js
 * @returns jsx
 */

/* === 引入 === */

import Header from '@/components/Header.js'
import Heading from '@/components/utils/Heading.js'

import BlogContent from '@/components/blog/BlogContent'
import { marked } from 'marked'

/* === 元信息 === */

export const metadata = {
    title: "关于 - Eltrac's"
}

/* === 数据 === */

const pageContent = `
我已经数不清楚这是我的第几个博客了
`

/* === 主函数 === */

export default async function About() {
    return (
        <>
            <Header banner="https://image.guhub.cn/page-banner/about-banner.jpg" 
            title="成为展品。" subtitle="As people frown upon." />
            <article>
                <Heading sub="以防你不知道这里存在的意义。">关于小站</Heading>
                <BlogContent content={marked.parse(pageContent)} />
            </article>
        </>
    )
}