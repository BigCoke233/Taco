/**
 * 友情链接页面
 * 
 * @file links/page.js
 * @returns jsx
 */

/* === 引入 === */

import Header from '@/components/Header.js'
import Heading from '@/components/utils/Heading.js'

import Padding from '@/components/utils/Padding'

import { promises as fs } from 'fs'
import shuffle from '@/lib/utils/shuffle'

import BlogContent from '@/components/blog/BlogContent'
import { marked } from 'marked'

/* === 元信息 === */

export const metadata = {
    title: "友人 - Eltrac's"
}

const content = `链接随机排序，排名不分先后。
不再开放申请，若需修改信息请联系 \`hi@guhub.cn\``

/* === 主函数 === */

export default async function Links() {
    const config_data = await fs.readFile(process.cwd() + '/data/links.json', 'utf8');
    const data = JSON.parse(config_data)
    shuffle(data)

    return (
        <>
            <Header banner="https://image.guhub.cn/page-banner/about-banner.jpg" 
            title="赛博友谊。" subtitle="Back and forth." />
            <article>
                <Heading sub="我的互联网交际圈之一。">友情链接</Heading>
                <Padding className="mt-5 md:mt-10">
                    <ul className="flex flex-wrap gap-5">
                        {data.map((item) => {
                            return (
                                <li key={item.name}>
                                    <a href={item.link} target="_blank"
                                    className="block flex items-center gap-3">
                                        <img src={item.img} className="inline-block w-8 rounded-full" />
                                        <span className="font-bold">{item.name}</span>    
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </Padding>
                <BlogContent content={marked.parse(content)} />
            </article>
        </>
    )
}