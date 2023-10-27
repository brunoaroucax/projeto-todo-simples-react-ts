import imgLogo from '../../assets/logo.png';

const Header = () => {
	return (
		<header className='w-full bg-gray-700 h-[200px] flex items-center justify-center'>
			<img src={imgLogo} alt='Logo' />
		</header>
	);
};

export default Header;
