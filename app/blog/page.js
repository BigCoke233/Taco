/**
 * 博客首页
 * 
 * @file blog/page.js
 * @returns jsx
 */

/* === 引入 === */

import Header from '@/components/Header.js'
import Heading from '@/components/utils/Heading.js'

import BlogArchive from '@/components/blog/BlogArchive'
import BlogCategories from '@/components/blog/BlogCategories'

import Padding from '@/components/utils/Padding'

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
    
    return (
        <>
            <Header banner="https://image.guhub.cn/page-banner/blog-banner.jpg"
            title="清楚洞悉。" subtitle="The opportune moment" />
            <article>
                <Heading sub="就这样存在于此。">被陈列的想法</Heading>
                <Padding>
                    <BlogCategories data={categories.data} />
                    <BlogArchive posts={posts} />
                </Padding>
            </article>
        </>
    )
}