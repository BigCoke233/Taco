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
import Content from '@/components/Content'
import NotFound from '@/components/404'

/* === 数据 === */

export async function generateMetadata({ params }) {
    let title;
    try {
        title = await import(`data/pages/${params.slug}.page.md`)
            .then(module => module.attributes.title)
    } catch(error) { title = '404' }

    return {
        title: `${title} - Eltrac's`
    }
}

/* === 主函数 === */

export default async function About({ params }) {
    try {
        //动态引入页面数据
        const Page = await import(`data/pages/${params.slug}.page.md`).then((module)=>{
            const matter = module.attributes;
            return (
                <>
                    <Header 
                        banner={matter.banner?.img} 
                        title={matter.banner?.title} 
                        subtitle={matter.banner?.subtitle} 
                    />
                    <article>
                        <Heading sub={matter.heading?.description}>
                            {matter.heading?.title}
                        </Heading>
                        <Content md={true}>{module.body}</Content>
                    </article>
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