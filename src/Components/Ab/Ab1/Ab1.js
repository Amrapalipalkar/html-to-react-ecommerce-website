
import React, {useState} from 'react'
import { Data } from './data';

export default function Ab1() {
    return (
        <>
        <section class="about py-md-5 py-5">
        <div class="container-fluid">
          <div class="feature-grids row px-3">
          {Data.map((item) => {
            return (
            <>
              <div class="col-lg-3 gd-bottom">
                <div class="bottom-gd row">
                  <div class="icon-gd col-md-3 text-center">
                    <span class={`${item.icon}`} aria-hidden="true"></span>
                  </div>
                  <div class="icon-gd-info col-md-9">
                    <h3 class="mb-2">{`${item.title}`} </h3>
                    <p>{`${item.description}`} </p>
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

