//
// aos.js
// Theme module
//

import AOS from 'aos';
import 'aos/dist/aos.css';

const options = {
  duration: 700,
  easing: 'ease-out-quad',
  once: true,
  startEvent: 'load'
};

AOS.init(options);
