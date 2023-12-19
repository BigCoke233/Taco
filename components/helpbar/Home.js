'use client';

/**
 * 返回首页
 * 
 * @file helpbar/Home.js
 * @exports HomeButton
 */

/* === 引用 === */

import { Tooltip } from "@nextui-org/tooltip"
import { LuHome } from "react-icons/lu"

import Link from 'next/link'

/* === 主函数 === */

export default function HomeButton({ className }) {
    return (
        <li key="home">
            <Tooltip content="返回首页" placement="left" offset={15}>
                <Link href='/' className={`${className} `}><LuHome /></Link>
            </Tooltip>
        </li>
    )
}