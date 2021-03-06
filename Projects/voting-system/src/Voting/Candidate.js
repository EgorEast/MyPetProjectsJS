import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

function Candidate({ candidate = {}, index = -1 }) {
	const { setVote, vote } = useContext(Context);
	const classes = [];

	if (candidate.vote === vote.pro) classes.push('pro-candidate');
	else if (candidate.vote === vote.against) classes.push('against-candidate');
	return (
		<div className={classes.join(' ')}>
			<div className='candidate-image'>
				<h2>
					<strong>{index}</strong>
					{candidate.title}
				</h2>
			</div>
			<div className='variants'>
				<input
					type='radio'
					name='variant'
					id='variants'
					onChange={() => setVote(candidate.id, vote.pro)}
				/>
				Pro
				<input
					type='radio'
					name='variant'
					id='variants'
					onChange={() => setVote(candidate.id, vote.against)}
				/>
				Against
			</div>
		</div>
	);
}
Candidate.propTypes = {
	candidate: PropTypes.object.isRequired,
	index: PropTypes.number,
};
export default Candidate;
