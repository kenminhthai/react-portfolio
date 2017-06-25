import React from 'react';
import ScrollToTop from '../scrollToTop/scroll_to_top';
import { footer } from '../../site-data/site.json';

const Footer = () => {
  return (
      <footer className="site-footer">
          <ScrollToTop/>
          <div className="copyright text-center" style={{padding: '15px 0', fontSize: '0.8rem'}}>
              <span className="fa fa-copyright"></span>
              &nbsp;
              {footer.copyright_text}
          </div>
      </footer>
  )
};

export default Footer;