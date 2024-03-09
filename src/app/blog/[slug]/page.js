/**
 * 博客文章内页
 * 
 * @file blog/[slug]/page.js
 * @returns jsx
 */

/* === 引入 === */

import Link from 'next/link';

//页面组成部分
import Header from '@/src/components/Header.js'
import Heading from '@/src/components/utils/Heading.js'
import NotFound from "@/src/components/404";

import Comment from '@/src/app/blog/[slug]/components/Comment.js'
import Content from "@/src/components/Content";
import Tocbot from "@/src/app/blog/components/Tocbot";

import {Chip} from "@nextui-org/chip";

//数据
import { markson } from 'marksonjs';
import categories from '@/data/categories.data';

import path from 'path'

/* === 元信息 === */

export async function generateMetadata({ params }) {
    const data = markson.read(path.join(process.cwd(), `./data/posts/${params.slug}.md`)); 
    return {
        title: `${data.title} - Eltrac's`
    }
}

/* === 主函数 === */

export default async function Page({ params }) {
    try {
        //动态引入页面数据
          const data = markson.read(path.join(process.cwd(), `./data/posts/${params.slug}.md`)); 
          const matter = data.attributes;
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
                            <div className="flex gap-2 px-2 my-3 text-lg text-gray-600 dark:text-zinc-500">
                                <span>{matter.date}</span>
                                <span>·</span>
                                <Link href={`/category/${matter.category}`}
                                className="hover:text-lime-700 transition">
                                    {categories[matter.category].name}
                                </Link>
                                <Chip size="sm" variant="bordered" 
                                    className="ml-auto lg:mr-10 hidden md:inline-block">
                                    <span className="waline-pageview-count" data-path={`/blog/${params.slug}`}>...</span>
                                    <span> </span>
                                    <span>次阅读</span>
                                </Chip>
                            </div>
                        </header>
                        <Tocbot />
                        <Content>{data.html}</Content>
                    </article>
                    <Comment />
                </>
            )
    } catch(error) {
        //如果找不到对应的页面，则报出 404 错误
        if (error.code === 'MODULE_NOT_FOUND') 
            return <NotFound />
        else throw error;
    }
}
