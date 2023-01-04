import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { selectedProducts } from '../redux/action/productActions'
import { useLocation } from 'react-router-dom'

const ProductDetail = () => {
  let location = useLocation()
  var newId = location.state.id-1
  console.log("Location",newId)
  const productID = useParams()
  console.log({productID})
  const product = useSelector(state=>state.allProducts)
  console.log("ProductDetails",product.products[newId])
  let {id,title,price,description,category,rating, image} = product.products[newId]
  const dispatch = useDispatch()
  const getProductDetails = async ()=>{
    const response = await axios.get(`https://fakestoreapi.com/products/${newId}`)
    .catch(err=>console.log(err,"Error"))
    dispatch(selectedProducts(response.data))
  }
  useEffect(()=>{
   if(productID && product !== null) getProductDetails()
  },[product])
  return (
    <div className='border border-5 py-5' key={id}>
      <p className='mb-0 text-center display-1 bg-secondary text-dark fw-bold'>PRODUCT DETAILS</p>
        <h1 className='bg-dark fw-bold fs-1 text-white py-2 text-center'>{title}</h1>
        <h1>ID : {id}</h1>
        <div className="d-flex align-items-center justify-content-evenly bg-success text-info py-2">
        <img style={{height:'200px'}} className='img-fluid' src={image} alt="" />
          <p className="mb-0 fs-4 fw-bold">Title : {title}</p>
          <p className="mb-0 fs-4 fw-bold">Price : {price}</p>
        </div>
        <div className="d-flex justify-content-evenly py-2 bg-info text-dark fw-bold">
        <p className='mb-0 text-center'>Category : {category}</p>
        <p className='mb-0'>Rate : {rating.rate}</p>
        <p className='mb-0'>Count : {rating.count}</p>
    </div>
    <p className="mb-0 text-center bg-warning text-danger fs-1 fw-bold">Description : {description}</p>
        </div>
  )
}
export default ProductDetail