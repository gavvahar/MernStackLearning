import React from 'react';
import UserComponent from './UserComponent';

class BasicComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			age: 27,
		};
	}
	render() {
		const user = {
			userName: 'User A',
			hobbies: ['Driving', 'Reading', 'Writing'],
		};

		return (
			<div className="container" style={{ border: '2px solid black', height: '500px', margin: '10px' }}>
				<div className="row">
					<div className="col-md-12">
						<UserComponent age={this.state.age} user={user} />
					</div>
				</div>

			</div>

		);
	}
}

export default BasicComponent;
