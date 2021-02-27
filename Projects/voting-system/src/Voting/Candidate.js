import React from 'react';
import PropTypes from 'prop-types';

function Candidate({ candidate, index }) {
	return (
		<div>
			<div className='candidate-image'>
				<h2>
					<strong>{index + 1}</strong>
					{candidate.title}
				</h2>
			</div>
			<div className='variants'>
				<span className='input-container'>
					<input type='checkbox' name='yesVariant' value='yes' /> Pro
				</span>
				<span className='input-container'>
					<input type='checkbox' name='noVariant' value='no' /> Against
				</span>
			</div>
			<button>Confirm</button>
		</div>
	);
}
Candidate.propTypes = {
	candidate: PropTypes.object.isRequired,
	index: PropTypes.number,
};
export default Candidate;
