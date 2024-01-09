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
import BlogContent from '@/components/blog/BlogContent'
import { marked } from 'marked'

/* === 数据 === */

import linksData from '@/data/links.data'

export const metadata = {
    title: "友人 - Eltrac's"
}

const content = `链接随机排序，排名不分先后。
不再开放申请，若需修改信息请联系 \`hi@guhub.cn\``

/* === 主函数 === */

export default async function Links() {
    //获取友情链接数据
    const links = linksData.list;
    shuffle(links);

    return (
        <>
            <Header banner="https://image.guhub.cn/page-banner/about-banner.jpg" 
            title="赛博友谊。" subtitle="Back and forth." />
            <article>
                <Heading sub="我的互联网交际圈之一。">友情链接</Heading>
                <Padding className="mt-5 md:mt-10">
                    <ul className="flex flex-wrap gap-5">
                        {links.map((item) => {
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