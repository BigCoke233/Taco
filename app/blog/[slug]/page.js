/**
 * 博客文章内页
 * 
 * @file blog/[slug]/page.js
 * @returns jsx
 */

/* === 引入 === */

import { parseBlogPost } from "@/lib/parseBlogPost";

import Link from 'next/link';

//页面组成部分
import Header from '@/components/Header.js'
import Heading from '@/components/utils/Heading.js'
import Comment from '@/components/comment/Comment.js'
import BlogContent from "@/components/blog/BlogContent";
import Tocbot from "@/components/blog/Tocbot";

/* === 调用 API === */

/**
 * 获取文章详情数据
 * @param {string} slug 文章别名
 * @returns 
 */

async function FetchPostData(slug) {
    const res = await fetch(`https://blog.guhub.cn/api/post?slug=${slug}`, 
        { next: { tags: ['blog'] } }
    )
    const post = await res.json()

    return post
}

/* === 元信息 === */

export async function generateMetadata({ params }) {
    const slug = params.slug
    let post = await parseBlogPost(await FetchPostData(slug))
   
    return {
      title: `${post.title} - Eltrac's`
    }
}

/* === 主函数 === */

export default async function Page({ params }) {
    const slug = params.slug
    
    // 获取文章数据
    let post = await FetchPostData(slug)
  
    // 如果获取成功
    if (post) {
        //读取文章字段，获取头图
        let fields = post.data.fields
        let banner = (fields.thumbnail.value) 
                        ? fields.thumbnail.value 
                        : null

        //解析文章信息
        post = await parseBlogPost(post.data);

        return (
            <>
                <Header banner={banner} />
                <article>
                    <header className="px-2">
                        <Heading className="md:w-3/4">{post.title}</Heading>
                        <p className="px-2 my-3 text-lg text-gray-600 dark:text-zinc-500">
                            <span>{post.date}</span>
                            <span> · </span>
                            <Link href={`/category/${post.categorySlug}`}
                            className="hover:text-lime-700 transition">
                                {post.category}
                            </Link>
                        </p>
                    </header>
                    <Tocbot />
                    <BlogContent content={post.content} />
                </article>
                <Comment />
            </>
        )
    }
}