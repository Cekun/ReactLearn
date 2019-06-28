import React from 'react'

export default class HandleFunc extends React.Component{
    constructor(props){
        super(props);

        this.state={
            msg: 'Oh my gold',
            name: 'this is third kind of method'
        }

        //第二种改变this指向的方法
        this.getMsg = this.getMsg.bind(this);
    }

    run(){
        window.alert('我是一个run方法')
    }

    getDate(){
       alert(this.state.msg)
    }

    getMsg(){
        alert(this.state.msg)
    }
    //推荐的方法
    getName = ()=> {
        alert(this.state.name)
    }
    
    setDate =() => {
        this.setState({
            msg:'我是一个组件，这是改变后的值'
        })
    }

    setName = (str) =>{
        this.setState({
            name: str
        })
    }

    render(){

        return(
            <div>
                <hr/>
                <h2>react事件方法---HandleFunc组件</h2>
                <p>{this.state.name}</p>
                <button onClick={this.run}>执行方法</button><br/><br/>
                <button onClick={this.getDate.bind(this)}>获取数据--第一种改变this指向的方法</button>
                <br/><br/>
                <button onClick={this.getMsg}>获取数据--第二种改变this指向的方法</button>
                <br/><br/>
                <button onClick={this.getName}>获取数据--第三种改变this指向的方法</button>
                <br/><br/>
                <button onClick={this.setDate}>改变state里面的值</button>
                <br/><br/>
                <button onClick={this.setName.bind(this,['zhangsan'])}>执行方法传值</button>
            </div>
           
        )
    }
} 

