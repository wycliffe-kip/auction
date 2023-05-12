import React from 'react'

export const Hero = () => {
  return (
    <div className='container col-xxl-8 px-8 px-4 py-5'>
        <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
          <img src='https://auctionstreaming.com/media/dealer_153/storage/images/auctionstreamingaiauctionneropt.jpg' className='d-block mx-lg-auto img-fluid' width={700} height={500} loading='lazy' />
        </div>
        <div className='col-lg-6'>
          <h1 className='display-5 fw-bold lh-1 mb-3'>Find your Favorite Agricultural Hustle With Us</h1>
          <p className='lead'>It's the only online platform in all things Animal Breeding</p>
          <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
            <button type='button' className='btn btn-primary btn-lg px-4 me-md-2'>Buy</button>
            <button type='button' className='btn btn-outline-secondary btn-lg px-4'>Favorite</button>
          </div>
        </div>
    </div>
  )
}

