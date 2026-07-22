import type React from "react"

type Props = { productTitle: string, description: string, img: string }

 

export default function Card(props: React.ComponentProps<"div">) {
    return (
        <div className="card" {...props} />
    )
}
export function CardBody({ description }: Pick<Props, "description">) { // Pick: only pick description from Props type
    return (
        <div  className="card-body">
            <p>{description}</p>
        </div>
    )
}

interface CardHeaderProps extends Omit<Props, "description">, React.ComponentProps<"div"> { } // Omit: remove description from Props type
 

export function CardHeader({ productTitle, img,...props }: CardHeaderProps) { // Omit: remove description from Props type
    return (
        <div className="card-header" style={{aspectRatio: "16/9", height:"8rem"}} {...props}>
            <img src={img}  alt={productTitle}  style={{width: "100%", height:"100%", objectFit: "cover"}}/>
            <h3>{productTitle}</h3>
        </div>
    )
}