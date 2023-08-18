import ProductView from "@/views/products"
import { useRouter } from "next/router"
import {useEffect, useState} from "react"
import  useSWR  from "swr"


const fetcher = (url:string) => fetch(url).then(res => res.json()) 



const ProductPage = ()=>{
    const [products, setProducts] = useState([])

    // useEffect(()=>{
    //     fetch("http://localhost:3000/api/product").then((res)=>{
    //         res.json().then((response)=>{
    //             setProducts(response.data)
    //         })
    //     })
    // }, [])

    const { data, error, isLoading } = useSWR('/api/product', fetcher)
    
    console.log("data ", data)
    console.log("error  ", error)
    console.log("isLoading ", isLoading)

    const ShowData = ()=>{
        console.log(products)
    }

    return(
        <div>
            <button onClick={()=>{ShowData()}}>show data</button>
            <ProductView products={isLoading ? [] : data.data} />
            
        </div>
    )
}

export default ProductPage