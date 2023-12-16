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
        <section id="blogCategoryList" className={`${className} mt-6 md:mt-8 md:flex md:gap-4`}>
            <h2 className="text-gray-500">Categories: </h2>
            <ul className="flex-grow flex gap-2">
                {data.map((item) => {
                    return (
                        <Link href={`/category/${item.slug}`} key={item.slug}
                        className="text-center px-2 bg-gray-200 dark:bg-zinc-800 rounded-sm
                        hover:bg-lime-700 dark:hover:bg-lime-700 transition hover:text-white">
                            {item.name}
                        </Link>
                    )
                })}
            </ul>
        </section>
    )
}