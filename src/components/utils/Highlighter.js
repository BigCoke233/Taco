'use client';

/**
 * 高光笔效果
 * 
 * @file components/utils/Highlighter
 */

export default function Highlighter({ children, className }) {
    return (
        <>
            <style jsx>{`.highlighter > span::before {
                background-color: rgba(63, 98, 18, 0.25);
            
                content: "";
                position: absolute;
                width: calc(100% + 4px);
                height: 60%;
                left: -2px;
                bottom: 0;
                z-index: -1;
                transform: rotate(-2deg);
                border-radius: 20% 30%
            }`}</style>
            <div className={`highlighter ${className}`}>
                <span className="relative">{children}</span>
            </div>
        </>
    )
} 