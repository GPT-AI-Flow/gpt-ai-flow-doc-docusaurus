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
        pricing-table-id="prctbl_1NjP6PDfpKDtUNgnsHRJF2SH"
        publishable-key="pk_live_51HqdzoDfpKDtUNgnMQxyO3NPLAxBb1IS53DE9YXgmV9w5rEwsAOBaohqyL7bNTVjZQ8N4Ry0R9XXDIW9q0aMZFk100OtkFDHRx"
      />
    </div>
  );
}

export default PricingPage;
