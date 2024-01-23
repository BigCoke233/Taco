'use client'

/**
 * 页眉
 * 
 * @file components/Header
 * @exports Header
 */

/* === 引用 === */

import Link from "next/link"
import Image from "next/image"
import Line from "./utils/Line"

import config from "@/data/home.data"

import { useEffect } from "react"
import initLightBox from "@/lib/useLightBox"

/* === 主函数 === */

export default function Header({ 
  title = config.banner.title, 
  subtitle = config.banner.subtitle, 
  banner = config.banner.img
}) {

  // 防止传入空值
  if (title===null) title = config.banner.title
  if (subtitle===null) subtitle = config.banner.subtitle
  if (banner===null) banner = config.banner.img

  // 使用图片灯箱
  useEffect(() => {
    const timeout = setTimeout(() => initLightBox('#banner img'), 500);
    return () => clearTimeout(timeout);
  })

  return (
        <header className="relative py-6 md:py-12 px-2 md:px-16">

          <section id="title">
            <Link href="/">
              <div className="md:absolute md:bottom-5 md:right-5 z-10
                md:bg-lime-800 md:text-white md:p-5 md:m-0
                mb-5 max-md:grid max-md:flex max-md:gap-3 max-md:items-end">

                  <h1 className="text-2xl md:text-4xl font-bold tracking-wider drop-shadow-md 
                  max-md:font-extrabold max-md:flex-shrink-0">{title}</h1>
                  <p className="max-md:text-sm max-md:text-right max-md:italic">{subtitle}</p>

                  <div className="md:hidden max-md:col-span-2 max-md:flex-grow"><Line /></div>
              </div>
            </Link>
          </section>

          <section id="banner">
            <Image src={banner} width={1200} height={400} alt="Banner of the page"
            className="object-cover object-bottom h-80 z-0" unoptimized priority />
          </section>

        </header>
  )
}