import Card, { CardBody, CardHeader } from "../componets/card"

const DataProducts = [
    {
        img: "/hello/qrcode_github.com.png",
        productTitle: "Product 1",
        description: "This is the description for Product 1.",


    },
    {
        img: "/hello/qrcode_github.com.png",

        productTitle: "Product 2",
        description: "This is the description for Product 2."
    },
    {
        img: "/hello/qrcode_github.com.png",

        productTitle: "Product 3",
        description: "This is the description for Product 3."
    },
    {
        img: "/hello/qrcode_github.com.png",
        productTitle: "Product 4",
        description: "This is the description for Product 4."
    }
]

export default function ProductsPage() {
    return (
        <main>
            <div>
                <h1>Products Page</h1>
            </div>
            <div>
                {/* <Card title={DataProducts.at(0)?.title!} description={DataProducts.at(0)?.description!}/>
                
                <Card title={DataProducts.at(1)?.title!} description={DataProducts.at(1)?.description!}/>
                <Card title={DataProducts.at(2)?.title!} description={DataProducts.at(2)?.description!}/> */}
            </div>
            <div style={{padding:"2rem"}}>

            {
                DataProducts.map((data, idx) => {
                    return (
                        <Card
                        id={`card-${idx}`}
                            style={{ backgroundColor: "blue", padding: "10px", marginTop:"10px" }}
                            key={idx}>
                            <CardHeader id={`card-header-${idx}`} productTitle={data.productTitle} img={data.img} />
                            <CardBody description={data.description} />
                        </Card>
                    )
                }

                )
            }
            </div>

        </main>
    )
}