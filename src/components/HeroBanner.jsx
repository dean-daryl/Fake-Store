import React from 'react'

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">SUMMER SALE</p>
        <h3>UP TO 50% OFF SUMMER SALES</h3>
        {/* <img src="" alt="banner" className="hero-banner-image" /> */}
        <div>
          <a href="/product/ID">
            <button class="cta">
              <span class="hover-underline-animation"> Shop now </span>
              <svg
                viewBox="0 0 46 16"
                height="10"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
                id="arrow-horizontal"
              >
                <path
                  transform="translate(30)"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  data-name="Path 10"
                  id="Path_10"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner