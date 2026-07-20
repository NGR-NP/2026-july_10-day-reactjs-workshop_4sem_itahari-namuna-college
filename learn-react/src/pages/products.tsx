import Card from "../componets/card"

const DataProducts = [
    {
        img: "/hello/qrcode_github.com.png",
        title: "Product 1",
        description: "This is the description for Product 1.",
        
        
    },
    {
        img: "/hello/qrcode_github.com.png",

        title: "Product 2",
        description: "This is the description for Product 2."
    },
    {
        img: "/hello/qrcode_github.com.png",

        title: "Product 3",
        description: "This is the description for Product 3."
    },
    {
        img: "/hello/qrcode_github.com.png",
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
            <div>
                {/* <Card title={DataProducts.at(0)?.title!} description={DataProducts.at(0)?.description!}/>
                
                <Card title={DataProducts.at(1)?.title!} description={DataProducts.at(1)?.description!}/>
                <Card title={DataProducts.at(2)?.title!} description={DataProducts.at(2)?.description!}/> */}
            </div>
        {
          DataProducts.map((data, idx) =>{
              return(
                   <Card key={idx} title={data.title}  description={data.description} 
                   img={data.img} />
                  )}
                
          )
        }
        </main>
    )
}