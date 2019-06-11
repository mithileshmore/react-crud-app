import React from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";

class Create extends React.Component {
	constructor(props) {
		super(props);
		this.handleNamechange = this.handleNamechange.bind(this);
		this.handleAgechange = this.handleAgechange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);

		this.state = {
			name : '',
			age : '',
			startDate: new Date(),
		}
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

	handleDateChange(date) {
	    this.setState({
	      startDate: date
	    });
	  }

	handleSubmit(e) {
		console.log("Name is " + this.state.name + "Age is" + this.state.age)
		e.preventDefault();

		const obj = {
		      name: this.state.name,
		      age: this.state.age,
		      startDate : this.state.startDate,
		    };
	    // console.log(this.state.startDate);
		    axios.post('http://localhost:4000/employee/add', obj)
		        .then(res => console.log(res.data));

		this.setState ({
			name : '',
			age : '',
			// startDate : '',
		})
	}

	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
				  <Link to={'/index'} className="navbar-brand">View Employees</Link>
				</nav> <br/>
					<h3>Add New Employee</h3>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group row">
						<label>
						Name: 
						</label>
						<input type="text" onChange={this.handleNamechange} value={this.state.name} />
					</div>
					<div className="form-group">
						<label>
						Age: 
						</label>
						<input type="text" onChange={this.handleAgechange} value={this.state.age} />
					</div>
					<div className="form-group">
						<label>
						DOJ: 
						</label>
						<DatePicker
					        selected={this.state.startDate}
					        onChange={this.handleDateChange}
						/>
					</div>
					<input type="submit" value="Submit"/>

				</form>
			</div>
		)
	}
}

export default Create;