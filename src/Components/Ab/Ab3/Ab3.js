
import React from 'react'
import { Data } from './data';
import { Link } from "react-router-dom";

export default function Ab3() {
    return (
        <>
        <section class="about py-5">
        <div class="container pb-lg-3">
            <h3 class="tittle text-center">New Arrivals</h3>
            <div class="row">
            {Data.map((item) => {
            return (
            <>
                    <div class="col-md-4 product-men">   
                    <div class="product-shoe-info shoe text-center">
                    <div class="men-thumb-item">
                            <img src={`${item.imgsrc}`} class="img-fluid" alt=""/>
                            <span class="product-new-top">New</span>
                        </div>
                        <div class="item-info-product">
                            <h4>
                                <Link to="/shop">{`${item.name}`}</Link>
                            </h4>

                            <div class="product_price">
                                <div class="grid-price">
                                    <span class="money">{`${item.price}`}</span>
                                </div>
                            </div>
                            <ul class="stars">
                                <li><a href="#"><span class="fa fa-star" aria-hidden="true"></span></a></li>
                                <li><a href="#"><span class="fa fa-star" aria-hidden="true"></span></a></li>
                                <li><a href="#"><span class="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                <li><a href="#"><span class="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                <li><a href="#"><span class="fa fa-star-o" aria-hidden="true"></span></a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                   
                     </>   
                  ); 
                })}


            </div>
         </div>
       
    </section>
        </>
    )
}
