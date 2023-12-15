"use client";

/**
 * Helpbar.js - 右侧帮助栏
 * 
 * @authro Eltrac
 * @date 2023/11/26
 */

/* === 引用 === */

import Link from 'next/link'
import { useEffect } from 'react';

//UI-related
import { Tooltip } from "@nextui-org/tooltip"
import { LuHome, LuPointer, LuSunMoon } from "react-icons/lu"

import Toast from '@/lib/Toast';

/* === 数据 === */

const links = [
    {
        "type": "link",
        "link": "/",
        "content": (<LuHome />),
        "key": "home",
        "tooltip": "首页"
    },
    {
        "type": "action",
        "action": () => SwitchTheme(),
        "content": (<LuSunMoon />),
        "key": "themeSwitch",
        "tooltip": "切换主题"
    },
    {
        "type": "action",
        "action": () => window.scrollTo({top: 0, behavior: 'smooth'}),
        "content": (<LuPointer />),
        "key": "goTop",
        "tooltip": "返回顶部"
    }
]

const buttonStyle = `inline-block rounded-full shadow transition 
p-2 md:p-3 text-lg bg-gray-50 dark:bg-zinc-800
border dark:border-zinc-700 outline-none
hover:border-lime-700 hover:text-white hover:bg-lime-700
dark:hover:border-lime-700 dark:hover:bg-lime-700`

/* === 工具函数 === */

/**
 * GoTop
 * 
 * 返回顶部按钮的动画效果
 * 下滑显示 上移消失
 */

function AddTopButtonEvent() {
    useEffect(() => {
        const TopBtn = document.getElementById("goTop")
        TopBtn.classList.add("hide")
        TopBtn.classList.remove("inline-block")

        window.onscroll = function() {
            let offset = document.documentElement.scrollTop;
            ToggleTopButton(TopBtn, offset);
        }
    })
}

function ToggleTopButton(TopBtn, offset) {
    if(offset<=600) {
        TopBtn.classList.add("hide")
        TopBtn.classList.remove("inline-block")
    } else {
        TopBtn.classList.remove("hide")
        TopBtn.classList.add("inline-block")
    }
}

function GoTop() {
    window.scrollTo({top: 0, behavior: 'smooth'})
}

/**
 * Switch Theme
 * 
 * @returns void
 */

function SwitchTheme() {
    //完成切换操作
    const Html = document.getElementsByTagName('html')[0]
    Html.classList.toggle('dark')

    //发送 toast 提示操作完成
    if (Html.classList.contains('dark')) Toast('已切换为深色模式')
    else Toast('已切换为浅色模式')
}

/* === 主函数 === */

export default function Helpbar() {
    AddTopButtonEvent()
    //结构和样式
    return(
        <section id="helpbar">
            <ul className="fixed top-5 right-5 
            md:top-auto md:bottom-7 md:right-7
            flex flex-wrap flex-col gap-3">

                <li key="home">
                    <Tooltip content="返回首页" placement="left" offset={15}>
                        <Link href='/' className={buttonStyle}><LuHome /></Link>
                    </Tooltip>
                </li>

                <li key="themeSwitch">
                    <Tooltip content="切换主题" placement="left" offset={15}>
                        <button className={buttonStyle} id="themeSwitch"
                        onClick={SwitchTheme}><LuSunMoon /></button>
                    </Tooltip>
                </li>

                <li key="goTop">
                    <Tooltip content="返回顶部" placement="left" offset={15}>
                        <button className={buttonStyle} id="goTop"
                        onClick={GoTop}><LuPointer /></button>
                    </Tooltip>
                </li>

            </ul>
        </section>
    )
}