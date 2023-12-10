/**
 * [slug].js - 博客文章内页
 * 
 *  - 文章内容
 *  - 评论
 */

import { useRouter } from 'next/router'
import { parseBlogPost } from "@/lib/parseBlogPost";

import Link from 'next/link';

//use prism
import { useEffect, useState } from 'react'
import Prism from 'prismjs'

require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-jsx')

//页面组成部分
import PageTitle from '@/components/PageTitle';
import Header from '@/components/Header.js'
import Heading from '@/components/Heading.js'
import Comment from '@/components/Comment.js'

/**
 * 动态路由
 * 
 * @returns object
 */

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'the-suitcase' } },
          ],
      fallback: true
    }
}

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
export default function Page({ posts }) {
        //获取文章 slug
        const router = useRouter()
        const { slug } = router.query
        
        //遍历查找并获取对应文章
        var post;
        var data = (posts && posts.data.dataSet) ? posts.data.dataSet : false;

        if (data) { //确保 data 读取到的是页面加载后的正确值，而不是页面加载完成前返回的 undefined
            data.map((item) => {
                if (item.slug == slug) post = item
            })
        }

        //use prism
        useEffect(() => {
            const timeout = setTimeout(() => Prism.highlightAll(), 1000);
            return () => clearTimeout(timeout);
        }, [])
        
        //输出内容
        if (post) {
            post = parseBlogPost(post);

            return (
                <>
                    <PageTitle>{post.title}</PageTitle>
                    <Header />
                    <article>
                        <header className="px-2 md:px-5">
                            <Heading>{post.title}</Heading>
                            <p className="my-3 text-lg text-gray-600">
                                <span>{post.date}</span>
                                <span> · </span>
                                <Link href={`/category/${post.categorySlug}`}
                                      className="hover:text-lime-700 transition">
                                    {post.category}
                                </Link>
                            </p>
                        </header>
                        <div id="post-content" dangerouslySetInnerHTML={{__html: post.content}} 
                        className={`md:text-xl yue py-5 px-2 md:px-5 ${process.env.pagePadding}`} />
                    </article>
                    <Comment />
                </>
            )
        }
}