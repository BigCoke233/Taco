'use client'

/**
 * 评论
 * 
 * @returns jsx
 */

import GiscusComment from "../comment/Giscus"
import ReactWalineClient from "@montagejs/react-waline-client"
import '@montagejs/react-waline-client/dist/style/index.css'

import { Tabs, Tab } from "@nextui-org/tabs"
import { useEffect } from "react"

export default function Comment() {
    useEffect(()=>{
        let __VUE_PROD_DEVTOOLS__ = false
    })
    return (
        <section id="comment" className={`px-5 md:px-16`}>
            <Tabs aria-label="Options">
                <Tab key="waline" title="waline">
                    <ReactWalineClient serverURL="https://waline.guhub.c" dark=".dark" />
                </Tab>
                <Tab key="giscus" title="Giscus">
                    <GiscusComment />
                </Tab>
            </Tabs>
        </section>
    )
}