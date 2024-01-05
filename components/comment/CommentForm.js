/**
 * 评论表单
 * 
 * @file components/comment/CommentForm
 * @exports CommentForm
 */

import { PostComment } from "@/lib/postComment";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

/* === 主函数 表单部分 === */

export default function CommentForm({ slug, token }) {
    return (
        <section id="comment-form"
            className="m-5">
            <Textarea variant="underlined" placeholder="留下你的智慧" />
            <div className="grid grid-cols-4 gap-5">
                <Input variant="underlined" type="name" label="*称呼" />
                <Input variant="underlined" type="email" label="*邮箱" />
                <Input variant="underlined" type="url" label="链接" />
                <Button>发送评论</Button>
            </div>
        </section>
    )
}
