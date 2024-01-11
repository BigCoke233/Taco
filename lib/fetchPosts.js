/**
 * 文章数据 API
 * 
 * @route /api/posts
 */

const fs = require('fs');

export async function FetchPosts() {

    // 读取所有文章
    // 得到由文件名组成的数组
    let posts = fs.readdirSync('data/posts/');
    
    try {
        let data = [];
        let promises = [];

        // 遍历所有文章
        posts.forEach((filename) => {
            // 为每一篇文章创建一个 promise
            let promise = new Promise((resolve, reject) => {  
                // 异步处理，等待动态引入文章 module
                (async () => {
                    await import(`data/posts/${filename}`)
                        .then((post) => { 
                            //截取文章的别名（slug）
                            const slug = filename.substring(filename.indexOf('.'), 0)
                            resolve({
                                "slug": slug,
                                "attributes": post.attributes,
                                "html": post.html
                            })
                        }
                    )
                })();  
            })
            promises.push(promise);
        })
        data = await Promise.all(promises);

        // 根据日期对文章进行排序
        data.sort((a, b) => {
            let dateA = new Date(a.attributes.date);
            let dateB = new Date(b.attributes.date);
            
            return dateB - dateA;
        })

        return data

    } catch(err) {
        // 发生问题时抛出错误
        return { message: 'Something went wrong.', error: err }
    }
}