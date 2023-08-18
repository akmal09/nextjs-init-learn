import styles from "./Product.module.scss"

type ProductType = {
    id:string;
    name:string;
    price:number;
    image:string;
    size:string;
    category:string;
}

const ProductView = ({products}:{ products:ProductType[] })=>{
    console.log()
    return(
        <div className={styles.product}>
            <h1 className={styles.product__title}>Product Page</h1>
            <div className={styles.product__content}>
                
                {products.map((product:ProductType)=>{
                    return (
                        <div key={product.id} className={styles.product__content__item} >
                            <div className={styles.product__content__item__image}>
                                <img src={product.image} alt={product.image} />
                            </div>
                            <h4 className={styles.product__content__item__name}>
                                {product.name}
                            </h4>
                            <p className={styles.product__content__item__category}>
                                {product.category}
                            </p>
                            <p className={styles.product__content__item__price}>
                                {product.price}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default ProductView