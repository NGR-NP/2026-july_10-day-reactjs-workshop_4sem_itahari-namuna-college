import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Card, { CardBody, CardHeader } from "../componets/card"
import type { TypeProduct } from "../types/Types.product"

export default function SingleProduct() {
    const { productID } = useParams()
    const [product, setProdct] = useState<TypeProduct | null>(null)
    const[isLoading,setIsLoading]=useState(true)
    async function getSingleProduct() {
        try {
            setIsLoading(true)
            const res = await fetch(`https://fakestoreapi.com/products/${productID}`)
            const data = await res.json()
            // console.log(data)
            setProdct(data)
        } catch (error) {
            console.log("error occured in getSingleProduct function>>", error)
        }
        finally{
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getSingleProduct()
    }, [])
     if(isLoading) return <div>Loading...</div>
    if(!product) return <div>404 Product not found</div>
    return (
        <main>
            <section><h1>Single Product</h1></section>
            <section>
                <Card
                   
                    style={{ backgroundColor: "blue", padding: "10px", marginTop: "10px" }}
                >
                    <CardHeader id={`card-header-${productID}`} productTitle={product?.title} img={product?.image} />
                    <CardBody description={product?.description} />
                </Card>
            </section>
        </main>
    )
}