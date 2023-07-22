import React, { useEffect } from 'react';
import AppRoutes from './Routes';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useAppDispatch, fetchProduct, useAppSelector } from './store';

function App() {
  const { data, loading, error } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  console.log(data, error);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div>
      <Header />
      {loading && <div className='loader'></div>}
      <div className='App flex max-w-app mx-auto'>
        <Sidebar />
        {data && <AppRoutes />}
        {error && (
          <div className='font-bold text-4xl mx-auto mt-5'>{error}</div>
        )}
      </div>
    </div>
  );
}

export default App;
