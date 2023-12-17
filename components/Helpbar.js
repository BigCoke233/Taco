/**
 * Helpbar.js - 右侧帮助栏
 * 
 * @authro Eltrac
 * @date 2023/11/26
 */

/* === 引用 === */

import ThemeSwitch from './helpbar/ThemeSwitch'
import GoTopButton from './helpbar/GoTop'
import HomeButton from './helpbar/Home'

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

    helpbar.classList.toggle('max-md:-translate-y-20')
    helpbar.classList.toggle('max-md:-scale-90')
    helpbar.classList.toggle('max-md:opacity-0')
}

/* === 主函数 === */

export default function Helpbar() {
    return(
        <section id="helpbar" className="md:fixed md:top-auto md:bottom-7 md:right-7">

            <button className={`md:hidden bg-lime-700 pt-2 pr-2 p-5 text-white rounded-bl-full
            max-md:fixed max-md:top-0 max-md:right-0 z-20`}
            onClick={toggleBar}>
                <LuMenu />
            </button>

            <ul id="helpbar-content" className={`flex md:flex-wrap md:flex-col gap-3

            max-md:justify-center max-md:py-5
            max-md:fixed max-md:inset-x-0 max-md:top-0 max-md-10
            max-md:bg-gray-100/[.75] dark:max-md:bg-zinc-800/[.75] max-md:backdrop-blur
            max-md:shadow
            
            max-md:-translate-y-20 max-md:-scale-90 max-md:opacity-0
            transition-transform duration-3000
            `}>  
                <HomeButton className={buttonStyle} />
                <ThemeSwitch className={buttonStyle} />
                <GoTopButton className={buttonStyle} />
            </ul>

        </section>
    )
}