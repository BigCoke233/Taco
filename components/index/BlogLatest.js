/**
 * 最新博文展示
 *
 * @returns jsx
 */

import Link from 'next/link'
import Heading from '@/components/utils/Heading.js'
import { parseBlogPost } from '@/lib/parseBlogPost.js'

export default function BlogLatest({ posts, className }) {
    var post = parseBlogPost(posts.data.dataSet[0])
  
    return (
      <article id="blog-latest" className={className}>
        <Heading>
          <Link href={"/blog/"+post.slug}
          className="hover:text-lime-700 transition">{post.title}</Link>
        </Heading>
        <p className="text-lg my-5">{post.digest}</p>
        <div className="text-gray-500 flex justify-between text-justify">
          <p>{post.date}</p>
          <p>
            <Link href={`/category/${post.categorySlug}`} 
                  className="hover:text-lime-700 transition">
              {post.category}
            </Link>
          </p>
        </div>
      </article>
    )
}
