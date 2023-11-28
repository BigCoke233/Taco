/**
 * Helpbar.js - 右侧帮助栏
 * 
 * @authro Eltrac
 * @date 2023/11/26
 */

import Link from 'next/link'

import { LuHome } from "react-icons/lu";

export default function Helpbar() {
    const links = [
        {
            "type": "link",
            "link": "/",
            "content": (<LuHome />),
            "key": "home"
        }
    ]
    return(
        <div className="fixed top-5 right-5 flex flex-wrap">
        {links.map((item) => {
            if ("link" == item.type)
            {
                return (
                    <Link href={item.link} key={item.key}>{item.content}</Link>
                )
            }
        })}
        </div>
    )
}