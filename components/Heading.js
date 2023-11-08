/**
 * Heading.js - 页面标题
 * 
 * @return jsx
 */

export default function Heading({ children }) {
    return (
        <h1 className="text-3xl md:text-5xl font-extrabold">{children}</h1>
    )
}