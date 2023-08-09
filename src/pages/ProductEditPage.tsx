import React, { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductImageEdit from '../components/ProductImageEdit';
import ProductDescriptionEdit from '../components/ProductDescriptionEdit';
import ProductOwner from '../components/ProductOwner';
import CompanyLogo from '../components/CompanyLogo';
import Map from '../components/Map';
import ProductVideoEdit from '../components/ProductVideoEdit';
import OfferDetails from '../components/OfferDetails';
import { useAppDispatch, useAppSelector, setEditMode } from '../store';
import SaveButton from '../components/SaveButton';
import { useForm, FormProvider } from 'react-hook-form';

function ProductEditPage() {
  const { data } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const methods = useForm({
    defaultValues: {
      description: data?.description || '',
      name: data?.name || '',
      type: data?.type || null,
      picture: data?.picture || '',
      video: data?.video || '',
      trl: data?.trl || null,
      categories: data?.categories || [],
      businessModels: data?.businessModels || [],
    },
  });

  useEffect(() => {
    dispatch(setEditMode());
  }, [dispatch]);

  return (
    <div className='mt-5 px-[.6875rem] md:pl-0 min-[1460px]:px-0 max-w-[70.5rem] w-full'>
      <FormProvider {...methods}>
        <form>
          <Breadcrumbs />
          <div className='md:flex bg-white rounded-md border border-greyBorder'>
            <div className='md:w-[66.229%]'>
              <ProductImageEdit />
              <ProductDescriptionEdit />
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
          <ProductVideoEdit />
          <OfferDetails />
        </form>
      </FormProvider>
    </div>
  );
}

export default ProductEditPage;
