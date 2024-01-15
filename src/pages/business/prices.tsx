import './prices.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import React, { useEffect } from 'react';

function PricingPage() {
  const {
    siteConfig: { customFields: VERCEL_ENV },
  } = useDocusaurusContext();
  // console.log('siteConfig', siteConfig);
  const isProd = (VERCEL_ENV as unknown as string) === 'production';

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
      <div style={{ color: 'black' }}>VERCEL_ENV: {VERCEL_ENV as unknown as string}</div>
      <div className="row" style={{ backgroundColor: '#3f51b5' }}>
        <a href="/business/prices-zh" style={{ margin: 'auto' }}>
          <h2 style={{ color: '#fff', textAlign: 'center', marginTop: '2rem' }}>
            去人民币区，请点击这里(请先注册后再购买)
          </h2>
        </a>
      </div>

      {isProd && (
        <div style={{ backgroundColor: '#3f51b5' }}>
          <h2 style={{ color: '#fff', marginTop: '2rem', textAlign: 'center' }}>欧元区</h2>
          {/* @ts-ignore: Live-EUR */}
          <stripe-pricing-table
            pricing-table-id="prctbl_1NhbvGDfpKDtUNgncj7TTmDN"
            publishable-key="pk_live_51HqdzoDfpKDtUNgnMQxyO3NPLAxBb1IS53DE9YXgmV9w5rEwsAOBaohqyL7bNTVjZQ8N4Ry0R9XXDIW9q0aMZFk100OtkFDHRx"
          />
        </div>
      )}
      {!isProd && (
        <div style={{ display: 'none', backgroundColor: '#3f51b5' }}>
          <h2 style={{ color: '#fff', marginTop: '2rem', textAlign: 'center' }}>欧元区(测试)</h2>
          {/* @ts-ignore: Test-EUR */}
          <stripe-pricing-table
            pricing-table-id="prctbl_1NhXXMDfpKDtUNgnT5a7WDKY"
            publishable-key="pk_test_51HqdzoDfpKDtUNgns7gfUm2rLbJAqgKVTiJVBpkX2ViLKkmLiV11eXasYcJjUsj6ARpDhju4yAFMiWAEl3ynE2T100S1mBLctz"
          />
        </div>
      )}
    </div>
  );
}

export default PricingPage;
