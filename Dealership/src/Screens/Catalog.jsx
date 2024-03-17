import React from 'react';
import VehicleList from './VehicleList';

const Catalog = () => {
  const vehicles = [
    {
      id: 1,
      imageUrl:
        'https://www.renault.com.co/agg/vn/unique/ONE_DACIA_PP_XLARGE_DENSITY1/r_brandSite_carPicker_1.png?uri=https%3A%2F%2Fco.co.rplug.renault.com%2Fproduct%2Fmodel%2FL4M%2Flogan%2Fc%2FA-ENS_0MDL2P1SERIELIM3_-TEKNG',
      images: [
        {
          image1:
            'https://http2.mlstatic.com/D_NQ_NP_2X_800521-MCO70650726558_072023-F.webp',
        },
        {
          image2:
            'https://http2.mlstatic.com/D_NQ_NP_2X_793024-MCO70650668958_072023-F.webp',
        },
        {
          image3:
            'https://http2.mlstatic.com/D_NQ_NP_2X_846994-MCO70650706934_072023-F.webp',
        },
        {
          image4:
            'https://http2.mlstatic.com/D_NQ_NP_2X_798747-MCO70650735538_072023-F.webp',
        },
      ],
      description: 'Renoult Logan Zen',
      specifications: {
        engine: '1.6 16V 111HP MT',
        power: '111@5500 rpm',
        gearbox: '156@4250 rpm',
        transmission: 'Mecánica',
      },
      price: 7294000000,
    },
    {
      id: 1,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/0/07/00-02_Mazda_626_LX.jpg',
      images: [
        {
          image1:
            'https://http2.mlstatic.com/D_NQ_NP_2X_688327-MCO73102671171_112023-F.webp',
        },
        {
          image2:
            'https://http2.mlstatic.com/D_NQ_NP_2X_978144-MCO73102563215_112023-F.webp',
        },
        {
          image3:
            'https://http2.mlstatic.com/D_NQ_NP_2X_983542-MCO73102661261_112023-F.webp',
        },
        {
          image4:
            'https://http2.mlstatic.com/D_NQ_NP_2X_709795-MCO73021456616_112023-F.webp',
        },
      ],
      description: 'Mazda 626',
      price: 30000000,
      specifications: {
        engine: '1.78 16V 22RP NT',
        power: '123331@5500 rpm',
        gearbox: '2.5 V6 24V CAT 93G11',
        transmission: 'Mecánica',
      },
    },
    {
      id: 1,
      imageUrl:
        'https://www.chevrolet.com.co/content/dam/chevrolet/south-america/colombia/espanol/index/cars/2018-camaro/04-images/negro-camaro-six-ss-2018.jpg?imwidth=960',
      images: [
        {
          image1:
            'https://http2.mlstatic.com/D_NQ_NP_2X_838037-MCO74293681012_022024-F.webp',
        },
        {
          image2:
            'https://http2.mlstatic.com/D_NQ_NP_2X_837678-MCO74409655959_022024-F.webp',
        },
        {
          image3:
            'https://http2.mlstatic.com/D_NQ_NP_2X_758566-MCO74293710792_022024-F.webp',
        },
        {
          image4:
            'https://http2.mlstatic.com/D_NQ_NP_2X_609831-MCO74409567349_022024-F.webp',
        },
      ],
      description: 'chevrolet camaro',
      price: 250000000,
      specifications: {
        engine: '6.2L V8 SFI',
        power: '455 @ 5900',
        gearbox: '2.5 V6 24V CAT 93G11',
        transmission: 'Mecánica',
      },
    },
  ];

  return <VehicleList vehicles={vehicles} />;
};

export default Catalog;
