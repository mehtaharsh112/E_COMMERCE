import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const ProductComponent = () => {
let navigate = useNavigate()

  const selector = useSelector(state=>state.allProducts.products)
  const renderList = selector.map((products)=>{
    const {id,title,image,price, category} = products
    function nav()
{
  navigate(`/product/${id}`,{state:{id:id}})
}    return(
     <button style={{border:0}} onClick={nav}>
      <div className='container-fluid border border-5' key={id}>
        <div className="row d-flex justify-content-evenly">
          <div className="col-4">
            <img className='img-fluid' src={image} alt="" />
            <h1>{title}</h1>
            <h1>ID : {id}</h1>
            <p>$ {price}</p>
            <p>{category}</p>
          </div>
      </div>
      </div>
      </button>
    )
  })
  // let {id,title,category} = selector[0]
  return (
 <>
  {renderList}
 </>
  )
}

export default ProductComponent