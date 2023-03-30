import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {

    state = {
        name: '',
        salary: ''
    }
  

    createNewPerson = (e)=>{
        e.preventDefault()
        const newPerson ={
            id: this.props.data.length + 1,
            name: this.state.name,
            salary: this.state.salary,
            increase: false
        }
       
        this.props.addNewPersoName(newPerson)
    }

    handleOnchangeForm = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    render() {

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input onChange={this.handleOnchangeForm}
                        name="name"
                        value={this.state.name}
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" />
                    <input onChange={this.handleOnchangeForm}
                        name="salary"
                        value={this.state.salary}
                        type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" />

                    <button 
                    onClick={this.createNewPerson}
                    type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;