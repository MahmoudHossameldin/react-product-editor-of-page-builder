import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useAppSelector } from '../store';

function Header() {
  const { configData } = useAppSelector((state) => state.config);
  const mainColor = configData?.mainColor;

  return (
    <div className='bg-blue' style={{ backgroundColor: mainColor }}>
      <div className='mx-auto max-w-app h-[3.438rem] flex items-center'>
        <Link
          to='/'
          className='ml-5 min-[1460px]:ml-0 w-[8.75rem] h-[1.625rem]'
        >
          <img
            src={configData?.logo || logo}
            alt='Innoloft Logo'
            className='brightness-0	invert'
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
