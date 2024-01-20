"use client";

/**
 * 分类列表
 * 
 * @file blog/BlogCategories.js
 * @returns jsx
 */

/* === 引用 === */

import Link from 'next/link'
import categories from '@/data/categories.data';

/* === 主函数 === */

export default function BlogCategories({ className }) {
    const slugs = Object.keys(categories)

    return (
        <section id="blogCategoryList" className={`${className} mb-8 md:mb-0 md:mt-8 md:flex md:gap-4`}>
            <h2 className="text-gray-500 hidden md:block">Categories: </h2>
            <ul className="flex-grow flex gap-2">
                {slugs.map((slug)=>{
                    return (
                        <Link href={`/category/${slug}`} key={slug}
                        className="text-center px-2 bg-gray-200 dark:bg-zinc-800 rounded-sm
                        hover:bg-lime-700 dark:hover:bg-lime-700 transition hover:text-white">
                            {categories[slug].name}
                        </Link>
                    )
                })}
            </ul>
        </section>
    )
}