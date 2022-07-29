import React from 'react';
import Card from './Card';

const Product = (props) => {
    return (       
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <Card productName="Fancy Product" productRate="$40.00 - $80.00" cart="View options"></Card>
                        <Card productName="Special Item" productrate1="$20.00" productRate="$18.00" cart="Add to cart"></Card>
                        <Card productname="Sale Item" productrate1="$50.00" productrate="$25.00" cart="Add to cart"></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </div>
                </div>
            </section>
      
                           
    );
}
export default Product;