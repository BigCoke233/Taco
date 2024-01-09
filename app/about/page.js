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

/* === 数据 === */

import aboutData from '@/data/about.data'

export const metadata = {
    title: `${aboutData.title} - Eltrac's`
}

/* === 主函数 === */

export default async function About() {
    return (
        <>
            <Header 
                banner={linksData.banner.img} 
                title={linksData.banner.title} 
                subtitle={linksData.banner.subtitle} 
            />
            <article>
                <Heading sub={linksData.heading.description}>{linksData.heading.title}</Heading>
                <BlogContent content={marked.parse(aboutData.content)} />
            </article>
        </>
    )
}