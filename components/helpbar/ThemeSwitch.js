'use client';

/**
 * 主题切换按钮
 * 
 * @file helpbar/ThemeSwitch.js
 * @returns jsx
 */

/* === 引入 === */

import { Tooltip } from "@nextui-org/tooltip"
import { LuSunMoon } from "react-icons/lu"

import Toast from '@/lib/useToast'

import { setStore, getStore } from '@/lib/useLocalStorage'

/* === 工具函数 === */

function SwitchTheme() {
    //完成切换操作
    const Html = document.getElementsByTagName('html')[0]
    Html.classList.toggle('dark')

    //存入 local Storage
    //发送 toast 提示操作完成
    if (Html.classList.contains('dark')) {
        setStore('siteTheme', 'dark')
        Toast('已切换为深色模式')
    }
    else {
        setStore('siteTheme', 'light')
        Toast('已切换为浅色模式')
    }
}

/* === 主函数 === */

export default function ThemeSwitch({ className }) {
    return (
        <li key="themeSwitch">
            <Tooltip content="切换主题" placement="left" offset={15}>
                <button className={className} id="themeSwitch"
                onClick={SwitchTheme}><LuSunMoon /></button>
            </Tooltip>
        </li>
    )
}