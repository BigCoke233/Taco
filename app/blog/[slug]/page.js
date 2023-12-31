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
import Comment from '@/components/blog/Comment.js'
import BlogContent from "@/components/blog/BlogContent";
import Tocbot from "@/components/blog/Tocbot";
import { comment } from "postcss";

/* === 调用 API === */

async function FetchPostData(slug) {
    const res = await fetch('https://blog.guhub.cn/api/posts?pageSize=9999', { next: { revalidate: 3600 } })
    const posts = await res.json()
        
    //遍历查找并获取对应文章
    var post;
    var data = (posts && posts.data.dataSet) ? posts.data.dataSet : false;

    if (data) { //确保 data 读取到的是页面加载后的正确值，而不是页面加载完成前返回的 undefined
        data.map((item) => { if (item.slug == slug) post = item })
    }

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
    //获取文章信息
    const slug = params.slug
    let post = await FetchPostData(slug)

    //获取评论数据
    const res = await fetch(
        'https://blog.guhub.cn/api/comments?slug='+slug+'&pageSize=9999', 
        { next: { revalidate: 3600 } }
    )
    let commentData = await res.json()
    if (commentData.data) commentData = commentData.data.dataSet
    
  
    //如果获取成功
    if (post) {
        //读取文章字段
        let fields = post.fields
        //获取文章头图
        let banner = (fields.thumbnail.value) ? fields.thumbnail.value : null
        //解析文章信息
        post = await parseBlogPost(post);

        return (
            <>
                <Header banner={banner} />
                <article>
                    <header>
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
                <Comment data={commentData} />
            </>
        )
    }
}