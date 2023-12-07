/**
 * 评论
 * 
 * @returns jsx
 */

import Link from 'next/link'
import Giscus from '@giscus/react'

export default function Comment() {
    return (
        <section id="comment" className={`${process.env.pagePadding} px-5`}>
            <Giscus
                id="comments"
                repo="BigCoke233/isla-giscus"
                repoId="R_kgDOJ3CBvg"
                category="Announcements"
                categoryId="DIC_kwDOJ3CBvs4CXpL6"
                mapping="pathname"
                //term="Welcome to @giscus/react component!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="light"
                lang="zh-CN"
                loading="lazy"
            />
        </section>
    )
}