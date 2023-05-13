import React from 'react'

const ProductsList = ({ products }) => {
    return (
        <div className='flex flex-wrap gap-10 p-10 items-center justify-center'>
            {products.map((product) => {
                return (
                    <button className='md:w-4/12 w-full border-black hover:outline-dashed hover:outline-orange-400 bg-orange-200 p-4 hover:bg-transparent' key={product.name}>
                        <div className='text-start flex flex-col gap-4 justify-between'>
                            <div>
                                <h4 className='text-xl font-semibold'>{product.name}</h4>
                            </div>
                            <div>
                                <p>{product.description}</p>
                                <p>free: {product["free?"]}</p>
                                <p>category: {product.category}</p>
                            </div>
                        </div>
                    </button>
                )
            })}
        </div>
    )
}

export default ProductsList
