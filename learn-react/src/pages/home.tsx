

type TypeReactComponent =
    { children?: React.ReactNode, style?: React.CSSProperties }

const ReactComponent = ({children,style}: TypeReactComponent) => {
    return (
        <div style={style}>
            <h1>React + TypeScript + Vite</h1>
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


