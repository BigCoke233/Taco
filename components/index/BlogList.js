/**
* 往期博文列表
*
* @returns jsx
*/

import Link from 'next/link'

export default function BlogList({ posts, className }) {
    //将文章列表信息转为数组，并切割，取除去最新文章之后的前三篇
    var list = Object.entries(posts.data.dataSet)
    var list = list.slice(1,4)
  
    return (
      <div id="blog-list" className={`my-10 ${className}`}>
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