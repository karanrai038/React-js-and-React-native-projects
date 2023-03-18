import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeList from './components/employee-list.js';
import EmployeeForm from './components/employee-form.js';
import Header from './components/header.js';
function App() {
  return (
    <div className="App">
      <Header />
      <EmployeeForm />
      <EmployeeList />
    </div>
  );
}

export default App;
