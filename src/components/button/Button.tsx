import iconPlus from './plus.svg';

type Props = {
	onClick: () => void;
};
const Button = ({ onClick }: Props) => {
	return (
		<button
			className='flex items-center gap-2 bg-blue-dark rounded-lg p-4 text-sm transition hover:bg-purple-dark hover:transition'
			onClick={onClick}
		>
			Criar
			<img src={iconPlus} alt='' />
		</button>
	);
};

export default Button;
