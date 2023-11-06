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
 * @returns 
 */

function BlogLatest({ posts, className }) {
  //获取第一篇博文
  var post = posts.data.dataSet[0]

  //在文章内容中寻找 <!--more--> 标签
  // 若存在，则截取 <!--more--> 之前的内容
  // 若不存在，则截取前 150 个字符
  var moreTag = post.digest.search(/<!--more-->/);
  var sliceEnd = (moreTag!=-1) ? moreTag- 3 : 150
  
  //删除 html 标签，只保留文字内容，然后执行截取操作
  var digest = post.digest.replace(/<\/?[^>]+(>|$)/g, "").slice(0,sliceEnd);

  //样式
  return (
    <article id="blog-latest" className={className}>
      <h2 className="text-5xl font-extrabold">
        <a href={"/blog/"+post.slug}>{post.title}</a>
      </h2>
      <p className="text-lg my-5">{digest}</p>
    </article>
  )
}

/**
 * 往期博文列表
 *
 * @returns 
 */

function BlogList({ posts, className }) {
  
  var list = posts.data.dataSet

  return (
    <div id="blog-list" className={className}>
        {list.map((post) => {
          return (
            <article>
              <h2><a href={"/blog/"+post.slug}>{post.title}</a></h2>
            </article>
          )
        })}
    </div>
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
      <section id="blog" className="md:flex md:gap-10">
        <BlogLatest posts={posts} className="md:w-2/3" />
        <BlogList posts={posts} className="md:w-1/3" />
      </section>
      
    </>
  )
}
