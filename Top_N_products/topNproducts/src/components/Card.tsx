import React from 'react'
import { ProductsType } from './GetProducts'

const Card = ({ product }: { product: ProductsType }) => {
    return (
        <div className='max-w-[300px] p-4 rounded-xl text-center bg-[#413f3f] max-auto'>
            <h1 className='text-2xl font-semibold pb-2'>{product.productName}</h1>
            <div className='grid grid-cols-2 gap-2 justify-items-center'>
                <div className='space-y-2'>
                    <p>price: {product.price}</p>
                    <p>availability: {product.availability}</p>
                </div>
                <div className='space-y-2'>
                    <p>rating: {product.rating}</p>
                    <p>discount: {product.discount}</p>
                </div>
            </div>
        </div>
    )
}

export default Card