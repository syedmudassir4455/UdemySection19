import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const DUMMY_PRODUCTS =[
    {
      id:'p1',
      price:6,
      title:'My First Book',
      describe : 'The First Book '
    },
    {
      id:'p2',
      price:5,
      title:'My secod Book',
      describe : 'The second Book '
    }
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>

       {DUMMY_PRODUCTS.map((product) =>(
        <ProductItem
          key ={product.id}
          id ={product.id}
          title={product.title}
          price={product.price}
          description={product.describe}

        />

       ))}
       
      </ul>
    </section>
  );
};

export default Products;
