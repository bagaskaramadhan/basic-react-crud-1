import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const ProductEdit = ({ products, onEditProduct, onCancel }) => {
    const initialState = {
        nameProduct: products.nameProduct,
        descProduct: products.descProduct,
        imgUrlProduct: products.imgUrlProduct
    }

    const [formData, setFormData] = useState(initialState)
    const { nameProduct, descProduct } = formData

    const inputData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        console.log("PRODUCT EDIT")
        e.preventDefault()
        onEditProduct(products.id, formData)
        onCancel();
    }

    const handleCancel = (e) => {
        e.preventDefault();
        onCancel();
    };

    return (
        <div className='card-edit'>
            <form className='input-edit'>
                <input className='edit-content' name='nameProduct' value={nameProduct} onChange={inputData} />
                <input className='edit-content' name='descProduct' value={descProduct} onChange={inputData} />
                <input className='edit-content' name='imgUrlProduct' placeholder={initialState.imgUrlProduct} onChange={inputData} />
            </form>
            <Button onClick={handleSubmit} className='edit-content'>Save</Button>
            <Button onClick={handleCancel} className='edit-content'>Cancel</Button>
        </div>
    )
}

export default ProductEdit