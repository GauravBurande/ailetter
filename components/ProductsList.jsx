import Image from 'next/image'
import React from 'react'

const ProductsList = ({ products }) => {
    return (
        <section className='flex flex-wrap gap-10 p-10 items-center justify-center'>
            {products.map((product) => {
                return (
                    <div className='md:w-5/12 w-full border-black hover:outline-dashed hover:outline-orange-400' key={product.title}>
                        <div className='flex flex-col sm:flex-row w-full'>
                            <div className='md:w-2/5 h-40 md:h-36 relative'>
                                <Image className='absolute h-full w-full overflow-hidden' alt={product.title} width={400} height={200} src={`${!product.image.includes("https://") ? "https://topai.tools" + product.image : product.image}`} />
                            </div>
                            <div className='text-start w-full pl-5 md:w-3/5 py-2 text-sm flex justify-center flex-col bg-orange-200 hover:bg-transparent'>
                                <div>
                                    <h4 className='md:text-xl text-lg font-semibold'>{product.title}</h4>
                                </div>
                                <div className='w-full'>
                                    <p className='mb-3 pr-1 w-full line-clamp-3 leading-none'>{product.description}</p>
                                    <p>Pricing: <span className='hover:bg-orange-200 bg-gray-100 px-1 mb-1 inline-block'>{product.pricing}</span></p>
                                    <div>tags: {product.category.map((tag) => {
                                        return (
                                            <div className='inline' key={tag}>
                                                <div className='inline mr-1 px-1 hover:bg-orange-200 bg-gray-100'>
                                                    {tag}
                                                </div>
                                            </div>
                                        )
                                    })}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default ProductsList
