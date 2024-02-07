'use client'

import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css'

/**
 * 初始化图片灯箱
 * 
 * * 必须在 useEffect 中使用
 * 
 * @param {string} selector 需要初始化的元素的 CSS 选择器
 * @returns {boolean} 如果成功则返回 true
 */

export default function initLightBox(selector) {
    const allImages = document.querySelectorAll(selector);
    
    try {
        allImages.forEach(element => {
            // 创建灯箱并绑定点击事件
            const instance = basicLightbox.create(`
                <img src="${element.src}" class="lightbox-image" />
            `);
            element.addEventListener('click', () => {
                instance.show();
            })
            // 创建成功后，将图片的鼠标指针设置为可点击
            element.classList.add('pointer')
        })
    } catch(error) {
        console.error(error)
        return false
    }

    return true
}