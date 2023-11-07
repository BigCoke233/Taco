/**
 * index.js - 博客首页
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

import Image from 'next/image'
import Link from 'next/link'

import { parseBlogPost } from '@/lib/parseBlogPost.js'

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
      <h2 className="text-5xl font-extrabold">
        <a href={"/blog/"+post.slug}
        className="hover:text-lime-700 transition">{post.title}</a>
      </h2>
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
  
  var list = posts.data.dataSet

  return (
    <div id="blog-list" className={`my-10 ${className}`}>
        <h2 className="text-lime-700">Previous Posts</h2>
        <ul className="text-xl font-semibold">
        {list.map((post) => {
          return (
            <li key={post.slug} className="list-square list-inside md:m-5">
              <a href={"/blog/"+post.slug}
              className="hover:text-lime-700 transition">{post.title}</a>
            </li>
        )})}
        </ul>
        <p><Link href="/blog/" className="text-lime-700">查看更多</Link></p>
    </div>
  )
}

/**
 * 页眉
 * 
 * @returns jsx
 */

function Header() {
  return (
    <header className="relative">
      <section id="banner" className="py-12 md:px-12">
        <Image src="https://eltrac.s3.bitiful.net/20231107-banner.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=J8LAwCEW7bKh3rIKprdQYmyf%2F20231107%2F%2Fs3%2Faws4_request&X-Amz-Date=20231107T044121Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&x-id=GetObject&X-Amz-Signature=1e75fd4187904cc0bfed14e355ef4d8d1a141835d59a4394768214a04a2e4dc6" 
        width={1200} height={400} className="object-cover object-bottom h-80" />
      </section>
      <section id="title" className="absolute bottom-0 right-0 bg-lime-800 text-white p-5">
        <h1 className="text-4xl font-bold tracking-wider drop-shadow-md">你好世界。</h1>
        <p className="mt-2">Hello World.</p>
      </section>
    </header>
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
      <Header />
      <section id="blog" className="md:flex md:gap-10">
        <BlogLatest posts={posts} className="md:w-2/3" />
        <BlogList posts={posts} className="md:w-1/3" />
      </section>
      
    </>
  )
}
