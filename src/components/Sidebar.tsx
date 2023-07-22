import React from 'react';
import Navigation from './Navigation';
import ProductOwner from './ProductOwner';

function Sidebar() {
  return (
    <div className='w-[18rem] mr-[1.875rem] mt-[1.375rem] hidden md:block'>
      <ProductOwner />
      <Navigation />
    </div>
  );
}

export default Sidebar;
