/**
 * parseBlogPost - 解析博客文章
 * 
 * @returns object
 */

export function parseBlogPost(post) {
    //在文章内容中寻找 <!--more--> 标签
    // 若存在，则截取 <!--more--> 之前的内容
    // 若不存在，则截取前 150 个字符
    var moreTag = post.digest.search(/<!--more-->/)
    var sliceEnd = (moreTag!=-1) ? moreTag- 3 : 150
    
    //删除 html 标签，只保留文字内容，然后执行截取操作
    var digest = post.digest.replace(/<\/?[^>]+(>|$)/g, "").slice(0,sliceEnd)

    //发布时间
    var created = new Date(post.created * 1000)
    var date = created.getFullYear() + ' / ' + created.getMonth() + ' / ' + created.getDay();

    //分类
    var category = post.categories[0].name

    return {
        "digest": digest,
        "date": date,
        "category": category,
        "slug": post.slug,
        "title": post.title
    }
}