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
import { useEffect, useState } from "react";

/* === 工具函数 === */

/**
 * SwitchTheme()
 * 基本的切换主题操作
 * 
 * @param {boolean} [auto=false] 
 * 该参数表示切换操作是否为自动执行而非用户操作
 */

function SwitchTheme() {
    //完成切换操作
    const Html = document.getElementsByTagName('html')[0]
    Html.classList.toggle('dark')

    //存入 Local Storage
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
    
            if(systemDark && !prefersLight) Html.classList.add('dark')
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
                onClick={SwitchTheme}><LuSunMoon /></button>
            </Tooltip>
        </li>
    )
}