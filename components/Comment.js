"use client";

/**
 * 评论
 * 
 * @returns jsx
 */

import Giscus from '@giscus/react'

export default function Comment() {
    return (
        <section id="comment" className={`px-5 md:px-16`}>
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