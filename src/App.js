import { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import { Products } from './data/products';
import ProductCreate from './components/ProductCreate';

function App() {
  const [dataProduct, setDataProduct] = useState(Products)

  // CREATE PRODUCT
  const onCreateProduct = (product) => {
    setDataProduct([...dataProduct, { id: Math.round(Math.random() * 777), ...product }])
  }

  // EDIT PRODUCT
  const onEditProduct = (id, data) => {
    console.log("ON EDIT PRODUCT IN APP")
    const editProduct = dataProduct.map((prod) => {
      if (prod.id === id) {
        // console.log("PROD =", { ...prod })
        // console.log("DATA =", { ...data })
        return { ...prod, ...data }
      }
      return prod
    })
    // console.log(editProduct);
    setDataProduct(editProduct)
  }

  // DELETE PRODUCT
  const onDeleteProduct = (id) => {
    const deleteProduct = dataProduct.filter((product) => {
      return product.id !== id
    })
    // console.log("RESULT ", deleteProduct)
    setDataProduct(deleteProduct)
  }

  return (
    <div>
      <h1 className='header-title'>CRUD Motor</h1>
      <ProductCreate onCreateProduct={onCreateProduct} />
      <ProductList
        products={dataProduct}
        onDeleteProduct={onDeleteProduct}
        onEditProduct={onEditProduct} />
    </div>
  )
}

export default App;
