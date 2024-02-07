/**
 * 删除多余内容生成摘要
 * @param {string} 需要操作的字符串 
 * @returns string
 */

export default function digestHTML(digest) {
    digest = digest.replace(/\ +/g,"")              // 删除空行和空格
        .replace(/[ ]/g,"")
        .replace(/[\r\n]/g,"")
        .replace( /<h.*?>(\S|\s)*?<\/h.*?>/g,"")    // 删除标题
        .replace(/<\/?[^>]+(>|$)/g, "")             // 删除 html 标签，只保留文字内容
        .slice(0,150)                               // 截取前 150 个字符
    + '......'

    return digest
}