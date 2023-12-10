/**
 * blog/index.js - 博客首页
 * 
 *  - 页面头部
 *  - 博客文章列表
 */

import Header from '@/components/Header.js'
import Heading from '@/components/Heading.js'
import BlogArchive from '@/components/BlogArchive'

/**
 * 元信息
 */

export const metadata = {
    title: "博客 - Eltrac's"
}

/**
 * 页面主体
 * 
 * @returns jsx
 */

export default async function Blog() {
    const res = await fetch('https://blog.guhub.cn/api/posts?pageSize=9999')
    const posts = await res.json()
    
    return (
        <>
            <Header className="mx-5" title="无人图书馆" subtitle="Bizzare Library" />
            <article className="px-5 pb-20 pt-0">
                <Heading>文章列表</Heading>
                <BlogArchive posts={posts} />
            </article>
        </>
    )
}