/**
 * 页边距
 * 
 * @file utils/Padding
 * @returns jsx
 */

export default function Padding({ children, className, id, dangerouslySetInnerHTML}) {
    return <div id={id} dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    className={`py-5 px-2 md:px-16 ${className}`}>{children}</div>
}