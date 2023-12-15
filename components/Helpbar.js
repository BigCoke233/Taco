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
import { Tooltip } from "@nextui-org/tooltip";
import { LuHome, LuPointer } from "react-icons/lu";

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
        "action": () => window.scrollTo({top: 0, behavior: 'smooth'}),
        "content": (<LuPointer />),
        "key": "goTop",
        "tooltip": "返回顶部"
    }
]

const buttonStyle = "inline-block border rounded-full bg-gray-50 shadow transition " + 
"p-2 md:p-3 text-lg " +
"hover:border-lime-700 hover:text-white hover:bg-lime-700";

/* === useEffect === */

/**
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
    if(offset<=450) {
        TopBtn.classList.add("hide")
        TopBtn.classList.remove("inline-block")
    } else {
        TopBtn.classList.remove("hide")
        TopBtn.classList.add("inline-block")
    }
}

/* === 主函数 === */

export default function Helpbar() {
    AddTopButtonEvent()
    //结构和样式
    return(
        <ul className="fixed top-5 right-5 
        md:top-auto md:bottom-7 md:right-7
        flex flex-wrap flex-col gap-3">
        {links.map((item) => {
            if ("link" == item.type)
            {
                return (
                    <li key={item.key}>
                        <Tooltip content={item.tooltip} placement="left" offset={15}>
                            <Link 
                            href={item.link}
                            className={buttonStyle}
                            >{item.content}</Link>
                        </Tooltip>
                    </li>
                )
            }
            else if ("action" == item.type) {
                return (
                    <li key={item.key}>
                        <Tooltip content={item.tooltip} placement="left" offset={15}>
                            <button className={buttonStyle} key={item.key} id={item.key}
                            onClick={item.action}>{item.content}</button>
                        </Tooltip>
                    </li>
                )
            }
        })}
        </ul>
    )
}