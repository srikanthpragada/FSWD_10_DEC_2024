import React from 'react'

function ShowProduct({ product }) {
    function getNetPrice() {
        return product.price - (product.price * product.disrate / 100)
    }
    return (
            <tr>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.price * product.disrate / 100}</td>
                <td>{getNetPrice()}</td>
            </tr>
    )

}
export default function ProductsList({catalog}) {
    return (
        <>
            <h2>Catalog</h2>
            <table className="table table-bordered">
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>After Discount</th>
                </tr>

                {
                    catalog.map(product =>
                        <ShowProduct product={product} />
                    )
                }
            </table>
        </>
    )
}
