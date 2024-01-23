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

// 代码高亮
import { useEffect } from 'react'
import Prism from 'prismjs'
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-jsx')

// 图片灯箱
import initLightBox from '@/lib/useLightBox';

export default function Content({ children, md = false }) {
    // Interweave 服务端渲染垫片
    polyfill();

    // 浏览器处理
    useEffect(() => {
        const timeout = setTimeout(() => {
            Prism.highlightAll()    // Prism 代码高亮
            initLightBox('#post-content img')          // 使用灯箱
        }, 1000);
        return () => clearTimeout(timeout);
    }, [])

    // 解析 Markdown
    let content = children
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