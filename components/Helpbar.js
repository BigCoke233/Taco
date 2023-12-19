'use client';

/**
 * 右侧帮助栏
 * 
 * @file components/Helpbar
 * @exports Helpbar
 */

/* === 引用 === */

import ThemeSwitch from './helpbar/ThemeSwitch'
import GoTopButton from './helpbar/GoTop'
import HomeButton from './helpbar/Home'
import TocButton from './helpbar/TocButton';

import { LuMenu } from "react-icons/lu"

/* === 数据 === */

const buttonStyle = `inline-block rounded-full md:shadow transition 
p-4 md:p-3 text-lg bg-gray-50 dark:bg-zinc-800
border dark:border-zinc-700 outline-none
hover:border-lime-700 hover:text-white hover:bg-lime-700
dark:hover:border-lime-700 dark:hover:bg-lime-700
max-md:bg-white/[0.325] dark:max-md:bg-black/[0.25]
max-md:border-none`

/* === 工具函数 === */

//移动端帮助栏代码

function toggleBar() {
    const helpbar = document.getElementById('helpbar-content')
    helpbar.classList.toggle('folded')
}

/* === 主函数 === */

export default function Helpbar() {
    return(
        <section id="helpbar" className="z-20 md:fixed 
        md:top-3 md:right-3 
        xl:right-7 xl:top-auto xl:bottom-7">

            <button className={`md:hidden bg-lime-700 pt-2 pr-2 p-5 text-white rounded-bl-full
            max-md:fixed max-md:top-0 max-md:right-0 z-20`}
            onClick={toggleBar}>
                <LuMenu />
            </button>

            <ul id="helpbar-content" className={`flex md:flex-wrap md:flex-col gap-3

            max-md:justify-center max-md:py-5
            max-md:fixed max-md:inset-x-0 max-md:top-0 max-md-10
            max-md:bg-gray-100/[.85] dark:max-md:bg-zinc-900/[.85] max-md:backdrop-blur
            max-md:shadow

            transition-transform duration-3000 folded
            `}>  
                <HomeButton className={buttonStyle} />
                <ThemeSwitch className={buttonStyle} />
                <TocButton className={buttonStyle} />
                <GoTopButton className={buttonStyle} />
            </ul>

        </section>
    )
}