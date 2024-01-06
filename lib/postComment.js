'use client'

/**
 * 评论发送
 * 
 * @file libs/postComment.js
 * @exports PostComment
 */

/**
 * 向后端发送评论请求
 * @param {string} slug     文章别名
 * @param {string} text     评论内容
 * @param {string} author   评论者
 * @param {string} mail     评论者邮箱
 * @param {string} url      评论者提供的邮箱地址
 * @param {string} parent   父级评论（如果有）
 * @param {string} token 
 */

export async function PostComment(slug, text, author, mail, url = null, parent = null, token) {
    //发送评论
    const response = await fetch("https://blog.guhub.cn/api/comment", {
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

    console.log(response.json())
}