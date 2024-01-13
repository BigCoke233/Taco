/**
 * 友情链接页面
 * 
 * @file links/page.js
 * @returns jsx
 */

/* === 引入 === */

//页面组成部分
import Header from '@/components/Header.js'
import Heading from '@/components/utils/Heading.js'
import Padding from '@/components/utils/Padding'

//工具
import shuffle from '@/lib/utils/shuffle'
import Content from '@/components/blog/Content'
import { marked } from 'marked'

import Image from 'next/image'

/* === 数据 === */

import linksData from '@/data/links.data'

export const metadata = {
    title: `${linksData.title} - Eltrac's`
}

/* === 主函数 === */

export default async function Links() {
    //获取友情链接数据
    const links = linksData.list;
    shuffle(links);

    return (
        <>
            <Header 
                banner={linksData.banner.img} 
                title={linksData.banner.title} 
                subtitle={linksData.banner.subtitle} 
            />
            <article>
                <Heading sub={linksData.heading.description}>{linksData.heading.title}</Heading>
                <Padding className="mt-5 md:mt-10">
                    <ul className="flex flex-wrap gap-5">
                        {links.map((item) => {
                            return (
                                <li key={item.name}>
                                    <a href={item.link} target="_blank"
                                    className="block flex items-center gap-3">
                                        <Image
                                            src={item.img} 
                                            className="inline-block w-8 rounded-full" 
                                            width={100}
                                            height={100}
                                            alt={`avatar of ${item.name}`}
                                            unoptimized
                                        />
                                        <span className="font-bold">{item.name}</span>    
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </Padding>
                <Content>{marked.parse(linksData.content)}</Content>
            </article>
        </>
    )
}