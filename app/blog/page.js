/**
 * 博客首页
 * 
 * @file blog/page.js
 * @returns jsx
 */

/* === 引入 === */

import Header from '@/components/Header.js'
import Heading from '@/components/Heading.js'

import BlogArchive from '@/components/blog/BlogArchive'
import BlogCategories from '@/components/blog/BlogCategories'

/* === 元信息 === */

export const metadata = {
    title: "博客 - Eltrac's"
}

/* === 主函数 === */

export default async function Blog() {
    const res1 = await fetch('https://blog.guhub.cn/api/posts?pageSize=9999', { next: { revalidate: 3600 } })
    const posts = await res1.json()

    const res2 = await fetch('https://blog.guhub.cn/api/categories', { next: { revalidate: 3600 } })
    const categories = await res2.json()

    const sharedClass = 'my-5 md:mx-16'
    
    return (
        <>
            <Header className="mx-5" title="无人图书馆" subtitle="Bizzare Library" />
            <article className="px-5 pb-20 pt-0">
                <Heading>文章列表</Heading>
                <BlogCategories className={sharedClass} data={categories.data} />
                <BlogArchive className={sharedClass} posts={posts} />
            </article>
        </>
    )
}