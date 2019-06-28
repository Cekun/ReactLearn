import React from 'react';
import logo from '../assets/img/logo.svg'

class News extends React.Component{

    constructor(props){
        super(props); //父子组件传值，固定写法

        this.state={
            userInfo:{
                name: 'Jon',
                msg: '新闻',
                list: ['1','2','3'],
                
            },
            list2: [<h2 key='1'>我是一个h2</h2>,<strong key='2'>我是强壮</strong>],
            style:{
                width: '60px',
                height: '60px'
            }
        }
    }

    render(){

        let listResult = this.state.userInfo.list.map((v, i)=>{
            return <li key={i}>{v}</li>
        })

        return(
            <div>
                <h3>{this.state.userInfo.name}</h3>
                <ul>
                    <li>列表1</li>
                    <li>列表2</li>
                  
                </ul>
                {/* <img src="../assets/img/logo.svg" alt='' /> */}
                <img style={this.state.style} src={logo} alt='' /> 
                <img style={{width:'60px',height:'60px'}} src={require('../assets/img/logo.svg')} alt='' /> 

                <hr/>

                {this.state.list2}
                <ul>{listResult}</ul>
            </div>
        )
    }
}

export default News;