/**
 * Heading.js - 页面标题
 * 
 * @return jsx
 */

export default function Heading({ children, className, sub="" }) {
    return (
        <header class="md:flex md:items-end md:gap-6">
            <h1 className={`text-3xl md:text-5xl font-extrabold ${className}`}>{children}</h1>
            <p className="text-xl text-gray-600 font-semibold">{sub}</p>
        </header>
    )
}