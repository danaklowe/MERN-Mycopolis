import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Mycopolis - Gourmet Mushrooms',
  description: 'We sell the highest quality gourmet mushrooms',
  keywords: 'mushrooms, mushroom kits, dried mushrooms, mushroom extracts',
};

export default Meta;
