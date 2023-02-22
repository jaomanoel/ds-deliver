import React from 'react'

function index() {
    return (
        <div className='flex items-center gap-10'>
            <h1 className='uppercase font-bold text-red-500 max-w-[10rem] text-4xl'>Siga as ETAPAS</h1>

            <ul className='flex flex-col gap-1'>
                <li className='flex items-baseline gap-2 text-gray-500 font-medium'>
                    <span className='text-red-500 font-bold text-2xl'>1</span>
                    <p>Selecione os produtos e localização.</p>
                </li>
                <li className='flex items-baseline gap-2 text-gray-500 font-medium'>
                    <span className='text-red-500 font-bold text-2xl'>2</span>
                    <p>
                        Depois clique em <span className='font-bold text-gray-500'>ENVIAR PEDIDO</span>
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default index;