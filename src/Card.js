import React from "react";
import { useState } from "react";
import Navbar from './Navbar';
import Header from './Header';


const Card = () => {

const [state, setState] = useState({ cart: 0 });
const [button, setButton] = useState(true)

const ToggleClick = () => {
    setButton(!button);
    if (button == true) {
        setState({ cart: state.cart + 1 });
    }
    else {
        setState({ cart: state.cart - 1 });
    }
}

    const data = [
        { productName: "Fancy Product", productRate: "$40.00 - $80.00", cart: "View options" },
        { productName: "Special Item", productRate1: "$20.00", productRate: "$18.00", cart: "Add to cart" },
        { productName: "Sale Item", productRate1: "$50.00", productRate: "$25.00", cart: "Add to cart" },
        { productName: "Popular Item", productRate: "$40.00", cart: "Add to cart" },
        { productName: "Sale Item", productRate1: "$50.00", productRate: "$25.00", cart: "Add to cart" },
        { productName: "Fancy Product", productRate: "$120.00 - $280.00", cart: "View options" },
        { productName: "Special Item", productRate1: "$20.00", productRate: "$18.00", cart: "Add to cart" },
        { productName: "Popular Item", productRate: "$40.00", cart: "Add to cart" }
    ];

    return (
        <div>
        <Navbar cartMain={state.cart}/>
        <Header/>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {data.map((item, index) => (
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="https:dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {item.productName === "Special Item" || item.productName === "Popular Item" ?
                                    <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div> : ''}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">{item.productName}</h5>
                                        {item.productName === "Special Item" || item.productName === "Popular Item" ?
                                            <div className="d-flex justify-content-center small text-warning mb-2"><div className="bi-star"></div> <div className="bi-star"></div> <div className="bi-star"></div> <div className="bi-star"></div> <div className="bi-star"></div></div> : ''}
                                        {item.productName === "Special Item" || item.productName === "Sale Item" ?
                                            <span className="text-muted text-decoration-line-through">{item.productRate1}</span> : ''}
                                        {item.productRate}
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        {item.productName === "Fancy Product" ?
                                            <a className="btn btn-outline-dark mt-auto" href="#">View options</a> :
                                            <a className="btn btn-outline-dark mt-auto" href="#" onClick={ToggleClick}>{button ? "Add to cart" : "Remove from cart"}</a>}
                                    </div>
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>
        </section>
    </div>
    )
}

export default Card;
