'use client'

/**
 * 评论
 * 
 * @returns jsx
 */
import GiscusComment from "../comment/Giscus"

import { init } from '@waline/client';
import '@waline/client/style';

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useEffect } from "react";

export default function Comment() {
    useEffect(() => {
        init({
            el: document.getElementById('waline'),
            serverURL: "https://waline.guhub.cn",
            dark: '.dark'
        });
    })
    return (
        <section id="comment" className={`px-5 md:px-16`}>
            <div id="waline" />
            <Accordion>
                <AccordionItem key="giscus" title="使用 Giscus">
                    <GiscusComment />
                </AccordionItem>
            </Accordion>
        </section>
    )
}