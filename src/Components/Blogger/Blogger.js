
import React from 'react';
import { Data } from "./data";

export default function Blogger() {
    return (
        <>
            <section class="testimonials py-5">
        {Data.map((item) => {
          return (
            <>
              <div class="container">
                <div class="test-info text-center">
                  <h3 class="my-md-2 my-3">{`${item.blogger}`}</h3>

                  <ul class="list-unstyled w3layouts-icons clients">
                    <li>
                      <a href="#">
                        <span class="fa fa-star"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="fa fa-star"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="fa fa-star"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="fa fa-star-half-o"></span>
                      </a>
                    </li>
                  </ul>
                  <p>
                    <span class="fa fa-quote-left"></span>
                    {`${item.blog}`} <span class="fa fa-quote-right"></span>
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </section>
        </>
    )
}
