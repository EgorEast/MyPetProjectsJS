import React, { useState } from 'react';
import AnsverWithVot from './Voting/AnsverWithVot';
import Context from './context';

function App() {
	const vote = {
		pro: 'pro',
		notChosen: 'notChosen',
		against: 'against',
	};
	let [candidateList, setCandidateList] = useState([
		{ id: 1, vote: vote.notChosen, confirm: false, title: 'Путин' },
		{ id: 2, vote: vote.notChosen, confirm: false, title: 'Навальный' },
		{
			id: 3,
			vote: vote.notChosen,
			confirm: false,
			title: 'Жириновский',
		},
	]);

	function setVote(id = 0, value = '') {
		setCandidateList(
			candidateList.map((candidate) => {
				if (candidate.id === id) candidate.vote = value;
				return candidate;
			})
		);
	}
	function setConfirm(id = 0, value = false) {
		setCandidateList(
			candidateList.map((candidate) => {
				if (candidate.id === id) candidate.confirm = value;
				return candidate;
			})
		);
	}

	let [indexCurrCandidate, setCurrIndexCandidate] = React.useState(0);
	function setNextIndexCandidate() {
		if (indexCurrCandidate < candidateList.length - 1)
			setCurrIndexCandidate(indexCurrCandidate + 1);
	}
	function setPrevIndexCandidate() {
		if (indexCurrCandidate > 0) setCurrIndexCandidate(indexCurrCandidate - 1);
	}

	return (
		<Context.Provider
			value={{
				setVote,
				setConfirm,
				setNextIndexCandidate,
				setPrevIndexCandidate,
				vote,
				indexCurrCandidate,
			}}
		>
			<div className='wrapper'>
				<h1>Choose</h1>
				<AnsverWithVot candidateList={candidateList} />
			</div>
		</Context.Provider>
	);
}

export default App;
