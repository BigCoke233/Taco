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

//数据
import categories from "@/data/categories.data";
import { FetchPosts } from "@/lib/fetchPosts";

/* === 元信息 === */

export async function generateMetadata({ params }) {
    return {
      title: `${categories[params.slug].name} - Eltrac's`
    }
}

/* === 主函数 === */

export default async function Page({ params }) {
    //获取文章列表
    const posts = await FetchPosts();

    //截取当前分类下的文章
    let data = [];
    posts.map((post) => {
        if (post.attributes.category == params.slug)
            data.push(post)
    })

    return (
        <>
            <Header />
            <article>
                <Heading sub={categories[params.slug].description}>{categories[params.slug].name}</Heading>
                <Padding>
                    <BlogArchive posts={data} />
                </Padding>
            </article>
        </>
    )
}