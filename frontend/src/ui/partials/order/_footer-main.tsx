import React, { useEffect, useState } from 'react'
import { productType } from '../../../data/types/productType';
import { formatPrice } from '../../../data/formater/currentFormater';
import axios from "axios";
import { URL_BASE } from '../../../data/db/ConnectionDB';

type Props = {
    products: productType[],
    onSubmit: () => void; 
}

function FooterMain({products, onSubmit}: Props) {
    const [totalPrice, setTotalPrice] = useState('0');

    function sumTotalPrice(): void {
        var total = 0;
        products.map(item => total += item.price);
        
        setTotalPrice(formatPrice(total));
    }

    useEffect(() => {
        sumTotalPrice();
    }, [products])

    return (
        <div className='w-full rounded-lg p-3 bg-red-500 flex justify-between items-center'>
            <div>
                <p className='uppercase text-slate-300 text-[10px]'>
                    <span className='text-white font-bold text-sm'>{products.length}</span> produtos selecionados
                </p>

                <p className='uppercase text-slate-300 text-[12px]'>
                    <span className='text-white font-bold text-[16px]'>{totalPrice}</span> VALOR TOTAL 
                </p>
            </div>

            <div>
                <button onClick={onSubmit} className='bg-white hover:scale-105 transition-transform text-red-500 rounded-lg py-3 px-6 font-bold'>FAZER PEDIDO</button>
            </div>
        </div>
    )
}

export default FooterMain;