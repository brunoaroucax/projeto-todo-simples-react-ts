type Props = {
	value: string;
	onChange: () => void;
};

const Input = ({ value, onChange }: Props) => {
	return (
		<input
			type='text'
			placeholder='Adicione uma nova tarefa'
			className='flex-1 bg-gray-500 text-base p-4 rounded-lg border border-gray-700 placeholder:text-gray-300'
			value={value}
			onChange={onChange}
		/>
	);
};

export default Input;
