/**
 * PageTitle.js
 * 
 * 快速设置页面标题
 */

import Head from "next/head";

export default function PageTitle({ children }) {
    return (
        <Head>
            <title>{children} - Eltrac&apos;s</title>
        </Head>
    )
}