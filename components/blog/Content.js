"use client";

/**
 * 文字内容容器
 */

import Padding from '../utils/Padding';
import { Interweave } from 'interweave';

import { useEffect } from 'react'
import Prism from 'prismjs'

require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-jsx')

export default function Content({ children }) {
    //use prism
    useEffect(() => {
        const timeout = setTimeout(() => Prism.highlightAll(), 1000);
        return () => clearTimeout(timeout);
    }, [])

    return (
        <Padding id="post-content" className="md:text-xl yue py-5 px-2 md:px-16">
            <Interweave content={children} />
        </Padding>
    )
}