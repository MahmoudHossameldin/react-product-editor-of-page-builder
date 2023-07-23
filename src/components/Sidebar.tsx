import React from 'react';
import Navigation from './Navigation';
import ProductOwner from './ProductOwner';

function Sidebar() {
  return (
    <div className='w-[18rem] mr-[1.875rem] mt-[1.375rem] hidden md:block pl-[.6875rem] min-[1460px]:pl-0'>
      <ProductOwner sidebar='sidebar' />
      <Navigation />
    </div>
  );
}

export default Sidebar;
