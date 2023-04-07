import Card from '../UI/Card';
import ProductItem from './ProductItem/ProductItem';
import classes from './AvailableProduct.css';

const DUMMY_MEALS = [
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
  const mealsList = DUMMY_MEALS.map((meal) => (
    <ProductItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
