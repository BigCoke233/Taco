/**
 * 博客分类页面
 * 
 * @file category/[slug]/page.js
 * @returns jsx
 */

/* === 引入 === */

import Padding from "@/components/utils/Padding";
import BlogArchive from "@/components/blog/BlogArchive";

import Header from "@/components/Header"
import Heading from "@/components/utils/Heading"

/* === 调用 API === */

async function FetchCategoryInfo(slug) {
    const res1 = await fetch('https://blog.guhub.cn/api/categories',
        { next: { tags: ['blog'] } });
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
            <article>
                <Heading sub={category.description}>{category.name}</Heading>
                <Padding>
                    <BlogArchive posts={posts.data.dataSet} />
                </Padding>
            </article>
        </>
    )
}