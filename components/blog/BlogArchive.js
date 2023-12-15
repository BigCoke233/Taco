"use client";

/**
 * BlogArchive.js
 * 
 * 文章列表页面组件
 */

import Link from 'next/link'
import { useEffect } from 'react'
import { parseBlogPost } from '@/lib/parseBlogPost'

export default function BlogArchive({ posts }) {
    useEffect(() => {
        const yearTitles = document.getElementsByClassName("year-title");
        for (let j=0; j<3; j++) {
            for (let i = 0; i < yearTitles.length; i++) {
                if (i>0 && yearTitles[i].innerText == yearTitles[i-1].innerText) yearTitles[i].remove()
            }
        }
    })
    
    return (
        <ul className="my-5 md:mx-16">
            {posts.data.dataSet.map((post) => {
                post = parseBlogPost(post);
                return (
                    <>
                        <style jsx>{`
                        .year-title > span::before {
                            background-color: rgba(63, 98, 18, 0.25);

                            content: "";
                            position: absolute;
                            width: calc(100% + 4px);
                            height: 60%;
                            left: -2px;
                            bottom: 0;
                            z-index: -1;
                            transform: rotate(-2deg);
                            border-radius: 20% 30%
                        }
                        `}</style>
                        <li className="year-title font-mono md:text-right
                        text-gray-500 text-2xl -my-2" key={post.year}>
                            <span className="relative">{post.year}</span>
                        </li>

                        <li className="text-xl my-5 mx-2 md:mx-0" key={post.slug}>
                            <Link href={`/blog/${post.slug}`} className="flex gap-3 md:gap-8">
                                <span className="text-gray-600 font-mono">{post.month}.{post.day}</span> 
                                <span className="font-bold transition hover:text-lime-700">
                                    {post.title}
                                </span>
                            </Link>
                        </li>
                    </>
                )
            })}
        </ul>
    )
}