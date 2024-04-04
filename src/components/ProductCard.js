import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { RiDeleteBin4Line } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import ProductEdit from './ProductEdit';

const ProductCard = ({ products, onDeleteProduct, onEditProduct }) => {

    // COUNT PRODUCT
    const [totalProduct, setTotalProduct] = useState(0);
    const countProduct = (action) => {
        if (action === "minus") {
            if (totalProduct === 0) {
                return totalProduct
            }
            setTotalProduct(totalProduct - 1)
        } else if (action === "plus") {
            setTotalProduct(totalProduct + 1)
        }
    }
    // COUNT PRODUCT

    // EDIT PRODUCT
    const [showEdit, setShowEdit] = useState(false)
    const handleEditProduct = () => {
        console.log("KLIK EDIT")
        setShowEdit(true)
    }
    // EDIT PRODUCT

    return (
        <Card className='card'>
            {showEdit ?
                <ProductEdit products={products} onEditProduct={onEditProduct} onCancel={() => setShowEdit(false)} />
                : <>
                    <div className='edit-delete'>
                        <RiDeleteBin4Line className='delete-icon' onClick={() => onDeleteProduct(products.id)} />
                        <AiFillEdit className='edit-icon' onClick={handleEditProduct} />
                    </div><Card.Img variant="top" src={products.imgUrlProduct} />
                    <Card.Body>
                        <Card.Title>{products.nameProduct}</Card.Title>
                        <Card.Text>{products.descProduct}</Card.Text>
                        <div className='button-count'>
                            {totalProduct > 0 ?
                                <>
                                    <Button onClick={() => countProduct("minus")}>-</Button>
                                    {totalProduct}
                                    <Button onClick={() => countProduct("plus")}>+</Button>
                                </>
                                : <Button onClick={() => countProduct("plus")}>CHECKOUT</Button>}
                        </div>
                    </Card.Body>
                </>
            }
        </Card>
    )
}

export default ProductCard