import React from 'react';

import './footer.css';

const Footer = () => {

  return (
    <div className='footer'>
      <div>
      <span>A. Kozlovskaya</span>
      <span><a target='_blank' href="https://github.com/Kkasya/">
        <img className="img-footer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png" alt="github"/>
      </a> </span>
      </div>
      <span>2021</span>
      <span><a target='_blank' href="https://rs.school/js/">
        <img className="img-footer rs" src="https://rs.school/images/rs_school_js.svg" alt="rs-school"/>
      </a> </span>
    </div>
  )
};

export default Footer;