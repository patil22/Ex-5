
import React from 'react';

class Api extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: []
        }
    }
    componentDidMount() {
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(
            (customers) => {
                this.setState({ customers: customers });
            },
            (error) => {
                alert(error);
                console.log(error)
            }
        )
    }
 
    render() {
        return (<table cellPadding="0" cellSpacing="0">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>title</th>
                    
                </tr>
            </thead>
 
            <tbody>
                {this.state.customers.map(customer =>
                    <tr>
                        <td>{customer.id}</td>
                        <td>{customer.title}</td>
                        
                    </tr>
                )}
            </tbody>
        </table>);
    }
}
export default Api;





