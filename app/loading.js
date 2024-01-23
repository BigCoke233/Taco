/**
 * 页面加载组件
 */

import { Spinner } from "@nextui-org/spinner"

export default function Loading() {
    return (
        <div className="h-[100dvh] justify-center items-center flex">
            <Spinner 
                color="default" size="lg" 
                label="内容正在路上"
            />
        </div>
    )
}