/**
 * 社交媒体
 * 
 * @returns jsx
 */

/* === 引入 === */

import { TbBrandGithubFilled, TbBrandBilibili, TbBrandDouban, TbBrandZhihu, TbBrandSteam, TbBrandTwitter, TbMail } from 'react-icons/tb'
import { SiGitee } from "react-icons/si";

/* === 数据 === */

const media = [
  {
    "link": "https://github.com/BigCoke233",
    "child": (<span><TbBrandGithubFilled /> GitHub</span>)
  },
  {
    "link": "https://space.bilibili.com/384247770",
    "child": (<span><TbBrandBilibili /> Bilibili</span>)
  },
  {
    "link": "https://www.douban.com/people/eltrac/",
    "child": (<span><TbBrandDouban /> 豆瓣</span>)
  },
  {
    "link": "https://www.zhihu.com/people/eltrac-6/",
    "child": (<span><TbBrandZhihu /> 知乎</span>)
  },
  {
    "link": "https://steamcommunity.com/profiles/76561198812226260/",
    "child": (<span><TbBrandSteam /> Steam</span>)
  },
  {
    "link": "https://gitee.com/Eltrac",
    "child": (<span><SiGitee /> Gitee</span>)
  },
  {
    "link": "mailto:hi@guhub.cn",
    "child": (<span><TbMail /> Email</span>)
  }
]

//Class
const titleSharingClass = 'font-extrabold text-3xl dark:border-zinc-800'
const titleDesktopClass = 'tracking-widest border-r-4 pr-5'
const titleMobileClass = 'text-center mb-5'

const mediaListClass = 'flex gap-5 justify-center md:justify-start items-start flex-wrap content-start'
const mediaListItemClass = `
border border-gray-200 dark:border-zinc-700
bg-gray-50 dark:bg-zinc-900
hover:border-lime-700 hover:text-lime-700 dark:hover:border-lime-700
transition  duration-300`
const mediaListLinkClass = `text-lg py-2 px-5 inline-block`

/* === 主函数 === */

export default function Media({ text }) {
    //展示的社交媒体信息
    return (
      <section id="media" className='pt-16 md:px-16 md:flex gap-12'>

        <style>{`
          #media-list li a span { display: flex; justify-content: center; align-items: center; gap: 0.5rem }
        `}</style>

        {/* 标题 */}
        <section>
          {/* 电脑端标题 */}
          <h2 id="desktop-title-media" style={{writingMode: 'vertical-rl'}} 
          className={`hidden md:block ${titleDesktopClass} ${titleSharingClass}`}>{text.title}</h2>
          {/* 移动端标题 */}
          <h2 id="mobile-title-media" 
          className={`md:hidden ${titleMobileClass} ${titleSharingClass}`}>{text.title}</h2>
        </section>

        {/* 列表内容 */}
        <div>
          <ul id="media-list" className={mediaListClass}>
            {media.map((item) => {
              return (
                <li className={mediaListItemClass} key={item.link}>
                  <a href={item.link} target="_blank" 
                  className={mediaListLinkClass}>
                    {item.child}
                  </a>
                </li>
              )
            })}
          </ul>
          <p className="text-lg my-6 font-semibold hidden md:block">{text.text}</p>
        </div>
      </section>
    )
  }