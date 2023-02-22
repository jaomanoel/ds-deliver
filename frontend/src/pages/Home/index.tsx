import React from 'react'

import Main from "../../assets/main.svg";

function index() {
    return (
        <main className='w-100 flex items-center justify-center'>
            <div className='flex justify-between items-start gap-4 max-w-7xl w-full'>
                <div className='flex flex-col gap-10'>
                    <h1 className='text-[55px] font-bold max-w-[490px] leading-[58px] tracking-[-0.015em]'>
                        Faça seu pedido que entregamos pra você!!!
                    </h1>

                    <p className='text-gray-300 text-2xl max-w-[490px] tracking-[-0.015em]'>
                        Escolha o seu pedido e em poucos minutos levaremos na sua porta
                    </p>

                    <a className='uppercase hover:scale-105 transition-transform bg-red-500 w-[235px] p-4 text-center font-bold text-white rounded-lg tracking-[-0.015em]' href="#">Fazer pedido</a>
                </div>

                <div className=''>
                    <img src={Main} alt="DS Delivery" />
                </div>
            </div>
        </main>
    )
}

export default index