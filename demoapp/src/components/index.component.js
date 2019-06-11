import React from 'react';
import axios from 'axios';
import TableRow from './TableRow';

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = { employee : [] };
	}

	componentDidMount() {
		axios.get('http://localhost:4000/employee')
		.then(response => {
			this.setState ({ employee : response.data });
		})
		.catch(function(error) {
			console.log(error);
		})
	}

	tabRow() {
		console.log(this.state.employee);
		return this.state.employee.map(function(object,i) {
			return <TableRow obj={object} key={i} />;
		});
	}

	render() {
		return (
			<div>
				<h3>Employee List:</h3>
				<table className="table">
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Age</th>
							<th scope="col">DOJ</th>
							<th colSpan="2">Action</th>
						</tr>
					</thead>
					<tbody>
						{this.tabRow()}
					</tbody>
				</table>
				
			</div>
		);
	}
}

export default Index;