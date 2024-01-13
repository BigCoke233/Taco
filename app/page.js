/**
 * 首页
 * 
 * @file page
 * @exports Home
 */

/* === 引用 === */

//页面组成部分
import Header from '@/components/Header'
import AboutMe from '@/components/index/AboutMe'
import BlogLatest from '@/components/index/BlogLatest'
import BlogList from '@/components/index/BlogList'
import Media from '@/components/index/Media'
import Nav from '@/components/index/Nav';

//数据
import { FetchPosts } from '@/lib/fetchPosts'
import config from '@/data/home.data'

//RSS
import generateRssFeed from '@/lib/rssGenerator';

export const metadata = {
  title: "Eltrac's"
}

/* === 主函数 === */

export default async function Home() {
  //获取博客文章列表
  const posts = await FetchPosts();

  //生成 rss 订阅源
  await generateRssFeed({ posts: posts });

  return (
    <>
      <Header />
      <section id="blog" className="md:flex md:gap-14 px-2">
        <BlogLatest post={posts[0]} className="md:w-2/3" />
        <BlogList posts={posts} className="md:w-1/3" />
      </section>
      <Nav links={config.nav} />
      <Media text={config.media} />
      <AboutMe text={config.about} />
    </>
  )
}
