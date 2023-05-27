import {Link, useLoaderData} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import {Badge, Button, Carousel, Col, Row} from "react-bootstrap";


export function ProductsList() {
    let products = useLoaderData();
    const [currentProduct, setProduct] = useState(products[0]);
    const [ascDesc, setAscDesc] = useState("ASC");
    const [orderBy, setOrder] = useState("fast_code");

    function productOnClick(e, product) {
        e.preventDefault();
        console.log(`product id: ${product.id}`);
        setProduct(product)
    }

    function AscDescButton() {
        if (ascDesc === "ASC") {
            return <Button variant="warning" size="sm">↓ Növekvő rendezés ↓</Button>
        }
        else {
            return <Button variant="warning" size="sm">↑ Csökkenő rendezés ↑</Button>
        }
    }

    function FastCodeButton(){
        if (orderBy==="fast_code") return <Button variant="danger" size="sm">Gyors kód</Button>
        else return <Button variant="warning" size="sm">Gyors kód</Button>

    }

    function ProductsListTable(props) {
        return <div>
        <AscDescButton/>
        <Table striped bordered hover size="sm" striped className="w-50">
            <thead>
            <tr>
                <th><FastCodeButton/></th>
                <th><Button variant="warning" size="sm">Termék neve</Button></th>
            </tr>
            </thead>
            <tbody>
            {props.products.map((product) => (
                <tr key={product.id}>
                    <td> {product.fast_code}</td>
                    <td><a href={""} onClick={(e) => productOnClick(e, product)}> {product.name} </a></td>
                </tr>
            ))}
            </tbody>
        </Table>
        </div>
    }

    function ProductDetails(props) {
        return <Carousel variant="dark" interval={null}>
            <Carousel.Item>
                <h9> Termék neve:</h9>
                <h4><Badge bg="info"> {props.product.name} </Badge></h4>
                <h6>Kód: {props.product.id}</h6>
                <h6>Gyors kód: {props.product.fast_code} </h6>

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    }

    return <Container>
        <Row>
            <Col>
                <ProductsListTable products={products}/>
            </Col>
            <Col>
                <ProductDetails product={currentProduct}/>
            </Col>
        </Row>
    </Container>
}
