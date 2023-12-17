'use client';

/**
 * 返回顶部按钮
 * 
 * @file helpbar/GoTop.js
 * @returns jsx
 */

/* === 引入 === */

import { useEffect } from "react";

import { Tooltip } from "@nextui-org/tooltip"
import { LuPointer } from "react-icons/lu"

/* === 工具函数 === */

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


/* === 主函数 === */

export default function GoTopButton({ className }) {
    AddTopButtonEvent()

    return (
        <li key="goTop" className="hidden md:block">
            <Tooltip content="返回顶部" placement="left" offset={15}>
                <button className={className} id="goTop"
                onClick={GoTop}><LuPointer /></button>
            </Tooltip>
        </li>
    )
}