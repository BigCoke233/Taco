/**
 * 所有独立页面
 * 
 * @pathname /[slug]
 * @file /app/[slug]/page.js
 * @returns jsx
 */

/* === 引入 === */

import Header from '@/src/components/Header.js'
import Heading from '@/src/components/utils/Heading.js'
import Content from '@/src/components/Content'
import NotFound from '@/src/components/404'

import { markson } from 'marksonjs';
import path from 'path'

/* === 数据 === */

export async function generateMetadata({ params }) {
    const data = markson.read(path.join(process.cwd(), `./data/pages/${params.slug}.md`)); 
    return {
        title: `${data.title} - Eltrac's`
    }
}

/* === 主函数 === */

export default async function About({ params }) {
    try {
        //动态引入页面数据
        const data = markson.read(path.join(process.cwd(), `./data/pages/${params.slug}.md`)); 
        const matter = data.attributes;
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
              <Content>{data.html}</Content>
            </article>
          </>
        )
    } catch(error) {
        //如果找不到对应的页面，则报出 404 错误
        if (error.code === 'MODULE_NOT_FOUND') 
            return <NotFound />
        else throw error;
    }
}
