import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Counter from '../components/Counter'


function PageProducts() {
  return (
    <div>
        <Announce/>
        <Navbar/> 
            <div className='flex justify-center '>
                <div className='flex flex-1 item-center justify-center'>
                    <img src ='https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216"
            className="product_img' alt='product_Image' className='w-[80%] h-[80%] rounded-lg  hover:scale-[1.1] ease-in duration-300 mt-8'/>
                </div>
                <div className='flex-[1.3] flex items-start justify-items-start flex-col mt-10'>
                  <h1 className='title text-[40px]'>Creamy Hoody 100% original Cotton</h1>
                      <p className='pr-[4rem] text-justify mt-4'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            accusamus, culpa neque ex sunt placeat. Vitae quia qui quo,
            doloribus dolore aliquam veniam. Natus totam odit consequatur
            consectetur delectus nihil!
                      </p>
                      <p className='mt-7 text-3xl'>
                        price : <b>$70</b>
                      </p>
                      {/* color */}
                      <div className='flex text-2xl mt-7'>
                        color
                        <div className='bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5  hover:border-[#8a4af3]'></div>
                        <div className='bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5  hover:border-[#8a4af3]'></div>
                        <div className='bg-green-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5  hover:border-[#8a4af3] '></div>
                      </div>
                      <div className='mt-7 text-2xl'>hover:
                        Size
                          <select className='ml-5 border-2'>
                            <option selected disabled>Select</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                          </select>
                      </div>
                      <div className='mt-5 '>
                        <Counter/>
                      </div>
                      <button className='btn mt-5'>
                        Add to Cart 
                      </button>
                </div>
            </div>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default PageProducts