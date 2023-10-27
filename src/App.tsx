import Header from './components/header/Header';
import Button from './components/button/Button';
import Info from './components/info/Info';
import TaskItem from './components/task/TaskItem';
import { useState } from 'react';
import { Task } from './types/Task';

function App() {
	const [task, setTask] = useState<Task[]>([]);
	const [field, setField] = useState('');

	function handleAddTask() {
		if (field.trim() === '') return false;
		setTask([
			...task,
			{
				id: task.length,
				title: field,
				done: false,
			},
		]);
		setField('');
	}

	function handleRemoveItem(id: number) {
		if (!window.confirm('Tem certeza que deseja remover essa tarefa?'))
			return false;
		setTask(task.filter((item) => item.id !== id));
	}

	return (
		<div>
			<Header />
			<div className='container mx-auto px-6'>
				<div className='flex gap-2 -mt-[27px]'>
					<input
						type='text'
						placeholder='Adicione uma nova tarefa'
						className='flex-1 bg-gray-500 text-base p-4 rounded-lg border border-gray-700 placeholder:text-gray-300'
						value={field}
						onChange={(e) => setField(e.target.value)}
					/>
					<Button onClick={handleAddTask} />
				</div>
				<div className='mt-16'>
					<div className='flex items-center justify-between'>
						<Info
							text='Tarefas Criadas'
							classColor='text-blue'
							counter={task.length}
						/>
						<Info
							text='Concluidas'
							classColor='text-purple'
							counter={2}
							qtd={5}
						/>
					</div>
					<div className='mt-6 flex flex-col gap-3'>
						{task.map((item) => (
							<TaskItem
								key={item.id}
								title={item.title}
								clickRemove={() => handleRemoveItem(item.id)}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
