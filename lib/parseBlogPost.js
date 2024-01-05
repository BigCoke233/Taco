/**
 * parseBlogPost - 解析博客文章
 * 
 * @returns object
 */

export function parseBlogPost(post) {
    post = post.data ? post.data : post

    //摘要
    var digest = stripDigest(post.digest)

    //发布时间
    var date = post.date.year+'.'+post.date.month+'.'+post.date.day;

    return {
        "digest": digest,
        "date": date,
        "year": post.date.year,
        "month": post.date.month,
        "day": post.date.day,
        "category": post.categories[0].name,
        "categorySlug": post.categories[0].slug,
        "slug": post.slug,
        "title": post.title,
        "content": post.text ? post.text : post.digest
    }
}

/**
 * stripDigest - 删除多余内容生成摘要
 * 
 * @returns string
 */

function stripDigest(digest) {
    //删除空行和空格
    digest = digest.replace(/\ +/g,"").replace(/[ ]/g,"").replace(/[\r\n]/g,"")

    //删除标题
    digest = digest.replace( /<h.*?>(\S|\s)*?<\/h.*?>/g,"")
    
    // 在文章内容中寻找 <!--more--> 标签
    // 若存在，则截取 <!--more--> 之前的内容
    // 若不存在，则截取前 150 个字符
    var moreTag = digest.search(/<!--more-->/)
    var sliceEnd = (moreTag>0) ? moreTag+2 : 150
    
    //删除 html 标签，只保留文字内容，然后执行截取操作
    digest = digest.slice(0,sliceEnd).replace(/<\/?[^>]+(>|$)/g, "") + "......"

    return digest
}