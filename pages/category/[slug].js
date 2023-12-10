/**
 * [slug].js - 分类页面
 * 
 * 根据分类展示文章
 */

import Link from "next/link"

import Header from "@/components/Header"
import Heading from "@/components/Heading"
import PageTitle from "@/components/PageTitle"

/**
 * 动态路由
 * 
 * @returns object
 */

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'poetry' } },
            { params: { slug: 'essays' } },
            { params: { slug: 'fiction' } }
          ],
      fallback: true
    }
}

/**
 * 根据分类获取文章列表
 * 
 * @returns object
 */

export async function getStaticProps(context) {
    //获取分类 slug
    let slug = context.params.slug

    //获取分类数据
    const res1 = await fetch('https://blog.guhub.cn/api/categories');
    const categories = await res1.json()

    //获取文章列表
    const res2 = await fetch('https://blog.guhub.cn/api/posts?pageSize=9999&filterType=category&filterSlug='+slug)
    const posts = await res2.json()

    return { props: { categories, posts, slug } }
}

/**
 * 页面主体
 *  
 * @returns jsx
 */

export default function Page({ categories=null, posts=null, slug=null }) {
    var category, description;
    if(categories) categories.data.map((item) => {
        if (item.slug == slug) {
            category = item.name
            description = item.description
        }
    })

    return (
        <>
            <PageTitle>{category}</PageTitle>
            <Header />
            <article className="px-2 md:px-5 pb-20 pt-0">
                <Heading sub={description}>{category}</Heading>
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