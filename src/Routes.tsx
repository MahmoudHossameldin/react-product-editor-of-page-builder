import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/product/edit' element={<ProductPage />} />
    </Routes>
  );
};

export default AppRoutes;
