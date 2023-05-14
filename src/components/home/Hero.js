import React from 'react'

export const Hero = () => {
  return (
    <div>
      
    <div id='hero' className='hero col-xxl-4 px-8 px-4 py-5'>
      <div><h1>Ron Animal Auction</h1></div>
      <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
        <img
          src='https://auctionstreaming.com/media/dealer_153/storage/images/auctionstreamingaiauctionneropt.jpg'
          className='d-block mx-lg-auto img-fluid'
          width={1000}
          height={600}
          loading='lazy'
        />
      </div>
      <div className='col-lg-6'>
        <h1 className='display-5 fw-bold lh-1 mb-3'>Grow your Favorite Agricultural Hustle With Us</h1>
        <p
          className='lead'
        >
          It's the only online platform in all things Animal Breeding
        </p>
        <div
          className='d-grid gap-2 d-md-flex justify-content-md-start'
        >
          <button
            type='button'
            className='btn btn-primary btn-lg px-4 me-md-2'
          >
            Buy
          </button>
          <button
            type='button'
            className='btn btn-outline-secondary btn-lg px-4'
          >
            Favorite
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}

