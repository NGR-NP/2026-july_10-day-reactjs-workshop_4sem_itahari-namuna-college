import type React from "react"


type TypeReactComponent = React.ComponentProps<"div">


const ReactComponent = ({children,...props}: TypeReactComponent) => {
    console.log("ReactComponent rendered")
    return (
        <div {...props}>
            <h1>React + TypeScript + Vite hello</h1>
            {children}
        </div>
    )
}

type TypeProps = { children?: React.ReactNode, style?: React.CSSProperties }

export const H1 = (props: TypeProps) => {
    return (
        <p {...props} />
    )
}

export default ReactComponent


