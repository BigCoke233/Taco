'use client'

/**
 * 评论
 * 
 * @returns jsx
 */

import GiscusComment from "../comment/Giscus"

import { Tabs, Tab } from "@nextui-org/tabs"

export default function Comment() {
    return (
        <section id="comment" className={`px-5 md:px-16`}>
            <Tabs aria-label="Options">
                <Tab key="giscus" title="Giscus">
                    <GiscusComment />
                </Tab>
                <Tab key="waline" title="waline">
                    <p>暂时不可用</p>
                    {/*<Waline serverURL="https://waline.guhub.cn" dark=".dark" />*/}
                </Tab>
            </Tabs>
        </section>
    )
}