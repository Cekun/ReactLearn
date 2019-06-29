import React from 'react';
import Storage from '../model/storage';
import  '../assets/css/index.css';


class TodoList extends React.Component {
    constructor(props){
        super(props);

        this.state  = {
            msg: 'TodoList组件',
            username: '',
            list: [],
            list2:[]
            
        }
    }

    inputChange = (e)=> {
        this.setState({
            username: e.target.value
        })
    }

    addData = (e)=> {
        let tempList = this.state.list2;
        tempList.push({
            'title' : this.refs.title.value,
            'checked': false
        }); //返回值是一个索引值
        
        this.setState({
            list2: tempList
        })
        this.refs.title.value = '';
        this.refs.title.focus();  
        Storage.set('todoList', tempList) 
    }

    addDataByEnter = (e) => {
        if(e.keyCode == '13'){
            let tempList = this.state.list2;
            tempList.push({
                'title' : this.refs.title.value,
                'checked': true
            }); //返回值是一个索引值
        
            this.setState({
                list2: tempList
            })
            this.refs.title.value = '';
            this.refs.title.focus();  
            Storage.set('todoList', tempList);
        }
    }

    removeDate = (index)=>{
        let tempList = this.state.list2;
        tempList.splice(index, 1);
        this.setState({
            list2: tempList
        });
        Storage.set('todoList', tempList);
    }

    //改变待办事项和已办事项
    handelList2 = (index)=> {
        let tmp = this.state.list2;
        tmp[index].checked = !tmp[index].checked;
        this.setState({
            list2: tmp
        });
        Storage.set('todoList', tmp);
    }

    //生命周期函数 页面加载就会触发
    componentDidMount(){
        //获取缓存数据
        let todoList = Storage.get('todoList');
        if(todoList)
        {
            this.setState({
                list2: todoList
            });
        }
       
    }

    render() {
        return (
            <div>
                <h2>React TodoList案列演示</h2>

                <input onKeyDown={this.addDataByEnter} ref="title" /> <button onClick={this.addData}>增加+</button>
                <hr/>

                <ul>
                    {
                        this.state.list.map((value, index) => {
                            return (
                                <li style={{'paddingTop': '3px','lineHeight': '2'}} key={index}>{value}----
                                <button onClick={this.removeDate.bind(this, index)}>删除-</button></li>                     
                            )
                        })
                    }
                </ul>

                <h3>待办事项</h3>
                <ul>
                    {
                        this.state.list2.map((value, index) => {
                            if(!value.checked){
                                return (
                                    <li key = {index} className="list">
                                        <input type = 'checkbox' checked={value.checked} onChange={this.handelList2.bind(this,index)}/>
                                        {value.title}---
                                        <button onClick={this.removeDate.bind(this, index)}>delete</button>
                                    </li>
                                                                    
                                )
                            }else{
                                return ''
                            }
                            
                        })
                    }
                </ul>
                <hr/>
                <h3>已完成事项</h3>
                <ul>
                    {
                        this.state.list2.map((value, index) => {
                            if(value.checked){
                                return (
                                    <li key = {index} className="list">
                                        <input type = 'checkbox' checked={value.checked} onChange={this.handelList2.bind(this,index)} />
                                        {value.title}---
                                        <button onClick={this.removeDate.bind(this, index)}>delete</button>
                                    </li>
                                                                    
                                )
                            }else{
                                return ''
                            }
                            
                        })
                    }
                </ul>
                    
             

            </div>
        );
    }
}

export default TodoList;