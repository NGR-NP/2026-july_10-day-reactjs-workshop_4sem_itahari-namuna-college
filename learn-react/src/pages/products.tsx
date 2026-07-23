import { useEffect, useState } from "react";
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
    const [products, setProducts]=useState([])
    async function getProducts() {
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            return data;

        } catch (err) {
            console.error("Error fetching products:", err);
        }

    }
    useEffect(
        () => {
            getProducts()
        },
        []
    )
    return (
        <main>
            <div>
                <h1>Products Page</h1>
            </div>
            <div style={{ padding: "2rem" }}>

                {
                    DataProducts.map((data, idx) => {
                        return (
                            <Card
                                id={`card-${idx}`}
                                style={{ backgroundColor: "blue", padding: "10px", marginTop: "10px" }}
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