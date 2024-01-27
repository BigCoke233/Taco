/**
 * 文章分类
 * 
 * @file /data/categories.data.js
 * @exports object
 */

const categories = {
    "pieces": {
        slug: "pieces",
        name: "无心文字",
        description: "无处安放的有感而发。"
    },
    "essays": {
        slug: "essays",
        name: "话题深潜",
        description: "整齐排列的想法，和时不时的长篇大论。"
    },
    "logs": {
        slug: "logs",
        name: "非我他物",
        description: "没有多少独特想法的记实性文字。"
    },
    "fictions": {
        slug: "fictions",
        name: "小说",
        description: "于另一个世界的文字旅行。"
    },
    "poetry": {
        slug: "poetry",
        name: "诗歌",
        description: "前言不接后语的流动文字。"
    }
}

module.exports = categories