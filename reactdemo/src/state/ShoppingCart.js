import React from 'react'

let products = [
    { id: '1', name: 'Laptop', price: 80000 },
    { id: '2', name: 'Mobile', price: 45000 },
    { id: '3', name: 'Headphones', price: 10000 },
    { id: '4', name: 'Mouse', price: 2000 }
];

function AddItemToCart({ cart, addItemToCart }) {
    let [item, setItem] = React.useState({ id: '1', quantity: 1 });

    function addItem(event) {
        event.preventDefault();

        // Check whether the item already exists
        if (cart.find(p => p.id === item.id)) {
            alert('Item already exists');
            return;
        }

        addItemToCart(item);
        console.log(item)
        setItem({ id: '1', quantity: 1 });
    }

    function updateText(event) {
        setItem({ ...item, [event.target.id]: event.target.value });
    }

    return (
        <>
            <form onSubmit={addItem}>
                Item: <select id="id" required value={item.id} onChange={updateText}>
                    {products.map(p =>
                        <option key={p.id} value={p.id}>{p.name}</option>
                    )}
                </select>
                Quantity : <input type="number" id="quantity"
                    required min="1" value={item.quantity}
                    onChange={updateText}
                />
                <p></p>
                <button>Add Item</button>
            </form>
        </>
    )
}

function ShowCart({ cart, deleteItem }) {

    function deleteCurrentItem(item) {
        // take confirmation about deleting the item
        if (!window.confirm(`Do you want to delete [${item.id}] item?`)) {
            return;
        }
        deleteItem(item.id);
    }

    function getTotal() {
        let total = 0;
        cart.forEach(item => {
            total += products.find(p => p.id === item.id).price * item.quantity;
        });
        return total;
    }   


    return (
        // conditionally render the table only if there are items
        cart.length !== 0 &&
        <>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) =>
                        <tr key={index}>
                            <td>{products.find(p => p.id === item.id).name}</td>
                            <td>{products.find(p => p.id === item.id).price}</td>
                            <td>{item.quantity}</td>
                            <td>{products.find(p => p.id === item.id).price * item.quantity} </td>
                            <td>
                                <button onClick={() => deleteCurrentItem(item)}>Delete</button>
                            </td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
            <h3>Total : {getTotal()}</h3>
        </>
    )
}


export default function ShoppingCart() {
    let [cart, setCart] = React.useState([]);

    function addItemToCart(item) {
        setCart([...cart, item]);
        console.log(cart)
    }

    function deleteItem(itemToDelete) {
        setCart(cart.filter(i => i.id !== itemToDelete));
    }

    return (
        <>
            <h2>ShoppingCart</h2>
            <AddItemToCart cart={cart} addItemToCart={addItemToCart} />
            <p></p>
            <ShowCart cart={cart} deleteItem={deleteItem} />
        </>
    )
}
