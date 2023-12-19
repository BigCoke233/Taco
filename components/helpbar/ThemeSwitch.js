'use client';

/**
 * 主题切换按钮
 * 
 * @file helpbar/ThemeSwitch.js
 * @returns jsx
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
                    const SunIcon = document.getElementById('themeSwitch-icon-sun')
                    const MoonIcon = document.getElementById('themeSwitch-icon-moon')

                    if(theme=='dark') {
                        setTheme('light')
                        SunIcon.classList.remove('hidden')
                        MoonIcon.classList.add('hidden')
                    } else {
                        setTheme('dark')
                        SunIcon.classList.add('hidden')
                        MoonIcon.classList.remove('hidden')
                    }
                }}>
                    <span id="themeSwitch-icon-sun"><LuSun /></span>
                    <span id="themeSwitch-icon-moon" className="hidden"><LuMoon /></span>
                </button>
            </Tooltip>
        </li>
    )
}