/**
 * 页眉
 * 
 * @returns jsx
 */

/* === 引用 === */

import Link from "next/link"
import Line from "./utils/Line"

/* === 主函数 === */

export default function Header({ 
  title = "烟云树海。", 
  subtitle = "C'est la vie, mon ami.", 
  banner = "https://image.guhub.cn/banner.jpg" 
}) {

  if (banner===null) banner = "https://image.guhub.cn/banner.jpg"

  return (
        <header className="relative py-6 md:py-12 px-2 md:px-16">

          <section id="title">
            <Link href="/">
              <div className="md:absolute md:bottom-5 md:right-5 z-10
                md:bg-lime-800 md:text-white md:p-5 md:m-0
                mb-5 max-md:grid max-md:grid-cols-2 max-md:gap-3 max-md:items-end">
                  <h1 className="text-4xl font-bold tracking-wider drop-shadow-md 
                  max-md:font-extrabold max-md:drop-shadow-lg">{title}</h1>
                  <p className="max-md:text-right max-md:italic">{subtitle}</p>
                  <div class="md:hidden max-md:col-span-2"><Line /></div>
              </div>
            </Link>
          </section>

          <section id="banner">
            <img src={banner} width={1200} height={400} alt="Banner of the page" loading="lazy"
            className="object-cover object-bottom h-80 z-0" />
          </section>

        </header>
  )
}