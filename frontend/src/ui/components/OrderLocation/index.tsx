import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AsyncSelect from 'react-select/async';
import { fetchLocalMapBox } from '../../../data/api/api';
import { OrderLocationdata } from '../../../data/types/OrderLocationdata';

const initialPosition = {
    lat: 51.505,
    lng: -0.09
};

type Place = {
    label?: string;
    value?: string;
    position: {
        lat: number;
        lng: number;
    }
}

type Props = {
    onChangeLocation: (location: OrderLocationdata) => void;
}

function index({onChangeLocation}: Props) {
    const [address, setAddress] = useState<Place>({
        position: initialPosition
    })

    const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
        const response = await fetchLocalMapBox(inputValue);

        const places = response.data.features.map((item: any) => {
            return ({
                label: item.place_name,
                value: item.place_name,
                position: {
                    lat: item.center[1],
                    lng: item.center[0]
                }
            });
        });

        callback(places);
    };

    const handleChangeSelect = (place: Place) => {
        setAddress(place);
        
        onChangeLocation({
            latitude: place.position.lat,
            longitude: place.position.lng,
            address: place.label!
        });
    };


    return (
        <div className='w-full h-[450px] bg-white rounded-lg overflow-hidden relative'>
            <h3 className='font-bold text-center text-stone-300 py-4'>Selecione onde o pedido deve ser entregue:</h3>

            <div className='z-20 w-6/12 absolute top-20 left-2/4 -translate-x-2/4'>
                <AsyncSelect
                    placeholder="Digite um edereco para entregar o pedidos"
                    loadOptions={loadOptions}
                    onChange={value => handleChangeSelect(value as Place)}
                />
            </div>

            <MapContainer className='z-10 w-full h-full mt-4' center={address.position} key={address.position.lat} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={address.position}>
                    <Popup>
                        {address.label}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default index;