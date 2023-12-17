/**
 * 首页导航
 * 
 * @returns jsx
 */

/* === 引入 === */

import Link from "next/link"

/* === 主函数 === */

export default function Nav({ links }) {
    return (
        <nav className="grid grid-cols-2 md:grid-cols-3 
        md:mx-10 mt-12 mb-6 gap-8 items-center">
            {links.list.map((item) => {
                return (
                    <Link href={item.link} target={item.target} key={item.title}>
                        <div className="p-5 md:p-7 relative transition
                        shadow hover:shadow-lg hover:-translate-y-2
                        bg-gray-50 dark:bg-zinc-900
                        border dark:border-zinc-700">
                            <div className="absolute inset-x-0 -top-3 mx-auto
                            rounded-full bg-lime-700 w-8 h-8 block shadow" />
                            <h3 className="text-2xl font-extrabold my-3">{item.title}</h3>
                            <p>{item.des}</p>
                        </div>
                    </Link>
                )
            })}
        </nav>
    )
}