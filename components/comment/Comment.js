'use client'

/**
 * 评论
 * 
 * @returns jsx
 */

import GiscusComment from "../comment/Giscus"
import { Waline } from "./Waline"

import { Tabs, Tab } from "@nextui-org/tabs"

export default function Comment() {
    return (
        <section id="comment" className={`px-5 md:px-16`}>
            <Tabs aria-label="Options">
                <Tab key="waline" title="waline">
                    <Waline serverURL="https://waline.guhub.cn" dark=".dark" />
                </Tab>
                <Tab key="giscus" title="Giscus">
                    <GiscusComment />
                </Tab>
            </Tabs>
        </section>
    )
}