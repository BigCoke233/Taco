'use client';

/**
 * useToast.js
 * 
 * 使用 Toastify 库
 */

import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export default function Toast(msg) {
    Toastify({
        text: msg,
        style: {
            border: "2px solid rgb(63, 98, 18)",
            color: "rgb(63, 98, 18)",
            background: "var(--general-bg)",
            boxShadow: "0.1rem 0.1rem 0.2rem rgba(0,0,0,0.15)"
        },
        duration: 2250
    }).showToast()
}