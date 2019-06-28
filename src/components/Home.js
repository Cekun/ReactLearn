import React, { Component } from 'react'


class Home extends Component{

    constructor(){
        super();
        
        //定义数据
        this.state = {
            name:'Charllia',
            age: '18',
            gender:'0'
        }
    }

    render(){
        return (
            <div>
                <h1>你好react</h1>
                <p>我是{this.state.name}</p> 
            </div>    
        )
    }
}

export default Home;