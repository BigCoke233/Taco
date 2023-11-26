/**
 * Helpbar.js - 右侧帮助栏
 * 
 * @authro Eltrac
 * @date 2023/11/26
 */

import Link from 'next/link'

import { LuHome } from "react-icons/lu";

export default function Helpbar() {
    return(
        <div className="fixed top-5 right-5 flex flex-wrap">
            <Link href="/"><LuHome /></Link>
        </div>
    )
}