/**
 * 友情链接页面
 * 
 * @file links/page.js
 * @returns jsx
 */

/* === 引入 === */

import Header from '@/components/Header.js'
import Heading from '@/components/Heading.js'

import Padding from '@/components/utils/Padding'

import BlogContent from '@/components/blog/BlogContent'
import { marked } from 'marked'

/* === 元信息 === */

export const metadata = {
    title: "友人 - Eltrac's"
}

/* === 数据 === */

const pageContent = `
我已经数不清楚这是我的第几个博客了
`

/* === 主函数 === */

export default async function About() {
    const res = await fetch('https://fastly.jsdelivr.net/gh/BigCoke233/guhub/data/friends.json')
    const data = await res.json()

    return (
        <>
            <Header banner="https://image.guhub.cn/page-banner/about-banner.jpg" 
            title="赛博友谊。" subtitle="Back and forth." />
            <article>
                <Heading sub="我的互联网交际圈之一。">友情链接</Heading>
                <Padding className="my-5 md:my-10">
                    <ul className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-12">
                        {data.map((item) => {
                            return (
                                <li key={item.name}>
                                    <a href={item.link} target="_blank"
                                    className="block text-center leading-10">
                                        <img src={item.img} className="w-full rounded-full" />
                                        <span className="font-bold">{item.name}</span>    
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </Padding>
            </article>
        </>
    )
}