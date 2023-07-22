import logo from '../assets/logo.svg';

function Header() {
  return (
    <div className='bg-blue'>
      <div className='mx-auto max-w-app h-[3.438rem] flex items-center'>
        <img src={logo} alt='Innoloft Logo' />
      </div>
    </div>
  );
}

export default Header;
