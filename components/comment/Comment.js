'use client'

/**
 * 评论
 * 
 * @returns jsx
 */

import GiscusComment from "./Giscus"

import '@montagejs/react-waline-client/dist/style/index.css'
import ReactWalineClient from "@montagejs/react-waline-client"

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
                    <ReactWalineClient serverURL="https://waline.guhub.cn/" dark=".dark" />
                </Tab>
                <Tab key="giscus" title="Giscus">
                    <GiscusComment />
                </Tab>
            </Tabs>
        </section>
    )
}