import { mount } from 'marketing/App';

import React, { useEffect, useRef } from 'react';

function MarketingApp() {
  const ref = useRef(null);
  
  useEffect(() => {
    mount(ref.current);
  }, [mount]);
  
  return <div ref={ref}></div>;
}

export default MarketingApp;
