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
import { parseBlogPost } from '@/lib/parseBlogPost'

/**
 * 获取博客文章列表
 * 
 * @returns object
 */

export async function getStaticProps() {
    const res = await fetch('https://blog.guhub.cn/api/posts?pageSize=9999')
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
            <Header className="mx-5" title="无人图书馆" subtitle="Bizzare Library" />
            <article className="px-5 pb-20 pt-0">
                <Heading>文章列表</Heading>
                <ul class="list-square list-inside my-10 md:mx-16">
                    {posts.data.dataSet.map((post) => {
                        post = parseBlogPost(post);
                        return (
                            <li className="text-xl my-5" key={post.slug}>
                                <style>{`
                                    li > p { display: none }
                                    li:first-child > p { display: block }
                                `}</style>
                                <Link href={`/blog/${post.slug}`} 
                                className="font-bold transition hover:text-lime-700">
                                    {post.title}
                                </Link>
                                <p className="py-4 px-7">{post.digest}</p>
                            </li>
                        )
                    })}
                </ul>
            </article>
        </>
    )
}