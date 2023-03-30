import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import { Component } from 'react';

const data = [
  { name: 'Alex N.', salary: 800, increase: false, id: 1 },
  { name: 'John C.', salary: 1000, increase: true, id: 2 },
  { name: 'Carl S.', salary: 5000, increase: false, id: 3 }
]

class App extends Component {

  state={
    data: JSON.parse(localStorage.getItem('newData')) || data,
  }

  addNewPersoName =(newPerson)=>{
      const temp = [...data];
      temp.push(newPerson)
      this.setState({
        data: temp
      })
      localStorage.setItem("newData",JSON.stringify(temp))
  }

  deleteItem=(id)=>{
    this.setState(({data})=>{
    
      return{
        data: data.filter(elem => elem.id !== id)
      }
    })
  }

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList 
        onDelete={this.deleteItem}
        data={this.state.data} />
        <EmployeesAddForm data={this.state.data}  addNewPersoName={this.addNewPersoName}/>
      </div>
    );
  }
}

export default App;
