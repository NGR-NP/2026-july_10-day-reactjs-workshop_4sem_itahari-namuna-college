type Props = { title: string, description: string, img: string }

export default function Card({ title, description, img }: Props) {
    return (
        <div className="card">
            <CardHeader title={title} img={img} />
            <CardBody description={description} />
        </div>
    )
}
export function CardBody({ description }: Pick<Props, "description">) { // Pick: only pick description from Props type
    return (
        <div className="card-body">
            <p>{description}</p>
        </div>
    )
}

export function CardHeader({ title, img }: Omit<Props, "description">) { // Omit: remove description from Props type
    return (
        <div className="card-header">
            <img src={img} alt={title} />
            <h3>{title}</h3>
        </div>
    )
}