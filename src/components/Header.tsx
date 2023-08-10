import logo from '../assets/logo.svg';
import { useAppSelector } from '../store';

function Header() {
  const { configData } = useAppSelector((state) => state.config);
  const mainColor = configData?.mainColor;

  return (
    <div className='bg-blue' style={{ backgroundColor: mainColor }}>
      <div className='mx-auto max-w-app h-[3.438rem] flex items-center'>
        <img
          src={configData?.logo || logo}
          alt='Innoloft Logo'
          className='pl-5 min-[1460px]:pl-0 max-w-[8.75rem] max-h-[1.625rem]'
        />
      </div>
    </div>
  );
}

export default Header;
