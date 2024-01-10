/**
 * 所有独立页面
 * 
 * @pathname /[slug]
 * @file /app/[slug]/page.js
 * @returns jsx
 */

/* === 引入 === */

import Header from '@/components/Header.js'
import Heading from '@/components/utils/Heading.js'
import BlogContent from '@/components/blog/BlogContent'

/* === 数据 === */

export async function generateMetadata({ params }) {
    try {
        return await import(`data/pages/${params.slug}.page.md`).then((module)=>{
            const matter = module.attributes;
            return {
                title: `${matter.title} - Eltrac's`
            }
        })

    } catch(error) {
        return {
            title: "虚无 - Eltrac's"
        }
    }
}

/* === 主函数 === */

export default async function About({ params }) {
    const slug = params.slug;

    try {
        //动态引入页面数据
        const Page = await import(`data/pages/${slug}.page.md`).then((module)=>{
            const matter = module.attributes;
            return (
                <>
                    <Header 
                        banner={matter.banner.img} 
                        title={matter.banner.title} 
                        subtitle={matter.banner.subtitle} 
                    />
                    <article>
                        <Heading sub={matter.heading.description}>
                            {matter.heading.title}
                        </Heading>
                        <BlogContent content={module.html} />
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