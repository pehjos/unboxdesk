import { useEffect } from 'react';

const AdBanner = (props) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="ads_banner"
      style={{
        display: 'block',
        overflow: 'hidden',
      }}
       data-ad-client="ca-pub-1446397159695121"
      {...props}
    />
  );
};
export default AdBanner;