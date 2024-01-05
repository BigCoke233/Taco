'use server'

/**
 * 清理博客缓存
 * 访问此页面以手动清除博客数据缓存
 */
 
import { revalidateTag } from 'next/cache'
import Link from 'next/link'

export default async function PurgeBlogCache() {
    revalidateTag('blog')
    return (
        <div className="text-center flex flex-col justify-center items-center h-[100svh] gap-5">
            <h1 className="text-xl font-semibold">Cache purge has been made.</h1>
            <p>如果你无意进入这个页面，点击<Link href="/">这里返回首页</Link></p>
        </div>
    )
}