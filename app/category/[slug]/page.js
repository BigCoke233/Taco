/**
 * 博客分类页面
 * 
 * @file category/[slug]/page.js
 * @returns jsx
 */

/* === 引入 === */

import Link from "next/link"

import Header from "@/components/Header"
import Heading from "@/components/utils/Heading"

/* === 调用 API === */

async function FetchCategoryInfo(slug) {
    const res1 = await fetch('https://blog.guhub.cn/api/categories', { next: { revalidate: 3600 } });
    const categories = await res1.json()

    //遍历获取对应分类的名字和描述
    let data
    if(categories) categories.data.map((item) => { if (item.slug == slug) data = item })

    return data
}

async function FetchPosts(slug) {
    const res2 = await fetch('https://blog.guhub.cn/api/posts?pageSize=9999&filterType=category&filterSlug='+slug)
    const posts = await res2.json()

    return posts
}

/* === 元信息 === */

export async function generateMetadata({ params }) {
    const category = await FetchCategoryInfo(params.slug)
   
    return {
      title: `${category.name} - Eltrac's`
    }
}

/* === 主函数 === */

export default async function Page({ params }) {
    const category = await FetchCategoryInfo(params.slug)
    const posts = await FetchPosts(params.slug)

    return (
        <>
            <Header />
            <article className="px-2 md:px-5 pb-20 pt-0">
                <Heading sub={category.description}>{category.name}</Heading>
                <ul className="my-10 md:mx-16">
                {posts.data.dataSet.map((post) => {
                    return (
                        <li className="text-xl my-5" key={post.slug}>
                            <Link href={`/blog/${post.slug}`} className="flex gap-3 md:gap-8">
                                <span className="text-gray-600 font-mono">{post.month}.{post.day}</span> 
                                <span className="font-bold transition hover:text-lime-700">
                                    {post.title}
                                 </span>
                            </Link>
                        </li>
                    )
                })}
                </ul>
            </article>
        </>
    )
}