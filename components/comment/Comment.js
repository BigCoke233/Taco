'use client'

/**
 * 评论
 * 
 * @returns jsx
 */

import GiscusComment from "./Giscus"

import ReactWalineClient from "@montagejs/react-waline-client"
import '@montagejs/react-waline-client/dist/style/index.css'

import {Accordion, AccordionItem} from "@nextui-org/accordion";

export default function Comment() {
    return (
        <section id="comment" className={`px-5 md:px-16`}>
            <ReactWalineClient serverURL="https://waline.guhub.cn/" dark=".dark" />
            <Accordion>
                <AccordionItem key="1" aria-label="Giscus" title="使用 Giscus">
                    <GiscusComment />
                </AccordionItem>
            </Accordion>
        </section>
    )
}