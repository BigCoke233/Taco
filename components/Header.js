/**
 * 页眉
 * 
 * @returns jsx
 */

import Image from 'next/image'
import Link from 'next/link'

export default function Header({ title = "你好世界。", subtitle = "Hello World.", banner = "https://image.guhub.cn/banner.jpg" }) {
    return (
        <header className="relative">
          <section id="banner" className={`py-12 px-5 ${process.env.pagePadding}`}>
            <img src={banner} width={1200} height={400} alt="Banner of the page" loading="lazy"
            className="object-cover object-bottom h-80" />
          </section>
          <Link href="/">
            <section id="title" className="absolute bottom-5 right-5 hidden md:block
            bg-lime-800 text-white p-5">
              <h1 className="text-4xl font-bold tracking-wider drop-shadow-md">{title}</h1>
              <p className="mt-2">{subtitle}</p>
            </section>
          </Link>
        </header>
    )
}