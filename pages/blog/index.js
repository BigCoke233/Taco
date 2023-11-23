/**
 * blog/index.js - 博客首页
 * 
 *  - 页面头部
 *  - 博客文章列表
 */

import Head from 'next/head'
import Header from '@/components/Header.js'
import Heading from '@/components/Heading.js'

import Link from 'next/link'

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
                <title>博客 - Eltrac&apos;s</title>
            </Head>
            <Header className="mx-5" title="部落格。" subtitle="Blog Library" />
            <article className="px-5 pb-20 pt-0">
                <Heading>文章列表</Heading>
                <ul class="list-square list-inside my-10 md:mx-16">
                    {posts.data.dataSet.map((post) => {
                        return (
                            <li className="text-xl my-5" key={post.slug}>
                                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </article>
        </>
    )
}