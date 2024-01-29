/**
 * rssGenerator.js
 * 
 * 生成 RSS 订阅源
 */

import fs from 'fs';
import path from 'path';
import RSS from 'rss';

export default async function generateRssFeed({ posts }) {
    // configure feed options
    const feedFilePath = './public/feed/index.xml';
    const site_url = 'https://www.guhub.cn';
    const feedOptions = {
        title: 'Eltrac\'s',
        description: 'Digitial island of Eltrac\'s',
        site_url: site_url,
        feed_url: `${site_url}/rss.xml`,
        image_url: `${site_url}/favicon.png`,
        pubDate: 'Tue, 01 Aug 2023 13:52:00 +0000',
        copyright: `All rights reserved ${new Date().getFullYear()}, Eltrac`,
    }

    // create feed
    const feed = new RSS(feedOptions);
    posts.slice(0,8).map((post) => {
        feed.item({
            title: post.attributes.title,
            description: post.html,
            url: `${site_url}/blog/${post.slug}`,
            date: post.attributes.date,
        });
    });
    const output = feed.xml({ indent: true });

    // write feed file
    const directory = path.dirname(feedFilePath);
    if (!fs.existsSync(directory))  // make sure dir exists, if not then create
        fs.mkdirSync(directory, { recursive: true });
    fs.writeFileSync(feedFilePath, output);
}