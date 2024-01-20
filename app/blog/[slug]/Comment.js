'use client'

/**
 * 评论
 * 
 * @returns jsx
 */

import Giscus from '@giscus/react'

import ReactWalineClient from "@montagejs/react-waline-client"
import '@montagejs/react-waline-client/dist/style/index.css'
import '@waline/client/style'

import { Tabs, Tab } from "@nextui-org/tabs"

export default function Comment() {
    return (
        <section id="comment" className={`md:px-12`}>
            <Tabs aria-label="Options">
                <Tab key="waline" title="waline">
                    <ReactWalineClient 
                        serverURL="https://waline.guhub.cn" 
                        dark=".dark" 
                        imageUploader={false}
                        lang="zh-CN"
                    />
                </Tab>
                <Tab key="giscus" title="Giscus">
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
                </Tab>
            </Tabs>
        </section>
    )
}