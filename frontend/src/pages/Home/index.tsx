import React from "react";

import { Link } from "react-router-dom";

import Main from "../../assets/main.svg";

function index() {
  return (
    <main className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start md:gap-4 gap-12 max-w-7xl w-full h-full">
        <div className="flex flex-col items-center md:items-start gap-3 md:gap-10">
          <h1 className="text-2xl md:text-[55px] text-center md:text-start font-bold max-w-[490px] leading-7 md:leading-[58px] tracking-[-0.015em]">
            Faça seu pedido que entregamos pra você!!!
          </h1>

          <p className="text-gray-300 text-center md:text-start text-base md:text-2xl max-w-[490px] tracking-[-0.015em]">
            Escolha o seu pedido e em poucos minutos levaremos na sua porta
          </p>

          <Link
            to={"/orders"}
            className="uppercase hover:scale-105 transition-transform bg-red-500 w-[235px] p-4 text-center font-bold text-white rounded-lg tracking-[-0.015em]"
          >
            Fazer pedido
          </Link>
        </div>

        <div>
          <img src={Main} alt="DS Delivery" />
        </div>
      </div>
    </main>
  );
}

export default index;
