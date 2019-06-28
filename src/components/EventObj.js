import React from 'react'


export default class EventObj extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            msg: 'EventObj组件',
            username: ''
        }

    }

    run = (event)=> {
        //console.log(event)
        //alert(event.target)
        event.target.style.background = 'red'
        //获取dom的属性
        alert(event.target.getAttribute('aid'))
    }

    inputChange = (event)=>{
        //通过元素ref属性传值
        //let val = this.refs.username.value;
        //console.log(val)
        //获取表单的值
        this.setState({
            username: event.target.value
        }) 
    }

    getInput = ()=> {
        alert(this.state.username);
    }

    inputKeyDown = (e)=> {
        if(e.keyCode == 13) //按回车
        alert(e.target.value)
    }

    render(){
        return(
            <div>
                <h2>事件对象---{this.state.msg}</h2>
                <button aid='1223' onClick={this.run}>事件对象</button>
                <h2>表单事件</h2>
                 {/* 获取表单的值

                 1. 监听表单的改变事件
                 2. 在改变的事件里面获取表单输入的值 
                 3. 把表单输入的值赋值给username
                 4. 点击按钮的识货获取state里面的username */}
                <input ref="username" onChange={this.inputChange}/><button onClick={this.getInput}>获取input的值</button>
                <p>{this.state.username}</p>
                 <h3>键盘事件</h3>
                <input onKeyDown={this.inputKeyDown}/>

                <br/><br/><br/><br/>
            </div>
        )
    }
} 

