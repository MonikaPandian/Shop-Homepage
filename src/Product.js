import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import './App.css';


   
  const Product=()=>{         
    const [cart, setCart] = useState(0);
    
    function hideShow(id) {
        var x = document.getElementById(id);
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }   

    return (
        <div>
            <Navbar cartMain={cart} />
            <Header/>
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
                                        <div className="justify-content-center rate">
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
                                        </div>  
                                            {/* <!-- Product price--> */}
                                            <span className="text-muted text-decoration-line-through">$20.00</span>
                                            $18.00
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        
                                         
                                            <a id="spadd2" className="btn btn-outline-dark mt-auto" href="#" style={{display:"block"}} 
                                             onClick={()=>{ setCart(cart+1);
                                                hideShow("spadd2");
                                                hideShow("spremove2");                                               
                                            }
                                            }>Add to cart</a>
                                        
                                            <a id="spremove2" className="btn btn-outline-dark mt-auto" href="#" style={{display:"none"}} 
                                            onClick={()=>{setCart(cart-1);
                                                hideShow("spadd2");
                                                hideShow("spremove2");                                                
                                                }}>Remove from cart</a>

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
                                    <div className="text-center">
                                        
                                            <a id="siadd2" className="btn btn-outline-dark mt-auto" href="#" style={{display:"block"}} 
                                             onClick={()=>{ setCart(cart+1);
                                                hideShow("siadd2");
                                                hideShow("siremove2");                                               
                                            }
                                            }>Add to cart</a>
                                        
                                            <a id="siremove2" className="btn btn-outline-dark mt-auto" href="#"  style={{display:"none"}}
                                             onClick={()=>{setCart(cart-1);
                                                hideShow("siadd2");
                                                hideShow("siremove2");                                                
                                                }}>Remove from cart</a>
                                    </div>
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
                                        <div className="justify-content-center rate">
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
                                        </div>                                         
                                        {/* <!-- Product price--> */}
                                        $40.00
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                         
                                            <a id="piadd1" className="btn btn-outline-dark mt-auto" href="#" style={{display: "block"}}
                                            onClick={()=>{ setCart(cart+1);
                                                hideShow("piadd1");
                                                hideShow("piremove1");                                               
                                            }
                                            }
                                            
                                            
                                            >Add to cart</a>
                                        
                                            <a id="piremove1" className="btn btn-outline-dark mt-auto" href="#" style={{display: "none"}} 
                                            onClick={()=>{setCart(cart-1);
                                                hideShow("piadd1");
                                                hideShow("piremove1");                                                
                                                }}>Remove from cart</a>
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
                                    <div className="text-center">
                                    
                                            <a id="siadd1" className="btn btn-outline-dark mt-auto" href="#" style={{display:"block"}}
                                             onClick={()=>{ setCart(cart+1);
                                                hideShow("siadd1");
                                                hideShow("siremove1");}}  >Add to cart</a>
                                        
                                            <a id="siremove1" className="btn btn-outline-dark mt-auto" href="#" style={{display:"none"}}
                                             onClick={()=>{setCart(cart-1);
                                                hideShow("siadd1");
                                                hideShow("siremove1");                                                
                                                }}>Remove from cart</a>
                                    </div>
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
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" href="#">View options</a>
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
                                        <h5 className="fw-bolder">Special Item</h5>
                                        {/* <!-- Product reviews--> */}
                                        <div className="justify-content-center rate">
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
                                        </div>    
                                        {/* <!-- Product price--> */}
                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                        $18.00
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                         
                                            <a id="spadd1" className="btn btn-outline-dark mt-auto" href="#" style={{display:"block"}}
                                           onClick={()=>{ setCart(cart+1);
                                            hideShow("spadd1");
                                            hideShow("spremove1");}} >Add to cart</a>
                                        
                                            <a id="spremove1" className="btn btn-outline-dark mt-auto" href="#" style={{display:"none"}}
                                           onClick={()=>{setCart(cart-1);
                                            hideShow("spadd1");
                                            hideShow("spremove1");                                                
                                            }} >Remove from cart</a>
                                    </div>
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
                                        <div className="justify-content-center rate">
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
                                        </div>    
                                        {/* <!-- Product price--> */}
                                        $40.00
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        
                                            <a id="piadd2" className="btn btn-outline-dark mt-auto" href="#" style={{display:"block"}}
                                             onClick={()=>{ setCart(cart+1);
                                                hideShow("piadd2");
                                                hideShow("piremove2");}}>Add to cart</a>
                                        
                                            <a id="piremove2" className="btn btn-outline-dark mt-auto" href="#" style={{display:"none"}}
                                            onClick={()=>{setCart(cart-1);
                                                hideShow("piadd2");
                                                hideShow("piremove2");                                                
                                                }}>Remove from cart</a>
                                    </div>
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

/* <div className="justify-content-center rate">
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
                                        </div> */

                                    //     const value = createContext("Add to cart")
                                    //     const valuenew = useContext(value)
                                    //   console.log(valuenew)
                                        
                                    // const[show,setShow] = useState(true)

                                    // {[...Array(5)].map((_, i) => (
                                    //     <span key={i} onClick={(i) => setRate(i + 1)} style={{ cursor:"pointer" }}>
                                    //     {rate > i ? (
                                    //     <AiFillStar fontSize="15px" />
                                    //         ) : (
                                    //     <AiOutlineStar fontSize="15px" />
                                    //      )}
                                    //     </span>
                                    //     ))}