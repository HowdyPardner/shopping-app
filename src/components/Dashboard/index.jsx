import Cart from '../../pages/Cart';
import Menu from '../Menu';
import ProductList from '../../pages/ProductList';
import './index.css';


const Dashboard = () => {
  return (
    <div id="dashboard">
        <h1>Dashboard - select some products!</h1>
        <Menu />
        <ProductList />
        <Cart />
    </div>
  )
}

export default Dashboard