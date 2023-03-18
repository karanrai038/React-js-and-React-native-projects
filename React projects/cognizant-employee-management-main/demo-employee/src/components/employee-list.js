import React from "react";
import { connect } from "react-redux";
import { employeeDelete, employeeGetAll } from "../actions/employeeActions";

class EmployeeList extends React.Component {
  componentDidMount() {
    this.props.dispatch(employeeGetAll);
  }
  handleUpdate = () => {};
  handleDelete = (id) => {
    this.props.dispatch(employeeDelete(id));
  };
  render() {
    console.log(this.props);
    return (
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <h2>Employee List</h2>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Age</th>
                <th>Department</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.employees &&
                this.props.employees.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.department}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={this.handleUpdate}
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  const { employees } = state;
  return {
    employees,
  };
}

export default connect(mapStateToProps)(EmployeeList);
