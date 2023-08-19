import ProductView from "@/views/products"

type ProductType = {
    id:string;
    name:string;
    price:number;
    image:string;
    size:string;
    category:string;
}

const ProductPage = (props : {productsData: ProductType[]})=>{
    // ini harus sesuai dengan products data di bagian value parameter, misal key nya props dan value nya productData maka hook productData dapat di assign dengan variabel props
    const {productsData} = props 

    return(
        <ProductView products={productsData} />
    )
}

export default ProductPage

export async function getStaticProps(){
    // fetch data
    const res = await fetch("http://localhost:3000/api/product")
    const responseData = await res.json()
    // console.log(respon se)

    return {
        props:{
            productsData: responseData.data
        }
    }
    // console.log("tes")
}