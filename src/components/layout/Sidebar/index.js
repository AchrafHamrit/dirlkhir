import React, { useState, useEffect } from 'react';

import Ad1 from '../../../images/ad1.png';
import Ad2 from '../../../images/ad2.png';

const Sidebar = () => {
  const [ad, setAd] = useState(Ad1);

  const changeAd = () => {
    let random = Math.floor(Math.random() * 2) + 1;

    switch (random) {
      case 1:
        setAd(Ad1);
        break;
      case 2:
        setAd(Ad2);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    changeAd();
  }, []);

  return (
    <div>
      <h6 className='sidebar-title text-right'>Sponsored ads</h6>
      <div className='mt-3'>
        <img className='img img-fluid' src={ad} alt='Ad' />
      </div>
    </div>
  );
};

export default Sidebar;
