import { useRouter } from "next/router"
import {useEffect, useState} from "react"
// import process from "../../../"

type productType = {
    id:number,
    name:string,
    price:number,
    size:string
}    
const ProductPage = ()=>{

    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/api/product").then((res)=>{
            res.json().then((response)=>{
                setProducts(response.data)
            })
        })
    }, [])

    const ShowData = ()=>{
        console.log(products)
    }

    console.log("api key",process.env.firebase_apiKey)

    return(
        <div>
            <button onClick={()=>{ShowData()}}>show data</button>
            <h1>Product Page</h1>
            {products.map((product:productType)=>{
                return (<div key={product.id}>{product.name}</div>)
            })}
        </div>
    )
}

export default ProductPage