import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import ProductEditPage from './pages/ProductEditPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/product/edit' element={<ProductEditPage />} />
    </Routes>
  );
};

export default AppRoutes;
