'use client';

/**
 * useToast.js
 * 
 * 使用 Toastify 库
 */

import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export default function Toast(msg, type = "normal") {
    let bgColor = (type=="error") ? 'rgb(159 18 57)' : 'var(--general-bg)'

    Toastify({
        text: msg,
        style: {
            color: "#fff",
            background: bgColor,
            boxShadow: "0.1rem 0.1rem 0.2rem rgba(0,0,0,0.15)",
        },
        duration: 1750
    }).showToast()
}