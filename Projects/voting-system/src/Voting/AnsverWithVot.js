import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Candidate from './Candidate';
import Context from '../context';

function AnsverWithVot(props) {
	let {
		setConfirm,
		setNextIndexCandidate,
		setPrevIndexCandidate,
		vote,
		indexCurrCandidate,
	} = useContext(Context);

	let candidate = props.candidateList[indexCurrCandidate];

	return [
		<div className='candidate' key='candidate'>
			<Candidate
				candidate={candidate}
				key={candidate.id}
				index={candidate.id}
			/>
		</div>,
		<button
			key={`PrevCandidateButton`}
			className='prev-candidate-button'
			onClick={() => {
				setPrevIndexCandidate();
			}}
		>
			Prev candidate
		</button>,
		<button
			key={`ConfirmButton`}
			className='confirm-button'
			onClick={() => {
				setConfirm(candidate.id, true);
				if (candidate.vote === vote.pro)
					console.log(`I am pro ${candidate.title}`);
				else if (candidate.vote === vote.against)
					console.log(`I am against ${candidate.title}`);
				else console.log(`I don't solve about ${candidate.title} yet`);
			}}
		>
			Confirm
		</button>,
		<button
			key={`NextCandidateButton`}
			className='next-candidate-button'
			onClick={() => {
				setNextIndexCandidate();
			}}
		>
			Next candidate
		</button>,
	];
}
AnsverWithVot.propTypes = {
	candidateList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default AnsverWithVot;
