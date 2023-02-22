import React from 'react'

import { productType } from "../../../data/types/productType";
import { formatPrice } from '../../../data/formater/currentFormater';

type Props = {
    item: productType,
    selected: boolean
}

function index({item, selected}: Props ) {
    return (
        <>
            {selected ? (
                <div className='rounded-lg border-4 border-green-700 border-solid shadow-md p-2 w-full h-full  bg-slate-50'>
                    <h3 className='text-center text-green-700 pb-4 font-bold'>{item.name}</h3>

                    <img className='mb-4 w-full rounded-lg' src={item.imageUri} alt={item.name} />

                    <h2 className='font-bold text-green-700 text-2xl text-left'>{formatPrice(item.price)}</h2>

                    <div className='my-3 bg-gray-200 w-full h-[.1rem]'></div>

                    <div>
                        <h4 className='pb-4 text-base text-gray-400 text-left font-bold'>Descricao</h4>

                        <p className='text-gray-400 text-sm text-left'>
                            {item.description}
                        </p>
                    </div>
                </div>
            ): (
                <div className='rounded-lg border-4 border-transparent border-solid shadow-md p-2 w-full h-full  bg-slate-50'>
                    <h3 className='text-center text-red-500 pb-4 font-bold'>{item.name}</h3>

                    <img className='mb-4 w-full rounded-lg' src={item.imageUri} alt={item.name} />

                    <h2 className='font-bold text-red-500 text-2xl text-left'>{formatPrice(item.price)}</h2>

                    <div className='my-3 bg-gray-200 w-full h-[.1rem]'></div>

                    <div>
                        <h4 className='pb-4 text-base text-gray-400 text-left font-bold'>Descricao</h4>

                        <p className='text-gray-400 text-sm text-left'>
                            {item.description}
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}

export default index