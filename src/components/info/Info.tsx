type Props = {
	text: string;
	classColor: string;
	counter: number;
	qtd?: number;
};

const Info = ({ text, classColor, counter, qtd }: Props) => {
	return (
		<div className='flex items-center gap-2'>
			<div className={`${classColor} text-sm `}>{text}</div>
			<span className='text-xs text-gray-200 bg-gray-400 px-2 py-0.5 rounded-full'>
				{qtd && (
					<p>
						{counter} de {qtd}
					</p>
				)}
				{!qtd && <p> {counter} </p>}
			</span>
		</div>
	);
};

export default Info;
