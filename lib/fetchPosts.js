/**
 * 文章数据 API
 * 
 * @route /api/posts
 */

import fs from 'fs/promises';
import path from 'path';

export async function FetchPosts() {

    // 读取所有文章
    // 得到由文件名组成的数组
    const postsDirectory = path.join(process.cwd(), 'data/posts/');
    let posts = await fs.readdir(postsDirectory);
    
    try {
        let promises = posts.map(async (filename) => {
            try {
                // 异步处理，等待动态引入文章 module
                const post = await import(`data/posts/${filename}`);
                
                // 截取文章的别名（slug）
                const slug = filename.substring(0, filename.lastIndexOf('.'));
                
                return {
                    "slug": slug,
                    "attributes": post.attributes,
                    "html": post.html
                };
            } catch (error) {
                console.error(`Error importing post ${filename}:`, error);
                throw error;
            }
        });

        let data = await Promise.all(promises);

        // 根据日期对文章进行排序
        data.sort((a, b) => {
            let dateA = new Date(a.attributes.date);
            let dateB = new Date(b.attributes.date);
            
            return dateB - dateA;
        })

        return data

    } catch(err) {
        // 发生问题时抛出错误
        throw err
    }
}