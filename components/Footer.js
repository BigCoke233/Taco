/**
 * 页脚
 * 
 * @returns jsx
 */

import Link from 'next/link'
import Highlighter from './utils/Highlighter'

import { Tooltip } from '@nextui-org/tooltip'

import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { GiCat, GiPeach, GiTrophy } from "react-icons/gi";

export default function Footer() {
    return (
      <footer id="footer" className="text-gray-500 text-sm gap-2
      my-2 md:my-8 p-5 md:p-3 flex flex-wrap md:flex-nowrap md:justify-between md:items-end
      text-center md:text-left">

        <div id="footer-left" className='max-md:flex-shrink-0 w-full'>

          <section className="flex items-center gap-5 max-md:justify-center">
            <Link href="/">
              <Highlighter className="text-xl font-mono font-extrabold leading-10">Eltrac&rsquo;s</Highlighter>
            </Link>
            <p className="text-zinc-500 text-xs max-md:hidden">Eltrac 的个人分享</p>
          </section>

          <section className="mt-1">
            <p className="inline-flex gap-1 text-xs">
              <strong>站内链接：</strong>
              <Link href="/links">友情链接</Link> |
              <Link href="/blog">博客归档</Link> |
              <Link href="/about">关于页面</Link> |
              <Link href="/feed">RSS</Link>
            </p>
          </section>

          <section className="mt-1 mb-3">
            <p className="inline-flex gap-1 text-xs">
              <strong>我的作品：</strong>
              <Link href="https://bi.guhub.cn" target="_blank">怪奇灵感生成器</Link>
            </p>
          </section>

          <section id="copyright">
            <p>&copy; 2019-2023 Eltrac</p>
          </section>
          
        </div>

        <div id="footer-center" className='self-center'>
          <p className='hidden md:inline-flex text-zinc-300 dark:text-zinc-700 text-2xl gap-5'>
            <GiCat /> <GiPeach /> <GiTrophy />
          </p>
        </div>

        <div id="footer-right" className='w-full md:text-right'>

          <section id="built-with">
            <p className='hidden md:inline-flex justify-end text-xl gap-1 text-zinc-600'>
              <span className="text-xs">built with </span>
              <Link href="https://nextjs.org/" target='_blank'><TbBrandNextjs /></Link>
              <Link href="https://tailwindcss.com/" target="_blank"><TbBrandTailwind /></Link>
            </p>
          </section>

          <section id="license" className="flex justify-center md:justify-end my-2 gap-2">
            <Tooltip showArrow={true} content="若无特别说明，本站内容均为真人撰写，非 AI 生成。">
              <Link href="https://notbyai.fyi/" target="_blank">
                <img src="/not-by-ai.svg" style={{width: '5rem'}} 
                  alt="The site's content is written by human, not by AI." />
              </Link>
            </Tooltip>
            <Tooltip showArrow={true} content="未经特别声明，本站内容以 CC BY-SA 4.0 协议授权">
              <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">
                <img src="/by-nc-sa.svg" style={{width: '5rem'}} 
                  alt="Under CC BY NC-SA License." />
              </Link>
            </Tooltip>
          </section>

          <section id="icp">
            <p><Link href="https://beian.miit.gov.cn/" target="_blank">渝 ICP 备 2023014837 号</Link></p>
            <p className="align-middle">
              <img src="https://image.guhub.cn/beian.png" alt="备案图标" width={14} height={14} className="inline mr-1" /> 
              <a href="https://beian.mps.gov.cn/#/query/webSearch?code=50011702500934" rel="noreferrer" target="_blank">渝公网安备 50011702500934</a>
            </p>
          </section>

        </div>
      </footer>
    )
}