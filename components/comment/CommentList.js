'use client'

/**
 * 原生评论列表
 * 
 * @file components/comment/CommentList
 * @exports CommentList
 */

/* === 引入 === */

import Image from "next/image"
import Link from "next/link"

/* === 数据 === */

const bubbleColorClass = 'bg-zinc-50 dark:bg-zinc-800'
const commentBodyClass = 'flex gap-5 my-10 items-start'

/* === 内部组件 === */

/**
 * 评论头像
 * 
 * @param {string} authorUrl 评论者填写的链接
 * @param {string} mailHash  评论者邮箱的 Hash，用于生成头像 
 * @returns jsx
 */
function CommentAvatar({ authorUrl, mailHash }) {
    return (
        <div className="comment-author">
            <Link href={authorUrl}>
                <Image src={`https://cravatar.cn/avatar/${mailHash}`} 
                    width={50} height={50}
                    alt="Commenter Profile Image"
                    unoptimized
                    className="rounded-full"
                />
            </Link>
        </div>
    )
}

/**
 * 评论内容
 * 
 * @param {string} text         评论内容
 * @param {string} author       评论者
 * @param {string} authorUrl    评论者填写的链接
 * @param {string} date         评论发布日期
 * @returns 
 */
function CommentContent({ text, author, authorUrl, date }) {
    return (
        <>
            {/* 评论气泡 */}
            <div className={`comment-bubble relative rounded-sm drop-shadow
                ${bubbleColorClass}`}>
                <div className={`speech-bubble-arrow 
                    rotate-45 h-2 w-2 ${bubbleColorClass}
                    absolute -left-1 top-1/3`} />
                <p className="comment-text
                    px-4 py-2">
                    {text}
                </p>
            </div>
            {/* 评论元信息 */}
            <div className="comment-meta font-sans 
                inline-flex gap-1 text-sm text-zinc-500">
                <span>
                    <Link href={authorUrl}>{author}</Link>
                </span>
                <span className="text-zinc-400">·</span>
                <span suppressHydrationWarning>{date}</span>
            </div>
        </>
    )
}

export default function CommentList({ data }) {
    return (
        <ol>
            {data.map((item) => {
                //将时间戳转换为日期字符串
                let dateString = new Date(item.created*1000).toLocaleDateString();
                //尝试获取评论者留下的 url，没有则用 # 占位
                let authorUrl = item.url ? item.url : "#"

                return (
                    <li key={item.coid} className={commentBodyClass}>
                        <CommentAvatar authorUrl={authorUrl} mailHash={item.mailHash} />
                        <div className="comment-content">
                            <CommentContent 
                                text={item.text}
                                author={item.author}
                                authorUrl={authorUrl}
                                date={dateString}
                            />
                            {/* 子评论 / 回复 */}
                            <ol className="comment-children">
                                {item.children.map((child) => {
                                    let dateString = new Date(child.created*1000).toLocaleDateString();
                                    let authorUrl = child.url ? child.url : "#"

                                    return (
                                        <li key={child.coid} className={commentBodyClass}>
                                            <CommentAvatar authorUrl={authorUrl} mailHash={child.mailHash} />
                                            <div className="comment-content">
                                                <CommentContent 
                                                    text={child.text}
                                                    author={child.author}
                                                    authorUrl={authorUrl}
                                                    date={dateString}
                                                />
                                            </div>
                                        </li>
                                    )
                                })}
                            </ol>
                        </div>
                    </li>
                    )
                })}
        </ol>
    )
}