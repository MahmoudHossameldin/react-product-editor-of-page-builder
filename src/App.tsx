import React, { useEffect } from 'react';
import AppRoutes from './Routes';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {
  useAppDispatch,
  useAppSelector,
  fetchProduct,
  fetchConfig,
} from './store';

function App() {
  const { data, loading, error } = useAppSelector((state) => state.product);
  const { configData, error: errorConfig } = useAppSelector(
    (state) => state.config
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchConfig());
  }, [dispatch]);

  return (
    <div>
      {loading && <div className='loader'></div>}
      {configData && !loading && (
        <>
          <Header />
          <div className='App flex max-w-app mx-auto'>
            <Sidebar />
            {data && <AppRoutes />}
            {error && (
              <div className='font-bold text-4xl mx-auto mt-5'>{error}</div>
            )}
          </div>
        </>
      )}
      {errorConfig && (
        <div className='font-bold text-4xl mx-auto mt-5'>{errorConfig}</div>
      )}
    </div>
  );
}

export default App;
