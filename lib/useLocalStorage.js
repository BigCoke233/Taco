'use client';

/**
 * useLocalStorage.js
 * 
 * 使用 Local Storage 储存数据
 */

export function setStore(name, value) {
    if (typeof window !== undefined && window.localStorage) 
        localStorage.setItem(name, value);
}

export function getStore(name) {
    let value;
    if (typeof window !== undefined && window.localStorage) 
        value = localStorage.getItem(name);
    return value
}