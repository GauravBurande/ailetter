import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import { GoLinkExternal } from "react-icons/go"

const ProductsList = ({ products }) => {

    return (
        <section className='flex flex-wrap gap-10 p-10 items-center justify-center'>
            {products.map((product) => {
                return (
                    <section className='md:w-5/12 w-full border-black hover:outline-dashed hover:outline-orange-400' key={product.title}>
                        <Link href={`/tools/${product.slug}`}>
                            <div className='flex flex-col sm:flex-row w-full'>
                                <div className='md:w-2/5 h-40 md:h-36 relative'>
                                    <Image className='absolute h-full w-full overflow-hidden' alt={product.title} width={400} height={200} src={`${!product.image.includes("https://") ? "https://topai.tools" + product.image : product.image}`} />
                                </div>
                                <div className='text-start relative w-full pl-5 md:w-3/5 py-2 text-sm flex justify-center flex-col bg-orange-200 hover:bg-transparent'>
                                    {/* CAUSES ERROR: <a> cannot appear as a descendant of <a>. */}
                                    {/* <a href={product["visit-href"]} target='_blank'>
                                        <div className='absolute flex p-2 items-center justify-center top-0 right-2'>
                                            <p>visit</p>
                                            <GoLinkExternal />
                                        </div>
                                    </a> */}
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
                        </Link>
                    </section>
                )
            })}
        </section>
    )
}

export default ProductsList
