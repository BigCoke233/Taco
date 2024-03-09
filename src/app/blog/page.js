/**
 * 博客首页
 * 
 * @file blog/page.js
 * @returns jsx
 */

/* === 引入 === */

import Header from '@/src/components/Header.js'
import Heading from '@/src/components/utils/Heading.js'

import BlogArchive from './components/BlogArchive'
import BlogCategories from './components/BlogCategories'

import Padding from '@/src/components/utils/Padding'

import { FetchPosts } from '@/src/lib/fetchPosts'

/* === 元信息 === */

export const metadata = {
    title: "博客 - Eltrac's"
}

/* === 主函数 === */

export default async function Blog() {
    const posts = await FetchPosts();
    
    return (
        <>
            <Header banner="https://image.guhub.cn/page-banner/blog-banner.jpg"
            title="清楚洞悉。" subtitle="The opportune moment" />
            <article>
                <Heading sub="就这样存在于此。">被陈列的想法</Heading>
                <Padding>
                    <BlogCategories />
                    <BlogArchive posts={posts} />
                </Padding>
            </article>
        </>
    )
}
