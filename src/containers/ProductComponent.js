import React from 'react'
import { useSelector } from 'react-redux'
import ProductDetail from './ProductDetail';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map(({id, title, price, image,  category})=>     <div>
    <div className='four wide column' key={id}>
        <Link to={`/product/${id}`} >
        <div className='ui link cards'>
            <div className='card'>
                <div className='image'>
                    <img src={image} style={{ height: "300px" }} alt={title} />
                </div>
                <div className='content'>
                    <div className='header'>{title}</div>
                    <div className='meta price'>$ {price}</div>
                    <div className='meta'>{category}</div>
                </div>
            </div>
        </div>
    </Link>
    </div>
</div>)

  return (
    <React.Fragment>

        {renderList}
    </React.Fragment>
  )
}

export default ProductComponent