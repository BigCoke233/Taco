/**
 * 评论表单以及发送
 * 
 * @file components/comment/CommentForm
 * @exports CommentForm
 */

/* === 工具函数 === */

async function PostComment(slug, text, author, mail, url = null, parent = null) {
    //获取 token
    const res = await fetch(`https://blog.guhub.cn/api/post?slug=${slug}`, 
        { next: { tags: ['collection'] } })
    const postData = await JSON.parse(res)

    if (postData.data) {
        let token = postData.data.csrfToken;

        //发送评论
        fetch("https://blog.guhub.cn/api/comment", {
            method: "POST",
            body: JSON.stringify({
                slug: slug,
                text: text,
                author: author,
                mail: mail,
                url: url,
                parent: parent,
                token: token
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        return true
    } else {
        return false
    }
}

/* === 主函数 表单部分 === */

export default function CommentForm() {

}