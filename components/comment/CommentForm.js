/**
 * 评论表单
 * 
 * @file components/comment/CommentForm
 * @exports CommentForm
 */

import { PostComment } from "@/lib/postComment";
import { Input } from "@nextui-org/input";

/* === 主函数 表单部分 === */

export default async function CommentForm({ slug, token }) {
    return (
        <section id="comment-form">
            <Input type="name" label="*称呼" />
            <Input type="email" lable="*邮箱" />
            <Input type="url" label="链接" />
        </section>
    )
}
