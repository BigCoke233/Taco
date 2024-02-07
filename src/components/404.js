/**
 * 404 页面
 * 
 * @returns jsx
 */

export default function NotFound() {
    return (
        <div className="h-[100dvh] flex flex-col justify-center items-center">
            <h1 className="text-lime-700 font-bold font-mono text-[6rem] md:text-[10rem] 
                leading-none my-0">
                404
            </h1>
            <p className="text-lg">此地无银三百两</p>
        </div>
    )
}