/**
 * 关于页面
 * 
 * @file about/page.js
 * @returns jsx
 */

/* === 引入 === */

import Header from '@/components/Header.js'
import Heading from '@/components/utils/Heading.js'

import BlogContent from '@/components/blog/BlogContent'
import { marked } from 'marked'

const fs = require('fs')

/* === 数据 === */

export async function generateMetadata({ params }) {
    try {
        const title = await import(`data/pages/${params.slug}.data.js`).then((module) => {
            return module.pageData.title
        });
        return {
          title: `${title} - Eltrac's`,
        }
    } catch(error) {
        return {
            title: `页面走丢了 - Eltrac's`,
        }
    }
}

/* === 主函数 === */

export default async function About({ params }) {
    const slug = params.slug;

    try {
        //动态引入页面数据
        const Page = await import(`data/pages/${slug}.data.js`).then((module)=>{
            const pageData = module.pageData

            //获取页面内容
            let pageContent;
            if (pageData.content) pageContent = pageData.content
            else {
                const markdown = fs.readFileSync(`data/pages/${slug}.content.md`, 'utf-8')
                pageContent = marked.parse(markdown)
            }

            return (
                <>
                    <Header 
                        banner={pageData.banner.img} 
                        title={pageData.banner.title} 
                        subtitle={pageData.banner.subtitle} 
                    />
                    <article>
                        <Heading sub={pageData.heading.description}>{pageData.heading.title}</Heading>
                        <BlogContent content={pageContent} />
                    </article>
                </>
            )
        })

        return Page;

    } catch(error) {
        //如果找不到对应的页面，则报出 404 错误
        return (
            <div className="h-[100dvh] flex flex-col justify-center items-center">
                <h1 className="text-lime-700 font-bold font-mono text-[6rem] md:text-[10rem] 
                    leading-none my-0">
                    404
                </h1>
                <p className="text-lg">此地无银三百两</p>
            </div>
        )
    }
}