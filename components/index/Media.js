/**
 * 社交媒体
 * 
 * @returns jsx
 */

import { TbBrandGithubFilled, TbBrandBilibili, TbBrandDouban, TbBrandZhihu, TbBrandSteam, TbBrandTwitter, TbMail } from 'react-icons/tb'
import { SiGitee } from "react-icons/si";

export default function Media({ text }) {
    //展示的社交媒体信息
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

    return (
      <section id="media" className='pt-16 md:px-16 md:flex gap-10'>

        <style>{`
          #media-list li a span { display: flex; justify-content: center; align-items: center; gap: 0.5rem }
        `}</style>

        {/* 标题 */}
        <section>
          <h2 id="desktop-title-media" style={{writingMode: 'vertical-rl'}} 
          className="text-4xl font-extrabold tracking-widest
          border-r-4 pr-5 hidden md:block">{text.title}</h2>
          <h2 id="mobile-title-media" className="md:hidden text-center mb-5
          text-3xl font-extrabold">{text.title}</h2>
        </section>

        {/* 列表内容 */}
        <div>
          <ul id="media-list" className="flex gap-5 items-start flex-wrap 
          content-start">
            {media.map((item) => {
              return (
                <li className="border border-gray-200 transition bg-gray-50
                hover:border-lime-700 hover:text-lime-700" key={item.link}>
                  <a href={item.link} target="_blank" className="text-lg py-2 px-5 inline-block">{item.child}</a>
                </li>
              )
            })}
          </ul>
          <p className="text-lg my-6 font-semibold hidden md:block">{text.text}</p>
        </div>
      </section>
    )
  }