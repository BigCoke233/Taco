/**
 * Heading.js - 页面标题
 * 
 * @return jsx
 */

export default function Heading({ children, className, sub="" }) {
    return (
        <header className={`md:flex md:items-end md:gap-6 ${className}`}>
            <h1 className="text-2xl md:text-5xl font-extrabold">{children}</h1>
            <p className="md:text-xl text-gray-600 font-semibold">{sub}</p>
        </header>
    )
}