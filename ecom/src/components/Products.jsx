import React from 'react'
import { ApiTopPropduct } from '../componentsApi/TopProductsApi'
import Product from './Product'


function Products() {
  return (
      <div className='p-5 flex flex-wrap'>
    {
        ApiTopPropduct.map((product,index)=>(
            <Product item={product} key={index}/>
        ))
    }
    </div>
  )
}

export default Products