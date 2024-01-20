/**
 * 友情链接页面组件
 * 
 * @file [slug]/Links.js
 * @returns Links
 */

import Padding from '@/components/utils/Padding';
import shuffle from '@/lib/utils/shuffle'
import Image from 'next/image'

/* === 数据 === */

import linksData from '@/data/links.data'

/* === 主函数 === */

export default async function Links(isLinksPage) {
    //获取友情链接数据
    const links = linksData.list;
    shuffle(links);

    if (isLinksPage) return (
        <Padding>
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
    )
}