"use client";

/**
 * 分类列表
 * 
 * @file blog/BlogCategories.js
 * @returns jsx
 */

/* === 引用 === */

import Link from 'next/link'

/* === 主函数 === */

export default function BlogCategories({ data, className }) {
    return (
        <section id="blogCategoryList">
            <ul className={className}>
                {data.map((item) => {
                    return (
                        <Link href={`/category/${item.slug}`}>
                            <p>{item.name}</p>
                        </Link>
                    )
                })}
            </ul>
        </section>
    )
}