'use client'

/**
 * 评论
 * 
 * @returns jsx
 */

import GiscusComment from "./Giscus"
import { Waline } from "./Waline"

import {Tabs, Tab} from "@nextui-org/tabs"

export default function Comment() {
    return (
        <section id="comment" className={`px-5 md:px-16`}>
            <Tabs aria-label="Options"
                classNames={{
                    base: 'flex justify-center',
                    tabList: 'bg-transparent rounded-sm',
                    tab: 'bg-transparent',
                    cursor: 'rounded-sm bg-zinc-50 dark:bg-zinc-800'
                }}>
                <Tab key="waline" title="Waline">
                    <Waline serverURL="https://waline.guhub.cn/" />
                </Tab>
                <Tab key="giscus" title="Giscus">
                    <GiscusComment />
                </Tab>
            </Tabs>
        </section>
    )
}