export default function ToolTitle(props: {tool_title: string}){
    return (
        <h3 className="px-2 py-1 text-sm font-light text-black">{props.tool_title}</h3>
    )
}