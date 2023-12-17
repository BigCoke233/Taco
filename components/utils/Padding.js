/**
 * 页边距
 * 
 * @file utils/Padding
 * @returns jsx
 */

const paddingClass = "py-5 px-2 md:px-16"

export default function Padding({ children, className, id, dangerouslySetInnerHTML}) {
    if(dangerouslySetInnerHTML==null) 
        return <div id={id} className={`${paddingClass} ${className}`}>{children}</div>

    else return <div id={id} className={`${paddingClass} ${className}`}
    dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
}