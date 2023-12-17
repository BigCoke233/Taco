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

import Toast from '@/lib/useToast'

import { setStore, getStore } from '@/lib/useLocalStorage'
import { useEffect, useState } from "react";

/* === 工具函数 === */

/**
 * SwitchTheme()
 * 基本的切换主题操作
 * 
 * @param {boolean} [user=true] 
 * 该参数表示切换操作是否为用户操作而非自动切换
 */

function SwitchTheme(user=true) {
    //完成切换操作
    const Html = document.getElementsByTagName('html')[0]
    Html.classList.toggle('dark')

    const SunIcon = document.getElementById('themeSwitch-icon-sun')
    const MoonIcon = document.getElementById('themeSwitch-icon-moon')

    //存入 Local Storage
    //发送 toast 提示操作完成
    if (Html.classList.contains('dark')) {
        if(user) setStore('siteTheme', 'dark')
        SunIcon.classList.add('hidden')
        MoonIcon.classList.remove('hidden')
        Toast('已切换为深色模式')
    }
    else {
        if(user) setStore('siteTheme', 'light')
        SunIcon.classList.remove('hidden')
        MoonIcon.classList.add('hidden')
        Toast('已切换为浅色模式')
    }
}

/**
 * SwitchByMedia()
 * 
 * 检测系统设置
 * 并自动切换主题
 */

function SwitchByMedia() {
    const [rendered, setRendered] = useState(false);

    useEffect(() => {
        const Html = document.getElementsByTagName('html')[0]
        const theme = getStore('siteTheme')
    
        if (rendered) { //跳过第一次渲染
            let systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches //系统是否为深色主题
            let prefersLight = (theme == 'light') //用户是否偏好浅色主题
    
            if(systemDark && !prefersLight) SwitchTheme(false)
        } else setRendered(true)
    })
}

/* === 主函数 === */

export default function ThemeSwitch({ className }) {
    SwitchByMedia()
    return (
        <li key="themeSwitch">
            <Tooltip content="切换主题" placement="left" offset={15}>
                <button className={className} id="themeSwitch"
                onClick={SwitchTheme}>
                    <span id="themeSwitch-icon-sun"><LuSun /></span>
                    <span id="themeSwitch-icon-moon" className="hidden"><LuMoon /></span>
                </button>
            </Tooltip>
        </li>
    )
}