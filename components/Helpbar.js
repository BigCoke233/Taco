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

/* === 数据 === */

const buttonStyle = `inline-block rounded-full shadow transition 
p-2 md:p-3 text-lg bg-gray-50 dark:bg-zinc-800
border dark:border-zinc-700 outline-none
hover:border-lime-700 hover:text-white hover:bg-lime-700
dark:hover:border-lime-700 dark:hover:bg-lime-700`

/* === 主函数 === */

export default function Helpbar() {
    return(
        <section id="helpbar">
            <ul className="fixed top-5 right-5 
            md:top-auto md:bottom-7 md:right-7
            flex flex-wrap flex-col gap-3">  
                <HomeButton className={buttonStyle} />
                <ThemeSwitch className={buttonStyle} />
                <GoTopButton className={buttonStyle} />
            </ul>
        </section>
    )
}