/**
 * 文章数据 API
 * 
 * @route /api/posts
 */

import path from 'path';
import { markson } from 'marksonjs';

export async function FetchPosts() {

    // 读取所有文章
    // 得到由文件名组成的数组
    const postsDirectory = path.join(process.cwd(), 'data/posts/');
    let data = markson.scan(postsDirectory);
    
    // 根据日期对文章进行排序
    data.sort((a, b) => {
      let dateA = new Date(a.attributes.date);
      let dateB = new Date(b.attributes.date);
            
      return dateB - dateA;
    })

    return data 
}
