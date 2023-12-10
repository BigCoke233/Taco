/**
 * blog/index.js - 博客首页
 * 
 *  - 页面头部
 *  - 博客文章列表
 */

import Header from '@/components/Header.js'
import Heading from '@/components/Heading.js'
import PageTitle from '@/components/PageTitle'

import Link from 'next/link'
import { useEffect } from 'react'
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
    useEffect(() => {
        const yearTitles = document.getElementsByClassName("year-title");
        for (let j=0; j<3; j++) {
            for (let i = 0; i < yearTitles.length; i++) {
                if (i>0 && yearTitles[i].innerText == yearTitles[i-1].innerText) yearTitles[i].remove()
            }
        }
    })
    
    return (
        <>
            <PageTitle>博客</PageTitle>
            <Header className="mx-5" title="无人图书馆" subtitle="Bizzare Library" />
            <article className="px-5 pb-20 pt-0">
                <Heading>文章列表</Heading>

                <ul className="my-5 md:mx-16">
                    {posts.data.dataSet.map((post) => {
                        post = parseBlogPost(post);
                        return (
                            <>
                                <li className="year-title text-right font-mono
                                text-gray-500 text-2xl -my-2" key={post.year}>{post.year}</li>
                                <li className="text-xl my-5" key={post.slug}>
                                    <Link href={`/blog/${post.slug}`} className="flex gap-3 md:gap-8">
                                        <span className="text-gray-600 font-mono">{post.month}.{post.day}</span> 
                                        <span className="font-bold transition hover:text-lime-700">
                                            {post.title}
                                        </span>
                                    </Link>
                                </li>
                            </>
                        )
                    })}
                </ul>

            </article>
        </>
    )
}