
export default function LoadMarkdown(file) {
    return import(file).then((module)=>{
        return module;    
    })
}