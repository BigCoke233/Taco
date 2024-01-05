'use client'

/**
 * 评论
 * 
 * @returns jsx
 */

import CommentList from "../comment/CommentList"
import CommentForm from "../comment/CommentForm"
import GiscusComment from "../comment/Giscus"

import {Tabs, Tab} from "@nextui-org/tabs"

export default function Comment({ data, slug }) {
    return (
        <section id="comment" className={`px-5 md:px-16`}>
            <Tabs aria-label="Options"
                classNames={{
                    base: 'flex justify-center',
                    tabList: 'bg-transparent rounded-sm',
                    tab: 'bg-transparent',
                    cursor: 'rounded-sm bg-zinc-50 dark:bg-zinc-800'
                }}>
                <Tab key="giscus" title="Giscus">
                    <GiscusComment />
                </Tab>
                <Tab key="vanilla" title="原生评论（Alpha）">
                    <p className="text-center">评论功能目前还在测试预览阶段，请使用 Giscus！</p>
                    <CommentList data={data} />
                </Tab>
            </Tabs>
        </section>
    )
}