'use client'

/**
 * 使用 TOCBOT 生成文章目录
 * 
 * @file lib/useTocbot
 * @exports function
 */

import * as tocbot from 'tocbot'

export function doTocbot() {
    tocbot.init({
        tocSelector: '#tocbot',
        contentSelector: '#post-content',
        headingSelector: 'h2, h3, h4',
        hasInnerContainers: true,
    });
}

export function refreshTocbot() {
    tocbot.refresh()
}

export function destroyTocbot() {
    tocbot.destroy()
}