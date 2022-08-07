import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import './App.css';


const Product = () => {
    const [cart, setCart] = useState(0);
   

    function increment() {
        setCart(cart + 1 )
    }

    function decrement() {
        setCart(cart - 1 )
    }

    return (
        <div>
            <Navbar cartMain={cart} />

            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* <!-- Product image--> */}
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {/* <!-- Product details--> */}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* <!-- Product name--> */}
                                        <h5 className="fw-bolder">Fancy Product</h5>
                                        {/* <!-- Product price--> */}
                                        $40.00 - $80.00
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* <!-- Sale badge--> */}
                                <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
                                {/* <!-- Product image--> */}
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {/* <!-- Product details--> */}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* <!-- Product name--> */}
                                        <h5 className="fw-bolder">Special Item</h5>
                                        {/* <!-- Product reviews--> */}
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>                                        
                                            {/* <!-- Product price--> */}
                                            <span className="text-muted text-decoration-line-through">$20.00</span>
                                            $18.00
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" href="#" onClick={increment}>Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* <!-- Sale badge--> */}
                                <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
                                {/* <!-- Product image--> */}
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {/* <!-- Product details--> */}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* <!-- Product name--> */}
                                        <h5 className="fw-bolder">Sale Item</h5>
                                        {/* <!-- Product price--> */}
                                        <span className="text-muted text-decoration-line-through">$50.00</span>
                                        $25.00
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* <!-- Product image--> */}
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {/* <!-- Product details--> */}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* <!-- Product name--> */}
                                        <h5 className="fw-bolder">Popular Item</h5>
                                        {/* <!-- Product reviews--> */}
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        {/* <!-- Product price--> */}
                                        $40.00
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick="">Add to cart</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* <!-- Sale badge--> */}
                                <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
                                {/* <!-- Product image--> */}
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {/* <!-- Product details--> */}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* <!-- Product name--> */}
                                        <h5 className="fw-bolder">Sale Item</h5>
                                        {/* <!-- Product price--> */}
                                        <span className="text-muted text-decoration-line-through">$50.00</span>
                                        $25.00
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* <!-- Product image--> */}
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {/* <!-- Product details--> */}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* <!-- Product name--> */}
                                        <h5 className="fw-bolder">Fancy Product</h5>
                                        {/* <!-- Product price--> */}
                                        $120.00 - $280.00
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* <!-- Sale badge--> */}
                                <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
                                {/* <!-- Product image--> */}
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {/* <!-- Product details--> */}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* <!-- Product name--> */}
                                        <h5 className="fw-bolder">Special Item</h5>
                                        {/* <!-- Product reviews--> */}
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        {/* <!-- Product price--> */}
                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                        $18.00
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick="">Add to cart</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* <!-- Product image--> */}
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {/* <!-- Product details--> */}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* <!-- Product name--> */}
                                        <h5 className="fw-bolder">Popular Item</h5>
                                        {/* <!-- Product reviews--> */}
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        {/* <!-- Product price--> */}
                                        $40.00
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick="">Add to cart</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Product;

{/* <div className="justify-content-center rate">
                                            <input type="radio" id="star1" name="rate" value="1" />
                                            <label for="star1" title="text">1 star</label>
                                            <input type="radio" id="star2" name="rate" value="2" />
                                            <label for="star2" title="text">2 stars</label>
                                            <input type="radio" id="star3" name="rate" value="3" />
                                            <label for="star3" title="text">3 stars</label>
                                            <input type="radio" id="star4" name="rate" value="4" />
                                            <label for="star4" title="text">4 stars</label>
                                            <input type="radio" id="star5" name="rate" value="5" />
                                            <label for="star5" title="text">5 stars</label>
                                        </div> */}