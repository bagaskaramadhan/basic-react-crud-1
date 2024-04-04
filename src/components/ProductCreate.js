import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const ProductCreate = ({onCreateProduct}) => {

    // MODAL BUTTON
    const [show, setShow] = useState(false);
    const handleButton = (action) => {
        if (action === "close") {
            setShow(false)
        } else if (action === "open") {
            setShow(true)
        }
    }
    // MODAL BUTTON

    // ADD PRODUCT
    const initialState = {
        nameProduct: "",
        descProduct: "",
        imgUrlProduct: ""
    }
    const [addProduct, setAddProduct] = useState(initialState)

    const inputData = (e) => {
        setAddProduct({ ...addProduct, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onCreateProduct(addProduct)
        setAddProduct(initialState)
        handleButton("close")
    }
    // ADD PRODUCT

    return (
        <div className='add-product'>
            <Button variant="primary" onClick={() => handleButton("open")}>
                Add Product
            </Button>

            <Modal show={show} onHide={() => handleButton("close")}>
                <Modal.Header>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='form-create'>
                        <input className='input' placeholder='Masukan Nama Product' name='nameProduct' onChange={inputData} />
                        <input className='input' placeholder='Masukan Description Product' name='descProduct' onChange={inputData} />
                        <input className='input' placeholder='Masukan Url Product' name='imgUrlProduct' onChange={inputData} />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleButton("close")}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ProductCreate