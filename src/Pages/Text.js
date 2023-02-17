import React from 'react'
import User from './User'
import Props from './Props';

class Text extends React.Component {
    state = {
        users: [
            { name: "alpesh", age: "24", status: "active" },
            { name: "rohan", age: "25", status: "inactive" }
        ],
        showusers: false
    }
    toggle = () => {
        var us = this.state.showusers;
        this.setState({
            showusers: !us
        })
    }
    update = () => {
        this.setState({
            users: [
                { name: "abc", age: "12", status: "active" },
                { name: "xyz", age: "22", status: "inactive" }
            ]
        })

    }

    render() {
     
        return (
            <div>

                <button type='button' className='btn btn-info my-3' onClick={this.toggle}>Show /  Hide</button>
                <button type='button' className='btn btn-info mx-3' onClick={this.update}>Update</button>

                {this.state.showusers === true ? (
                    <div className="row">
                        <div className='col-4' >
                            <Props name={this.state.users[0].name} age={this.state.users[0].age} status={this.state.users[0].status} />
                        </div>

                        <div className="row">
                            <div className='col-4' >
                                <Props name={this.state.users[1].name} age={this.state.users[1].age} status={this.state.users[1].status} />
                            </div>
                        </div>
                    </div>
                )
                    : (
                        <div className='row'>

                            <p>sorry we dont have details</p>
                        </div>
                    )

                }



                <User />
            </div>)
    }
}
export default Text;