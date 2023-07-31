import './prices.css';

import React, { useEffect } from 'react';

function PricingPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/pricing-table.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="business_prices_page_contianer">
      {/* @ts-ignore */}
      <stripe-pricing-table
        pricing-table-id="prctbl_1Na0w5DfpKDtUNgnp36d0q4l"
        publishable-key="pk_test_51HqdzoDfpKDtUNgns7gfUm2rLbJAqgKVTiJVBpkX2ViLKkmLiV11eXasYcJjUsj6ARpDhju4yAFMiWAEl3ynE2T100S1mBLctz"
      />
    </div>
  );
}

export default PricingPage;
