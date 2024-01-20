'use client'

/**
 * Giscus
 * 
 * @file components/comment/Giscus
 * @exports Giscus
 */

import Giscus from '@giscus/react'

export default function GiscusComment() {
    return (
        <Giscus
            id="comments"
            repo="BigCoke233/isla-giscus"
            repoId="R_kgDOJ3CBvg"
            category="Announcements"
            categoryId="DIC_kwDOJ3CBvs4CXpL6"
            mapping="pathname"
            //term="Welcome to @giscus/react component!"
            reactionsEnabled="0"
            emitMetadata="0"
            inputPosition="top"
            theme="preferred_color_scheme"
            lang="zh-CN"
            loading="lazy"
        />
    )
}