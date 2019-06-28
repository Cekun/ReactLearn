import React from 'react';
import { tsThisType } from '@babel/types';

class TodoList extends React.Component {
    constructor(props){
        super(props);

        this.state  = {
            msg: 'TodoList组件',
            username: ''
        }
    }

    inputChange = (e)=> {
        this.setState({
            username: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>双向数据绑定---{this.state.msg}--就是和上面的表单事件一样</h2>

                <input value={this.state.username} onChange={this.inputChange} />
                <p>{this.state.username}</p>
            </div>
        );
    }
}

export default TodoList;