/**
 * index.js - 首页
 * 
 *  - 页面头部
 *  - 导航
 *  - 博客文章展示
 *  - 社交媒体
 *  - 自述
 * 
 * @authro Eltrac
 * @date 2023/11/6
 */

/* Imports - 引用 */

//nextjs 内置
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
//自制函数
import { parseBlogPost } from '@/lib/parseBlogPost.js'
//页面组成部分
import Header from '@/components/Header.js'
import Heading from '@/components/Heading.js'
//图标 react icons
import { TbBrandGithubFilled, TbBrandBilibili, TbBrandDouban, TbBrandZhihu, TbBrandSteam, TbBrandTwitter, TbMail } from 'react-icons/tb'

/**
 * 获取博客文章列表
 * 
 * @returns object
 */

export async function getStaticProps() {
  const res = await fetch('http://43.143.130.74/api/posts')
  const posts = await res.json()

  return { props: { posts } }
}

/**
 * 最新博文展示
 *
 * @returns jsx
 */

function BlogLatest({ posts, className }) {
  var post = parseBlogPost(posts.data.dataSet[0])

  return (
    <article id="blog-latest" className={className}>
      <Heading>
        <Link href={"/blog/"+post.slug}
        className="hover:text-lime-700 transition">{post.title}</Link>
      </Heading>
      <p className="text-lg my-5">{post.digest}</p>
      <div className="text-gray-500 flex justify-between">
        <p>{post.date}</p>
        <p>{post.category}</p>
      </div>
    </article>
  )
}

/**
 * 往期博文列表
 *
 * @returns jsx
 */

function BlogList({ posts, className }) {
  //将文章列表信息转为数组，并切割，取除去最新文章之后的前三篇
  var list = Object.entries(posts.data.dataSet)
  var list = list.slice(1,4)

  return (
    <div id="blog-list" className={`mt-16 mb-10 ${className}`}>
        <h2 className="text-lime-700">Previous Posts</h2>
        <ul className="text-xl font-semibold">
        {list.map((data) => {
          var post = data[1]
          return (
            <li key={post.slug} className="list-square list-inside my-5 md:mx-5">
              <Link href={"/blog/"+post.slug}
              className="hover:text-lime-700 transition">{post.title}</Link>
            </li>
        )})}
        </ul>
        <p><Link href="/blog/" className="text-lime-700">查看更多</Link></p>
    </div>
  )
}

/**
 * 社交媒体
 * 
 * @returns jsx
 */

function Media() {
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
      "link": "https://twitter.com/Eltrac233",
      "child": (<span><TbBrandTwitter /> Twitter (X)</span>)
    },
    {
      "link": "mailto:hi@guhub.cn",
      "child": (<span><TbMail /> Email</span>)
    }
  ]
  //样式
  return (
    <section id="media" className={`py-16 ${process.env.pagePadding} flex`}>
      <style>{`
        #media-list li a span { display: flex; justify-content: center; align-items: center; gap: 0.5rem }
      `}</style>
      <h2 style={{writingMode: 'vertical-rl'}} className="text-4xl font-extrabold tracking-widest
      border-r-4 pr-5">我的踪迹</h2>
      <div className="mx-10">
        <ul id="media-list" className="flex gap-5 items-start flex-wrap content-start">
          {media.map((item) => {
            return (
              <li className="border border-gray-200 transition
              hover:border-lime-700 hover:text-lime-700" key={item.link}>
                <a href={item.link} className="text-lg py-2 px-5 inline-block">{item.child}</a>
              </li>
            )
          })}
        </ul>
        <p className="text-lg my-6 font-semibold">尝试在其他地方找到我。</p>
      </div>
    </section>
  )
}

/**
 * 自述
 * 
 * @return jsx
 */

function AboutMe() {
  return (
    <section id="about" className="p-12 pt-0 md:flex md:gap-10 md:items-center">
      <Image src="https://eltrac.s3.bitiful.net/isla.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=J8LAwCEW7bKh3rIKprdQYmyf%2F20231107%2F%2Fs3%2Faws4_request&X-Amz-Date=20231107T135551Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&x-id=GetObject&X-Amz-Signature=51bbfc3bc1b8896b5f73ed4d2414a5a361612f5c466e05dd7bee3c0fd9adea17"
      height={200} width={200} style={{width: 300}} className="block mx-auto md:inline flex-shrink-0" />
      <article id="about-content" className="text-lg">
        <p class="text-gray-700">Eltrac / Lychnus / 以歌 / 帆迹</p>
        <p className="text-xl my-5 font-semibold">不尊重文字的独立博主，胡言乱语的小说家，兴趣使然的神秘学研究者，爱走弯路的半吊子程序员，
        不务正业的学生，品味小众的游戏爱好者，需要靠早晨一杯咖啡维持生命体征的废物。</p>
        <p>太阳双子月升处女、生命灵数 9、INFP</p>
      </article>
    </section>
  )
}

/**
 * 页面主要内容
 * 
 * @returns page
 */

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Eltrac&apos;s</title>
      </Head>
      <Header />
      <section id="blog" className="md:flex md:gap-14 md:items-center px-5">
        <BlogLatest posts={posts} className="md:w-2/3" />
        <BlogList posts={posts} className="md:w-1/3" />
      </section>
      <Media />
      <AboutMe />
    </>
  )
}
