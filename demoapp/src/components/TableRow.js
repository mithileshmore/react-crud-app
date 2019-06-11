import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.state = {
      startDate: new Date(),
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/employee/'+this.props.obj._id)
    .then(response => {
      this.setState ({ startDate : response.data.startDate });
    })
    console.log(this.state.startDate);
  }

  delete() {
    axios.get('http://localhost:4000/employee/delete/'+this.props.obj._id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
    window.location.reload();
  }

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.age}
          </td>
          <td>
            {}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button className="btn btn-primary" onClick={this.delete}>Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;