/**
 * Heading.js - 页面标题
 * 
 * @return jsx
 */

export default function Heading({ children, className }) {
    return (
        <h1 className={`text-3xl md:text-5xl font-extrabold ${className}`}>{children}</h1>
    )
}