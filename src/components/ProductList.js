import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products, onDeleteProduct, onEditProduct }) => {
    return (
        <div className='cards-product'>
            {products.map((data) => {
                return (
                    <ProductCard
                        key={data.id}
                        products={data}
                        onDeleteProduct={onDeleteProduct}
                        onEditProduct={onEditProduct} />
                )
            })}
        </div>
    )
}

export default ProductList