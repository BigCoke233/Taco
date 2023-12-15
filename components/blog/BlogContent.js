"use client";

/**
 * BlogContent.js
 * 
 * 处理博客文章内容
 */

import { useEffect } from 'react'
import Prism from 'prismjs'

require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-jsx')

export default function BlogContent({ content }) {
    //use prism
    useEffect(() => {
        const timeout = setTimeout(() => Prism.highlightAll(), 1000);
        return () => clearTimeout(timeout);
    }, [])

    return (
        <div id="post-content" dangerouslySetInnerHTML={{__html: content}} 
        className={`md:text-xl yue py-5 px-2 md:px-16`} />
    )
}