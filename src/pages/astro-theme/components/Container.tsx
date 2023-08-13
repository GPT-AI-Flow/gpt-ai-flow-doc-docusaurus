import React from 'react';

const Container = (props: any) => {
  return <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">{props.children}</div>;
};

export default Container;
