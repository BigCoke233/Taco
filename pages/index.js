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
import Head from 'next/head'
import { promises as fs } from 'fs';

//页面组成部分
import Header from '@/components/Header'
import AboutMe from '@/components/index/AboutMe'
import BlogLatest from '@/components/index/BlogLatest'
import BlogList from '@/components/index/BlogList'
import Media from '@/components/index/Media'

import generateRssFeed from '@/lib/rssGenerator';

/**
 * 获取数据
 * 
 * @returns object
 */

export async function getStaticProps() {
  //获取博客文章列表
  const res = await fetch('https://blog.guhub.cn/api/posts?pageSize=9999')
  const posts = await res.json()
  //获取页面设置
  const config_data = await fs.readFile(process.cwd() + '/lib/config.json', 'utf8');
  const config = JSON.parse(config_data)
  //生成 rss 订阅源
  await generateRssFeed({ posts: posts.data.dataSet });

  return { props: { posts, config } }
}

/**
 * 页面主要内容
 * 
 * @returns page
 */

export default function Home({ posts, config }) {
  return (
    <>
      <Head>
        <title>Eltrac&apos;s</title>
      </Head>
      <Header />
      <section id="blog" className="md:flex md:gap-14 px-5">
        <BlogLatest posts={posts} className="md:w-2/3" />
        <BlogList posts={posts} className="md:w-1/3" />
      </section>
      <Media text={config.media} />
      <AboutMe text={config.about} />
    </>
  )
}
