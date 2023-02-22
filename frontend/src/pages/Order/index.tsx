import React, { useEffect, useState } from 'react'
import { ToastContainer } from "react-toastify/dist/components";

import { toast } from 'react-toastify';
import axios from 'axios';

import { URL_BASE } from '../../data/db/ConnectionDB';

import StepsHeader from "../../ui/partials/order/_header-main";
import FooterMain from '../../ui/partials/order/_footer-main';

import Card from "../../ui/components/Card";
import OrderLocation from "../../ui/components/OrderLocation";

import { productType } from "../../data/types/productType";
import { OrderLocationdata } from '../../data/types/OrderLocationdata';

function index() {
  const [products, setProducts] = useState<productType[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<productType[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

  useEffect(() => {
    axios.get(`${URL_BASE}/products`)
      .then((response) => setProducts(response.data))
      .catch(error => console.log(error)
    );
  }, [])

  const handleSelectedProduct = (selectedProduct: productType) => {
    const productIndex = selectedProducts.findIndex(product => product.id === selectedProduct.id);

    if (productIndex !== -1) {
      const newProducts = [...selectedProducts];
      newProducts.splice(productIndex, 1);
      setSelectedProducts(newProducts);
    }else{
      setSelectedProducts([...selectedProducts, selectedProduct]);
    }
  }

  const isSelected = (item: productType): boolean => {
    const productIndex = selectedProducts.findIndex(product => product === item);

    if(productIndex !== -1){
      return true;
    }

    return false;
  }

  const handleSubmit = async () => {
    const productsIds = selectedProducts.map(({id}) => ({id}));
    const payload = {
      ...orderLocation!,
      products: productsIds,
      status: "PENDING"
    }
    

    console.log(orderLocation)

    await axios.post(`${URL_BASE}/orders`, payload)
    .then((response) => {
      toast.error(`Pedido enviado com sucesso! N ${response.data.id}`)
      setSelectedProducts([]);
    })
    .catch(() => {
      toast.warning('Error ao enviar pedido! se persistir tente novamente mais tarde!')
    })
  } 

  return (
    <main className='w-100 flex items-center justify-center bg-slate-200 flex-col'>
      <StepsHeader />
      <div className='my-5 max-w-7xl w-full flex justify-start items-start flex-col gap-10'>
        <div className='grid grid-cols-auto-fill justify-between w-full gap-4 '>
          {products.map(item => (
              <button key={item.id} onClick={() => handleSelectedProduct(item)}>
                <Card item={item} selected={isSelected(item)} />
              </button>
          ))}
        </div>

        <OrderLocation onChangeLocation={location => setOrderLocation(location)} />

        <FooterMain onSubmit={handleSubmit} products={selectedProducts} />
      </div>
    </main>
  )
}

export default index