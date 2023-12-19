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
        // Where to render the table of contents.
        tocSelector: '#tocbot',
        // Where to grab the headings to build the table of contents.
        contentSelector: '#post-content',
        // Which headings to grab inside of the contentSelector element.
        headingSelector: 'h2, h3, h4',
        // For headings inside relative or absolute positioned containers within content.
        hasInnerContainers: true,
    });
}

export function refreshTocbot() {
    tocbot.refresh()
}

export function destroyTocbot() {
    tocbot.destroy()
}