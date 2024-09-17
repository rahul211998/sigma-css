import React, { useState } from 'react'

const Products = () => {
    // let Products1 = ["Mouse","Keyboard","Cpu","Laptop"]
    let MyProducts = [{ProductName : "Mouse",price:140,oldPrice:100},
        {}
    ]
    const [Myproducts,SetMyProducts] = useState(MyProducts)
  return (
    <div>
        <thead>
            <tr>
                <th>ProductName</th>
                <th>Price</th>
                <th>oldPrice</th>
            </tr>
        </thead>
        <tbody>
        {Myproducts.map((v,i)=>(
            <tr key={i}>
                <td>{v.ProductName}</td>
                <td>{v.price}</td>
                <td>{v.oldPrice}</td>
            </tr>
        ))}

        </tbody>
        </div>
  )
}

export default Products