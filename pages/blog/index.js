/**
 * blog/index.js - 博客首页
 * 
 *  - 页面头部
 *  - 博客文章列表
 */

import Head from 'next/head'
import Header from '@/components/Header.js'
import Heading from '@/components/Heading.js'

/**
 * 获取博客文章列表
 * 
 * @returns object
 */

export async function getStaticProps() {
    const res = await fetch('http://43.143.130.74/api/posts')
    const posts = await res.json()
  
    return { props: { posts } }
}

/**
 * 页面主体
 * 
 * @returns jsx
 */

export default function Blog({ posts }) {
    return (
        <>
            <Head>
                <title>博客 - Eltrac's</title>
            </Head>
            <Header title="部落格。" subtitle="Blog Library"
            banner="https://eltrac.s3.bitiful.net/blog.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=J8LAwCEW7bKh3rIKprdQYmyf%2F20231107%2F%2Fs3%2Faws4_request&X-Amz-Date=20231107T150044Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&x-id=GetObject&X-Amz-Signature=47c3e59399b68721a50206d9a2b5ccbd92592d72f6d0d80c77db023cef6d05b4" />
            <article className="px-5 pb-20 pt-0">
                <Heading>文章列表</Heading>
                <ul class="list-square list-inside my-10 md:mx-16">
                    {posts.data.dataSet.map((post) => {
                        return (
                            <li className="text-xl my-5">
                                <a href={`/blog/${post.slug}`}>{post.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </article>
        </>
    )
}