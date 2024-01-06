/**
 * 评论表单
 * 
 * @file components/comment/CommentForm
 * @exports CommentForm
 */

import { PostComment } from "@/lib/postComment";
import Toast from "@/lib/useToast";

import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

/* === 主函数 表单部分 === */

export default function CommentForm({ slug, token }) {
    return (
        <section id="comment-form"
            className="my-8">
            <Textarea variant="underlined" id="commentText" placeholder="留下你的智慧" />
            <div className="grid grid-cols-4 gap-5">
                <Input variant="underlined" id="commentName" type="name" label="*称呼" />
                <Input variant="underlined" id="commentEmail" type="email" label="*邮箱" />
                <Input variant="underlined" id="commentUrl" type="url" label="链接" />
                <Button size="lg" className="mt-2 bg-lime-700 text-white rounded"
                    onPress={()=>{
                        // 读取表单内容
                        const name = document.getElementById('commentName').value;
                        const email = document.getElementById('commentEmail').value;
                        const url = document.getElementById('commentUrl').value;
                        const text = document.getElementById('commentText').value;

                        // 判断必填项是否为空
                        if (name && email)  {
                            // 判断是否有评论内容
                            if (text) {
                                //判断其他必要信息没有缺失
                                if (token && slug) {
                                    PostComment(slug, text, name, email, url, null, token)
                                } else Toast('必要信息缺失，请刷新重试！')
                            } else Toast('请输入评论内容！', "error")
                        } else Toast('请输入用户名和邮箱地址！', "error")
                    }}>
                    发送评论
                </Button>
            </div>
        </section>
    )
}
