// src/pages/OverviewPage.js
import React from 'react';
import Image from '../components/Image';

const OverviewPage = () => {
  return (
    <div className="my-4">
      <h1 className="mb-3">My Love of Video Games</h1>
      <p className="lead">The Game That Started It All</p>
      <Image src="https://www.gamespace.com/wp-content/uploads/2019/11/Gaming-Consoles.jpg" alt="Video Game History" />
      <p className='my-3'>
        Video Games. Gaming is not just a pastime; it’s a journey into realms of imagination where you become the hero of a story, the architect of your destiny, and the master of your skills. 
        For a young lad like myself, gaming is the ultimate catalyst to adventures larger than life. And when I picked up a controller and entered the universe of Halo for the very first time, the experience was nothing short of transformative.
      </p>
      <Image src="https://media.gq.com/photos/5b352dfc7556ff39f919e78a/16:9/w_2560%2Cc_limit/halo-show-showtime-gq.jpg" alt="Video Game History" />
     </div>
  );
};

export default OverviewPage;
