'use server'

/**
 * 评论发送
 * 
 * @file libs/postComment.js
 * @exports PostComment
 */

export async function PostComment(slug, text, author, mail, url = null, parent = null, token) {
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
}