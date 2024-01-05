/**
 * 首页
 * 
 * @file page
 * @exports Home
 */

/* === 引用 === */

//nextjs 内置
import { promises as fs } from 'fs';

//页面组成部分
import Header from '@/components/Header'
import AboutMe from '@/components/index/AboutMe'
import BlogLatest from '@/components/index/BlogLatest'
import BlogList from '@/components/index/BlogList'
import Media from '@/components/index/Media'
import Nav from '@/components/index/Nav';

//RSS
import generateRssFeed from '@/lib/rssGenerator';

export const metadata = {
  title: "Eltrac's",
  favicon: "favicon.png"
}

/* === 主函数 === */

export default async function Home() {

  //获取博客文章列表
  const res = await fetch('https://blog.guhub.cn/api/posts?pageSize=9999',
    { next: { tags: ['blog'] } })
  const posts = await res.json()

  //获取页面设置
  const config_data = await fs.readFile(process.cwd() + '/lib/config.json', 'utf8');
  const config = JSON.parse(config_data)

  //生成 rss 订阅源
  await generateRssFeed({ posts: posts.data.dataSet });

  return (
    <>
      <Header />
      <section id="blog" className="md:flex md:gap-14 px-2">
        <BlogLatest posts={posts} className="md:w-2/3" />
        <BlogList posts={posts} className="md:w-1/3" />
      </section>
      <Nav links={config.nav} />
      <Media text={config.media} />
      <AboutMe text={config.about} />
    </>
  )
}
