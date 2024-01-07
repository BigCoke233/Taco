'use client'

/**
 * 评论
 * 
 * @returns jsx
 */
import GiscusComment from "../comment/Giscus"

export default function Comment() {
    return (
        <section id="comment" className={`px-5 md:px-16`}>
            <GiscusComment />
        </section>
    )
}