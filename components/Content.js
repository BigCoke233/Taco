"use client";

/**
 * 文字内容容器
 * 
 * @file components/Content.js
 * @exports Content
 */

// 页面组成部分
import Padding from './utils/Padding';

// HTML 渲染
import { Interweave } from 'interweave';
import { polyfill } from 'interweave-ssr';

// Markdown 解析
import { micromark } from 'micromark'
import { gfm, gfmHtml } from 'micromark-extension-gfm'

//代码高亮
import { useEffect } from 'react'
import Prism from 'prismjs'
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-jsx')

export default function Content({ children, md = false }) {
    // 服务端渲染垫片
    polyfill();

    // use prism
    useEffect(() => {
        const timeout = setTimeout(() => Prism.highlightAll(), 1000);
        return () => clearTimeout(timeout);
    }, [])

    // 解析 Markdown
    let content = children
        //移除 more 标签
        .replace(/\<!-- more --\>/,'')
        .replace(/\<!--more--\>/,'')
        
    if (md) {
        content = micromark(content, {
            extensions: [gfm()],
            htmlExtensions: [gfmHtml()]
        })
    }

    return (
        <Padding id="post-content" className="md:text-xl yue py-5 px-2 md:px-16">
            <Interweave 
                content={content} 
                tagName="div"
            />
        </Padding>
    )
}