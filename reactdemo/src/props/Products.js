import React from 'react'

export default function Products(props) {

    function getNetPrice(price, disrate) {
        return price - (price * disrate / 100)
    }
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
                    props.catalog.map
                        (
                            p =>
                                <tr>
                                    <td>{p.title}</td>
                                    <td>{p.price}</td>
                                    <td>{p.price * p.disrate / 100}</td>
                                    <td>{getNetPrice(p.price, p.disrate)}</td>
                                </tr>
                        )
                }
            </table>
        </>
    )
}
