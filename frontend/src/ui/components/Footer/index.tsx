import React from 'react'

import Youtube from "../../../assets/youtube.svg";
import Linkedin from "../../../assets/linkedin.svg";
import Instagram from "../../../assets/instagram.svg";

function index() {
    return (
        <footer className='w-full flex justify-center p-4 bg-slate-800 '>
            <div className='max-w-7xl flex justify-center flex-col gap-2'>
                <p className='text-gray-300'>App desenvolvido durante a 2ª ed. do evendo<span className='font-bold text-md text-white'>Semana DevSuperior.</span></p>

                <ul className='flex justify-center item-center gap-1'>
                    <li>
                        <a href="#" target={"_blank"}>
                            <img src={Youtube} alt="youtube" />
                        </a>
                    </li>

                    <li>
                        <a href="#" target={"_blank"}>
                            <img src={Linkedin} alt="linkedin" />
                        </a>
                    </li>

                    <li>
                        <a href="#" target={"_blank"}>
                            <img src={Instagram} alt="instagram" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default index;