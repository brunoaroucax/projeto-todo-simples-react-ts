import iconTrash from './trash.svg';
import { ChangeEvent, useState } from 'react';

type Props = {
	title: string;
	clickRemove: () => void;
};

const TaskItem = ({ title, clickRemove }: Props) => {
	const [checkbox, setCheckbox] = useState(false);

	function handleCheck(e: ChangeEvent<HTMLInputElement>) {
		setCheckbox(e.target.checked);
	}

	return (
		<div
			className={`w-full bg-gray-500 rounded-lg border border-gray-400 p-4 shadow-[0_2px_8px_0_rgba(0,0,0,0.06)] flex gap-3 items-start
		${checkbox ? 'border-gray-500' : ''}
		`}
		>
			<div>
				<input
					type='checkbox'
					name=''
					id=''
					className='w-4 h-4'
					checked={checkbox}
					onChange={(e) => handleCheck(e)}
				/>
			</div>
			<p
				className={`text-sm text-gray-100 flex-1 transition leading-5
      ${checkbox ? 'line-through text-gray-300' : ''}`}
			>
				{title}
			</p>
			<div>
				<button
					className='cursor-pointer transition hover:bg-gray-400 p-2 rounded-full'
					onClick={clickRemove}
				>
					<img src={iconTrash} alt='' />
				</button>
			</div>
		</div>
	);
};

export default TaskItem;
