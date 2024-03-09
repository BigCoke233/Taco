/**
 * 最新博文展示
 *
 * @returns jsx
 */

import Link from 'next/link'
import Heading from '@/src/components/utils/Heading.js'

import digestHTML from '@/src/lib/utils/digest'
import categories from '@/data/categories.data'

export default function BlogLatest({ post, className }) {
    return (
      <article id="blog-latest" className={className}>

        <Heading>
          <Link href={"/blog/"+post.slug}
          className="hover:text-lime-700 transition">{post.attributes.title}</Link>
        </Heading>

        <section id="blog-latest-meta" className='px-2'>
        <p className="text-lg my-5">{digestHTML(post.html)}</p>
          <div className="text-gray-500 flex justify-between text-justify">
            <p>{post.attributes.date}</p>
            <p>
              <Link href={`/category/${post.attributes.category}`} 
                    className="hover:text-lime-700 transition">
                {categories[post.attributes.category].name}
              </Link>
            </p>
          </div>
        </section>
        
      </article>
    )
}
