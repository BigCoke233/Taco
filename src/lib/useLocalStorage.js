'use client';

/**
 * 将数据储存至 LocalStorage
 * @param {string} name 名称
 * @param {string} value 要储存的值
 * @returns {boolean} 如果无法使用 localStorage 则返回 false
 */

export function setStore(name, value) {
    if (typeof window !== undefined && window.localStorage) 
        localStorage.setItem(name, value);
    else return false
    return true
}

/**
 * 获取 LocalStorage 中的数据
 * @param {string} name 名称
 * @returns {boolean} 如果无法使用 localStorage 则返回 false
 */

export function getStore(name) {
    let value;
    if (typeof window !== undefined && window.localStorage) 
        value = localStorage.getItem(name);
    else return false
    return value
}