/**
 * Helpbar.js - 右侧帮助栏
 * 
 * @authro Eltrac
 * @date 2023/11/26
 */

import Link from 'next/link'
import { Tooltip } from "@nextui-org/tooltip";

import { LuHome, LuPointer } from "react-icons/lu";

export default function Helpbar() {
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

    const buttonStyle = "border rounded-full bg-gray-50 shadow transition " + 
    "p-2 md:p-3 text-lg " +
    "hover:border-lime-700 hover:text-white hover:bg-lime-700";

    return(
        <div className="fixed top-5 right-5 
        md:top-auto md:bottom-7 md:right-7
        flex flex-wrap flex-col gap-3">
        {links.map((item) => {
            if ("link" == item.type)
            {
                return (
                    <Tooltip content={item.tooltip} placement="left" offset={15}>
                        <Link 
                            href={item.link} key={item.key}
                            className={buttonStyle}
                        >{item.content}</Link>
                    </Tooltip>
                )
            }
            else if ("action" == item.type) {
                return (
                    <Tooltip content={item.tooltip} placement="left" offset={15}>
                        <button className={buttonStyle} key={item.key}
                        onClick={item.action}>{item.content}</button>
                    </Tooltip>
                )
            }
        })}
        </div>
    )
}