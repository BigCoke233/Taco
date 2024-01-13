/**
 * rssGenerator.js
 * 
 * 生成 RSS 订阅源
 */

import fs from 'fs';
import RSS from 'rss';

export  default async function generateRssFeed({ posts }) {
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

    const feed = new RSS(feedOptions);

        posts.map((post) => {
            feed.item({
                title: post.attributes.title,
                description: post.html,
                url: `${site_url}/blog/${post.slug}`,
                date: post.attributes.date,
            });
        });

    fs.writeFileSync('./public/feed/index.xml', feed.xml({ indent: true }));
}