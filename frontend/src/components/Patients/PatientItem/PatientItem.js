import React from 'react';

import './PatientItem.css';

class patientItem extends React.Component {
	render() {
		return (
			<li key={this.props.patientId} className="events__list-item">
				<div>
					<h1>{this.props.firstName} - {this.props.lastName}</h1>
					<h2>Date of Birth: {(new Date(this.props.dateOfBirth)).toDateString()}</h2>
					<h2>Age: {new Date().getFullYear() - new Date(this.props.dateOfBirth).getFullYear()}</h2>
					<h2>Phone Number: {this.props.phoneNumber}</h2>
				</div>
				<div>
					<button
						className="btn"
						onClick={this.props.onDetail.bind(this, this.props.patientId)}
					>View Details</button>
				</div>
			</li>
		);
	}
};

export default patientItem;