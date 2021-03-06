
import React from 'react'
import { Data } from './data'

export default function Ab2() {
    return (
        <>
            <section class="about py-5">
        <div class="container pb-lg-3">
            <h3 class="tittle text-center">Popular Products</h3>
            {Data.map((item) => {
            return (
            <>
            <div class="row">

                <div class="col-md-6 latest-left">
                    <div class="product-shoe-info shoe text-center">
                        <img src={`${item.imgsrc1}`} class="img-fluid" alt=""/>
                        <div class="shop-now"><a href="shop.html" class="btn">Shop Now</a></div>
                    </div>
                </div>

                <div class="col-md-6 latest-right">
                    <div class="row latest-grids">
                        <div class="latest-grid1 product-men col-12">
                            <div class="product-shoe-info shoe text-center">
                                <div class="men-thumb-item">
                                    <img src={`${item.imgsrc2}`} class="img-fluid" alt=""/>
                                    <div class="shop-now"><a href="shop.html" class="btn">Shop Now</a></div>
                                </div>
                            </div>
                        </div>

                        <div class="latest-grid2 product-men col-12 mt-lg-4">
                            <div class="product-shoe-info shoe text-center">
                                <div class="men-thumb-item">
                                    <img src={`${item.imgsrc3}`} class="img-fluid" alt=""/>
                                    <div class="shop-now"><a href="shop.html" class="btn">Shop Now</a></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            </>   
                  ); 
                })}
        </div>
    </section>
        </>
    )
}
