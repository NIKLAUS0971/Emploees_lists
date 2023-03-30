import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data, onDelete}) => {




    let allData = data.map((item, pos) => {
        const { id, ...itemProps } = item
        return (
            <EmployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)} />
        )
    })
    return (
        <ul className="app-list list-group">
            {allData}
        </ul>
    )
}

export default EmployeesList;