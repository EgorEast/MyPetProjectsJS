import React from 'react';
import PropTypes from 'prop-types';
import Candidate from './Candidate';

function AnsverWithVot(props) {
	return (
		<div className='candidate'>
			{props.candidateList.map((candidate, index) => {
				return (
					<Candidate candidate={candidate} key={candidate.id} index={index} />
				);
			})}
		</div>
	);
}
AnsverWithVot.propTypes = {
	candidateList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default AnsverWithVot;
