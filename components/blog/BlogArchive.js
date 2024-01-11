"use client";

/**
 * 文章列表页面组件
 * 
 * @file blog/BlogArchive.js
 * @returns jsx
 */

/* === 引用 === */

import Link from 'next/link'
import { useEffect } from 'react'
import { parseBlogPost } from '@/lib/parseBlogPost'

import Highlighter from '../utils/Highlighter';

/* === 工具函数 === */

function RemoveExtraYearTitles() {
    useEffect(() => {
        const yearTitles = document.getElementsByClassName("year-title");
        for (let j=0; j<3; j++) {
            for (let i = 0; i < yearTitles.length; i++) {
                if (i>0 && yearTitles[i].innerText == yearTitles[i-1].innerText) yearTitles[i].remove()
            }
        }
    })
}

/* === 主函数 === */

export default function BlogArchive({ posts, className }) {
    RemoveExtraYearTitles()
    return (
        <section id="blogArchiveList">
            <ul className={className}>
                {posts.map((post) => {
                    const matter = post.attributes

                    const dateArray = matter.date.split('-')
                    const year = dateArray[0]
                    const month = (dateArray[1].length<2) ? `0${dateArray[1]}` : dateArray[1]
                    const day = (dateArray[2].length<2) ? `0${dateArray[2]}` : dateArray[2]

                    return (
                        <>
                            <li className="year-title font-mono md:text-right
                            text-gray-500 text-xl md:text-2xl -my-2" key={`${year}-${post.slug}`}>
                                <Highlighter>{year}</Highlighter>
                            </li>

                            <li className="md:text-xl my-5 mx-2 md:mx-0" key={post.slug}>
                                <Link href={`/blog/${post.slug}`} className="flex gap-3 md:gap-8">
                                    <span className="text-gray-600 font-mono">{month}.{day}</span> 
                                    <span className="font-bold transition hover:text-lime-700">
                                        {matter.title}
                                    </span>
                                </Link>
                            </li>
                        </>
                    )
                })}
            </ul>
        </section>
    )
}