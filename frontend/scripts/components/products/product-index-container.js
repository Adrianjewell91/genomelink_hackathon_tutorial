import { connect } from 'react-redux';
<<<<<<< HEAD
import ProductIndex from './product-index';

const mapStateToProps = (state) => ({ 
    products: state.products 
});

const mapDispatchToProps = (dispatch) => ({ 
    fetchProducts: (vitamin) => dispatch(fetchProducts(vitamin))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);
=======
>>>>>>> 4739eada5aa911d92fa8545d123de354f49ccfd6
