import Card from "../componets/card"

const DataProducts=[
    {
        title: "Product 1",
        description: "This is the description for Product 1."
    },
    {
        title: "Product 2",
        description: "This is the description for Product 2."
    },
    {
        title: "Product 3",
        description: "This is the description for Product 3."
    },
     {
        title: "Product 4",
        description: "This is the description for Product 4."
    }   
]

export default function ProductsPage() {
    return (
        <main>
            <div>
                <h1>Products Page</h1>
            </div>
            {/* <Card title={DataProducts.at(0)?.title!} description={DataProducts.at(0)?.description!}/>
            <Card title={DataProducts.at(1)?.title!} description={DataProducts.at(1)?.description!}/>
            <Card title={DataProducts.at(2)?.title!} description={DataProducts.at(2)?.description!}/> */}





            {
                DataProducts.map((data, idx)=> (
                    <Card key={idx} title={data.title} description={data.description}/>
                ))
            }
        </main>
    )
}