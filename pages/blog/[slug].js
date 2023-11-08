/**
 * [slug].js - 博客文章内页
 * 
 *  - 文章内容
 *  - 评论
 */

import { useRouter } from 'next/router'
import { parseBlogPost } from "@/lib/parseBlogPost";
//页面组成部分
import Header from '@/components/Header.js'
import Heading from '@/components/Heading.js'

/**
 * 动态路由
 * 
 * @returns object
 */

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'oops' } },
          ],
      fallback: true
    }
}

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
 * 页面主体
 *  
 * @returns jsx
 */
export default function Page({ posts }) {
        //获取文章 slug
        const router = useRouter()
        const { slug } = router.query
        
        //遍历查找并获取对应文章
        var post;
        var data = (posts && posts.data.dataSet) ? posts.data.dataSet : false;

        if (data) { //确保 data 读取到的是页面加载后的正确值，而不是页面加载完成前返回的 undefined
            data.map((item) => {
                if (item.slug == slug) post = item
            })
        }
        
        //输出内容
        if (post) {
            post = parseBlogPost(post);
            console.log(post)
            return (
                <>
                    <Header />
                    <article>
                        <header>
                            <Heading>{post.title}</Heading>
                            <p className="my-3">{post.date} · {post.category}</p>
                        </header>
                        <div id="post-content" dangerouslySetInnerHTML={{__html: post.content}} 
                        className={`yue py-10 ${process.env.pagePadding}`} />
                    </article>
                </>
            )
        }
}