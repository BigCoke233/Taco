/**
 * 评论
 * 
 * @returns jsx
 */
import GiscusComment from "../comment/Giscus"
import { Waline } from "./Waline"

export default function Comment() {
    return (
        <section id="comment" className={`px-5 md:px-16`}>
            <GiscusComment />
            <Waline serverURL="https://waline.guhub.cn" dark=".dark" />
        </section>
    )
}