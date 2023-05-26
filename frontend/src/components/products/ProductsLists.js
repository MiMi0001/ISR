import {Link, useLoaderData} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';


export function ProductsList() {
    let products = useLoaderData();

    console.log(products);

    return <div>
        <Table striped bordered hover size="sm" striped className="w-50">
            <thead>
                <tr>
                    <th>Gyors kód</th>
                    <th>Termék</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product)=> (
                    <tr key={product.id}>
                        <td> {product.fast_code}</td>
                        <td> {product.name}</td>
                    </tr>
                ))}
            </tbody>

        </Table>
    </div>
}
