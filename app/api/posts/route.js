/**
 * 文章数据 API
 * 
 * @route /api/posts
 */

const fs = require('fs');

export async function GET(request) {
    // 获取 query
    // 用于确定是否完整输出文章内容
    const searchParams = request.nextUrl.searchParams
    const putContent = searchParams.get('putContent')

    // 读取所有文章
    // 得到由文件名组成的数组
    let posts = fs.readdirSync('data/posts');
    
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
                            if (putContent == 'no') resolve({"attributes": post.attributes})
                            else resolve(post)
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

        return Response.json(data)

    } catch(err) {
        // 发生问题时抛出错误
        return Response.json({ message: 'Something went wrong.', error: err })
    }
}