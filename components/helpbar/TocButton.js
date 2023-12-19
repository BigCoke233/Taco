'use client';

/**
 * 移动端文章目录按钮
 * 
 * @file components/helpbar/TopButton
 * @exports TocButton
 */

/* === 引用 === */

import { Tooltip } from "@nextui-org/tooltip";
import { LuBookMarked } from "react-icons/lu";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/* === 工具函数 === */

function ToggleToc() {
    //really wanted to name it 'tockle' tho :/
    const Toc = document.getElementById('tocbot-container')
    Toc.classList.toggle('folded')
}

/* === 主函数 === */

export default function TocButton({ className }) {
    const pathname = usePathname()

    //监听 Route Change
    //根据页面内是否有 TOC 选择是否展示按钮
    useEffect(() => {
        const tocbot = document.getElementById('tocbot')
        const TocBtn = document.getElementById('tocButton')

        if (tocbot && tocbot.innerText != '')
            TocBtn.classList.remove('hidden')
        else TocBtn.classList.add('hidden')
    }, [pathname])

    return (
        <li key="tocButton">
            <Tooltip content="文章目录" placement="left" offset={15}>
                <button className={className} onClick={ToggleToc} id="tocButton">
                    <LuBookMarked />
                </button>
            </Tooltip>
        </li>
    )
}