import { Component } from 'react/cjs/react.production.min';
import './employees-list-item.css';

class EmployeesListItem extends Component {

    state = {
        increase: false,
    }
   

    handleIncrease = () => {
        this.setState(({ increase }) => ({
            increase: !increase
        }))
    }
   
    render() {
        
        let className = "list-group-item d-flex justify-content-between";
        if (this.state.increase) {
            className += ' increase'
        }
        // className? "increase": null


        return (
            <li className={className}>
                <span className="list-group-item-label">{this.props.name}</span>
                <input type="text" className="list-group-item-input" defaultValue={this.props.salary + "$"} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={this.handleIncrease} type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        onClick={this.props.onDelete}
                        className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}


export default EmployeesListItem;