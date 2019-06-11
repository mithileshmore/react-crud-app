import React from 'react';
import axios from 'axios';

class Edit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name : '', 
			age : '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleNamechange = this.handleNamechange.bind(this);
		this.handleAgechange = this.handleAgechange.bind(this);
	}

	componentDidMount() {
		axios.get('http://localhost:4000/employee/edit/'+this.props.match.params.id)
		.then(response => {
			this.setState ({ name : response.data.name });
			this.setState ({ age : response.data.age });
		})
		.catch(function(error) {
			console.log(error);
		})
	}

	handleNamechange(e) {
		this.setState ({
			name : e.target.value,
		})
	}

	handleAgechange(e) {
		this.setState ({
			age : e.target.value,
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		const obj = {
		      name: this.state.name,
		      age: this.state.age,
		};
	    axios.post('http://localhost:4000/employee/update/'+this.props.match.params.id, obj)
	        .then(res => console.log(res.data));
	    window.location.reload();
		this.props.history.push('/index');
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h3>Edit Employee Details</h3>
					<div className="form-group row">
						<label>
						Name: 
						</label>
						<input type="text" onChange={this.handleNamechange} value={this.state.name} />
					</div>
					<div className="form-group row">
						<label>
						Age: 
						</label>
						<input type="text" onChange={this.handleAgechange} value={this.state.age} />
					</div>
					<input type="submit" value="Submit"/>
				</form>
			</div>
		)
	}
}

export default Edit;