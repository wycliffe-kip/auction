import React, { useContext, useState } from 'react';
import Countdown from 'react-countdown';
import { AuthContext } from '../../context/AuthContext';

const Renderer = ({ days, hours, minutes, seconds, completed, props, showMore, handleShowMore }) => {
  const shortDescription = props.item.description.slice(0, 20);

  if (completed) {
    return null;
  }

  return (
    <div className='col'>
      <div id='card' className='card shadow-sm'>
        <div
          style={{
            height: '320px',
            backgroundImage: `url(${props.item.imgUrl})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          className='w-100'
        />
        <div className='card-body'>
          <p className='lead display-5'>{props.item.title}</p>
          <div className='d-flex justify-content-between align-item-center'>
            <h5>
              {hours} hrs {minutes} mins {seconds} sec
            </h5>
          </div>
          <p className='card-text'>
            {showMore ? props.item.description : shortDescription}
            {props.item.description.length > 20 && !showMore && (
              <span style={{color: 'blue'}} onClick={handleShowMore}> more </span>
            )}
          </p>
          <div className='d-flex justify-content-between align-item-center'>
            <div>
              {!props.owner ? (
                <div onClick={() => props.bidAuction()} className='btn btn-outline-secondary'>
                  Bid
                </div>
              ) : props.owner.email === props.item.email ? (
                <div onClick={() => props.endAuction(props.item.id)} className='btn btn-outline-secondary'>
                  Cancel Auction
                </div>
              ) : props.owner.email === props.item.currentWinner ? (
                <p className='display-6'> Winner </p>
              ) : (
                <div onClick={() => props.bidAuction(props.item.id, props.item.currentPrice)} className='btn btn-outline-secondary'>
                  Bid
                </div>
              )}
            </div>
            <p className='display-6'> KSh. {props.item.currentPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AuctionCard = ({ item }) => {
  const expiredDate = item.duration;
  const { currentUser, bidAuction, endAuction } = useContext(AuthContext);
  const [showMore, setShowMore] = useState(false);

  function handleShowMore() {
    setShowMore(true);
  }

  return (
    <Countdown
      owner={currentUser}
      date={expiredDate}
      bidAuction={bidAuction}
      endAuction={endAuction}
      item={item}
      renderer={(props) => (
        <Renderer {...props} showMore={showMore} handleShowMore={handleShowMore} />
      )}
    />
  );
};
