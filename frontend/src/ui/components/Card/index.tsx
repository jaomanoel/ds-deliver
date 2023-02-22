import React from 'react'

interface CardProps {
    title?: String,
    uri?: String,
    price?: DoubleRange,
    desc?: String
}

function index(props: CardProps) {
    return (
        <div className='rounded-lg shadow-md p-2 w-60  bg-slate-50'>
            <h3 className='text-center text-red-500 pb-4'>Pizza Calabresa</h3>

            <img className='mb-4 w-full rounded-lg' src="https://th.bing.com/th/id/OIP.EZB54UxuXxsmohy73KoeXwHaE8?w=274&h=183&c=7&r=0&o=5&pid=1.7" alt="Imagem da pizza" />

            <h2 className='font-bold text-red-500 text-2xl'>R$ 35,90</h2>

            <div className='my-3 bg-gray-200 w-full h-[.1rem]'></div>

            <div>
                <h4 className='pb-4 text-base text-gray-400 font-bold'>Descricao</h4>

                <p className='text-gray-400 text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ipsum a tenetur eaque autem maiores, vitae quasi explicabo quis quibusdam! Cumque, sit eius. Et dolores blanditiis neque. Praesentium, dignissimos quidem?
                </p>
            </div>
        </div>
    )
}

export default index