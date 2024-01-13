/**
 * 博客文章内页
 * 
 * @file blog/[slug]/page.js
 * @returns jsx
 */

/* === 引入 === */

import Link from 'next/link';

//页面组成部分
import Header from '@/components/Header.js'
import Heading from '@/components/utils/Heading.js'
import Comment from '@/components/comment/Comment.js'
import Content from "@/components/blog/Content";
import Tocbot from "@/components/blog/Tocbot";
import NotFound from "@/components/404";

//数据
import categories from '@/data/categories.data';

/* === 元信息 === */

export async function generateMetadata({ params }) {
    try {
        return await import(`data/posts/${params.slug}.md`).then((module)=>{
            return {
                title: `${module.attributes.title} - Eltrac's`
            }
        })
    } catch(error) {
        return {
            title: "404 - Eltrac's"
        }
    }
}

/* === 主函数 === */

export default async function Page({ params }) {
    try {
        //动态引入页面数据
        const Page = await import(`data/posts/${params.slug}.md`).then((module)=>{
            const matter = module.attributes;
            return (
                <>
                    <Header 
                        banner={matter.banner?.img} 
                        title={matter.banner?.title} 
                        subtitle={matter.banner?.subtitle} 
                    />
                    <article>
                        <header className="px-2">
                            <Heading className="md:w-3/4">{matter.title}</Heading>
                            <p className="px-2 my-3 text-lg text-gray-600 dark:text-zinc-500">
                                <span>{matter.date}</span>
                                <span> · </span>
                                <Link href={`/category/${matter.category}`}
                                className="hover:text-lime-700 transition">
                                    {categories[matter.category].name}
                                </Link>
                            </p>
                        </header>
                        <Tocbot />
                        <Content>{module.html}</Content>
                    </article>
                    <Comment />
                </>
            )
        })

        return Page;

    } catch(error) {
        //如果找不到对应的页面，则报出 404 错误
        if (error.code === 'MODULE_NOT_FOUND') 
            return <NotFound />
        else throw error;
    }
}