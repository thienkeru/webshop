import React, { useState, useEffect } from 'react'
import { commerce } from './components/lib/commerce'; // backend api
import { Products, Navbar, Cart, Checkout } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const fetchProducts = async () => {
        const { data } = await commerce.products.list() // get item from list
        setProducts(data);
    }
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve()); // get item from list


    }
    const handleAddToCart = async (productId, quanitity) => {
        const { cart } = await commerce.cart.add(productId, quanitity) // add product

        setCart(cart);
    }

    const handleUpdateCartQty = async (productId, quanitity) => {
        const { cart } = await commerce.cart.update(productId, { quanitity }); // update
        setCart(cart)

    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId) //remove
        setCart(cart)
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart)
    }


    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, [])



    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items} />
                <Switch>
                    <Route exact path='/'>
                        <Products products={products} onAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path='/cart'>
                        <Cart cart={cart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                        />
                    </Route>
                    <Router exact path='/checkout'>
                        <Checkout checkout={Checkout}/>
                    </Router>
                </Switch>
            </div>
        </Router>


    )
}

export default App
