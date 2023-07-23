import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductImage from '../components/ProductImage';
import ProductDescription from '../components/ProductDescription';
import ProductOwner from '../components/ProductOwner';
import Map from '../components/Map';
import CompanyLogo from '../components/CompanyLogo';

function ProductPage() {
  return (
    <div className='mt-5 px-[.6875rem] md:pl-0 min-[1460px]:px-0 max-w-[70.5rem] w-full'>
      <Breadcrumbs />
      <div className='md:flex bg-white rounded-md border border-greyBorder'>
        <div className='md:w-[66.229%]'>
          <div>
            <ProductImage />
          </div>
          <div className='p-5'>
            <ProductDescription />
          </div>
        </div>
        <div className='p-5 border-l border-greyBorder md:w-[32.138%] md:pr-0'>
          <div>
            <CompanyLogo />
            <ProductOwner owner='owner' />
          </div>
          <div>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
