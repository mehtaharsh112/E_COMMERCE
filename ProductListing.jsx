import React,{useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { setProducts } from '../redux/action/productActions'
const ProductListing = () => {
    const selector = useSelector(state=>state)
    const dispatch = useDispatch()
    let fetchProduct = async ()=>{
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("Error: ",err)
        })
       dispatch(setProducts(response.data))
       console.log("RESPONSE DATA",response.data)
    }
    useEffect(()=>{
        fetchProduct()
    },[])
    // console.log(selector.allProducts.products[0].title)
    console.log("Products",selector)
  return (
    <div style={{margin:'30px 0'}} className='ui grid container'>
        <ProductComponent/>
    </div>
  )
}

export default ProductListing