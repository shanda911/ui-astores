import Card from '../UI/Card';
import ProductItem from './ProductItem/ProductItem';
import classes from './AvailableProduct.css';
import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';

const GET_ALL_PRODUCTS = '/products'

const DUMMY_PRODUCT = [
  {
    id: '1',
    name: 'Air Filter',
    category: 'Filter',
    description: 'Performance',
    price: 10.99 },
  {
    id: '2',
    name: 'Engine Oil',
    category: 'Performence',
    description: 'Oil',
    price: 55.89,
  },
  {
    id: '3',
    name: 'Brakes Pad',
    category: 'Braking',
    description: 'Utility',
    price: 12.99,
  },
  {
    id: '4',
    name: 'Oil Filter',
    category: 'Filter',
    description: 'Performance',
    price: 12.99,
  },
];

const AvailableProducts = () => {

  const { auth } = useAuth();
  const token = auth?.accessToken;
  
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const getData = async () => {
    try{
    const response = await axios.get(GET_ALL_PRODUCTS, config );
    // console.log(response?.data);
    // setResponseData(response);
    console.log(response);
    }
    catch (err) {
      if (!err?.response) {
        console.error('No Server Response');
           }
      }
    }

  useEffect(() => {
    //FIXME
          getData();
  }, [])


  const prodList = DUMMY_PRODUCT.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ));

  return (
    <section className={classes.items}>
      <Card>
        <ul>{prodList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
