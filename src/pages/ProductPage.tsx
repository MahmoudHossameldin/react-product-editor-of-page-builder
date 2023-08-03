import React, { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductImage from '../components/ProductImage';
import ProductDescription from '../components/ProductDescription';
import ProductOwner from '../components/ProductOwner';
import CompanyLogo from '../components/CompanyLogo';
import Map from '../components/Map';
import ProductVideo from '../components/ProductVideo';
import OfferDetails from '../components/OfferDetails';
import {
  useAppDispatch,
  useAppSelector,
  setEditMode,
  setViewMode,
} from '../store';
import { useLocation } from 'react-router-dom';
import SaveButton from '../components/SaveButton';

function ProductPage() {
  let location = useLocation();
  const { isEditPage } = useAppSelector((state) => state.mode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const pathContainsEdit = location.pathname === '/product/edit';
    if (pathContainsEdit && !isEditPage) {
      dispatch(setEditMode());
    } else {
      dispatch(setViewMode());
    }
  }, [location]);

  return (
    <div className='mt-5 px-[.6875rem] md:pl-0 min-[1460px]:px-0 max-w-[70.5rem] w-full'>
      <Breadcrumbs />
      <div className='md:flex bg-white rounded-md border border-greyBorder'>
        <div className='md:w-[66.229%]'>
          <ProductImage />
          <ProductDescription />
          <SaveButton />
        </div>
        <div className='p-5 md:border-l border-greyBorder md:w-[32.138%] md:pr-0'>
          <div>
            <CompanyLogo />
            <ProductOwner owner='true!' />
          </div>
          <Map />
        </div>
      </div>
      <ProductVideo />
      <OfferDetails />
    </div>
  );
}

export default ProductPage;
