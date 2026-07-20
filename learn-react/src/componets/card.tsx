type Props = {title: string, description: string}

export default function Card({title, description}: Props) {
    return(
        <div className="card">
            <div className="card-header">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <p>{description}</p>
            </div>
        </div>
    )
}


