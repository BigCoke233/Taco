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
import Heading from '@/components/Heading.js'
import Comment from '@/components/Comment.js'
import BlogContent from "@/components/BlogContent";

/* === 调用 API === */

async function CallAPI(slug) {
    const res = await fetch('https://blog.guhub.cn/api/posts?pageSize=9999')
    const posts = await res.json()
        
    //遍历查找并获取对应文章
    var post;
    var data = (posts && posts.data.dataSet) ? posts.data.dataSet : false;

    if (data) { //确保 data 读取到的是页面加载后的正确值，而不是页面加载完成前返回的 undefined
        data.map((item) => {
            if (item.slug == slug) post = item
        })
    }

    return post
}

/* === 元信息 === */

export async function generateMetadata({ params }) {
    const slug = params.slug
    let post = await parseBlogPost(await CallAPI(slug))
   
    return {
      title: `${post.title} - Eltrac's`
    }
}

/* === 主函数 === */

export default async function Page({ params }) {
    const slug = params.slug
    let post = await CallAPI(slug)
        
    //输出内容
    if (post) {
        post = parseBlogPost(post);
        return (
            <>
                <Header />
                <article>
                    <header className="px-2 md:px-5">
                        <Heading className="w-4/5">{post.title}</Heading>
                        <p className="my-3 text-lg text-gray-600">
                            <span>{post.date}</span>
                            <span> · </span>
                            <Link href={`/category/${post.categorySlug}`}
                            className="hover:text-lime-700 transition">
                                {post.category}
                            </Link>
                        </p>
                    </header>
                    <BlogContent content={post.content} />
                </article>
                <Comment />
            </>
        )
    }
}