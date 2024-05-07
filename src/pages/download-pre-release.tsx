import '../css/downloadPage.scss';

import React, { useEffect } from 'react';

const DownloadPage = (): JSX.Element => {
  useEffect(() => {
    window.location.href = '/download-beta';
  }, []);

  return <>loading...</>;
};

export default DownloadPage;
