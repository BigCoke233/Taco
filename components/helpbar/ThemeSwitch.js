'use client';

/**
 * 主题切换按钮
 * 
 * @file helpbar/ThemeSwitch
 * @exports ThemeSwitch
 */

/* === 引入 === */

import { Tooltip } from "@nextui-org/tooltip"
import { LuSun, LuMoon } from "react-icons/lu"


import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/* === 主函数 === */

export default function ThemeSwitch({ className }) {

    const [ mounted, setMounted ] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) return null
    return (
        <li key="themeSwitch">
            <Tooltip content="切换主题" placement="left" offset={15}>
                <button className={className} id="themeSwitch"
                onClick={() => {
                    if(theme=='dark') setTheme('light')
                    else setTheme('dark')
                }}>
                    <span id="themeSwitch-icon-sun"><LuSun /></span>
                    <span id="themeSwitch-icon-moon"><LuMoon /></span>
                </button>
            </Tooltip>
        </li>
    )
}