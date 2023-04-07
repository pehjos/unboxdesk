import React from 'react';

function Footer() {
  return (
    <div className='footer'>
      <p>All rights reserved &copy; 2023 unboxdesk reviews</p>   
      <p>&copy; Pehjos Inc</p>
      <p>Los Angeles</p>
      <p>PLOT 347 KOTOKROM</p>
      <div className='keywords'>
        <p>Apple, iPhone, Samsung, LG, Techno</p> {/* include commas between keywords */}
        <p>Reviews, Itel, Vivo, Google, Nokia</p>
        <p>Philips, Binatone, Infinix, Huawei, Mi</p>
        <p>Redmi, Realme, Cars, Latest Phones, Lenovo</p>
        <p>Hp, Dell, iPad, Tablet, Mac Book</p>
      </div>
    </div>
  );
}

export default Footer;
