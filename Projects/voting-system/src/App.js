import React from 'react';
import AnsverWithVot from './Voting/AnsverWithVot';

function App() {
	const candidateList = [
		{ id: 1, selected: false, title: 'Путин' },
		{ id: 2, selected: false, title: 'Навальный' },
		{ id: 3, selected: false, title: 'Жириновский' },
	];

	return (
		<div className='wrapper'>
			<h1>Choose</h1>
			<AnsverWithVot candidateList={candidateList} />
		</div>
	);
}

export default App;
