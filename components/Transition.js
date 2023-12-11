"use client";

/**
 * 页面切换动画
 * 
 * @file Transition.js
 * @returns jsx
 */

/* === 引入 === */

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/* === 主函数 === */

export default function Transition({ children }) {
    const pathname = usePathname()

    //监听 Route Change
    useEffect(() => {
        //after route change
        const container = document.getElementById('transition-container')
        container.classList.remove('opacity-0')
        container.classList.add('opacity-100')

        //before route change
        //by listen to link clicking
        const links = document.querySelectorAll('a:not([target="_blank"])')
        links.forEach((e) => {
            e.addEventListener('click', () => {
                container.classList.remove('opacity-100')
                container.classList.add('opacity-0')
            })
        })
    }, [pathname])

    return (
        <div id="transition-container" className="transition duration-300 opacity-0">{children}</div>
    )
}