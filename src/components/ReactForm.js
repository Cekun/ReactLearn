import React from 'react';

class ReactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg: 'react表单',
            name:'',
            gender: '1',
            city:'',
            cities: ['北京', '上海', '深圳'],
            hobby: [
                {
                    'title': '睡觉',
                    'checked': true
                },
                {
                    'title': '吃饭',
                    'checked': false
                },
                {
                    'title': '撸代码',
                    'checked': true
                }
            ],
            info: ''
         };
    }

    handelName =(e)=>{
        this.setState({
            name: e.target.value
        })
    }

    handelSubmit = (e)=> {
        //阻止submit的提交事件
        e.preventDefault();
        console.log(this.state.city,this.state.gender, this.state.info, this.state.hobby)
    }

    handelGender = (e)=> {
        this.setState({
            gender: e.target.value
        })
    }

    handelCity = (e)=> {
        
        this.setState({
            city: e.target.value
        })
        
    }

    handleHobby(index){
        let hobby = this.state.hobby;
        hobby[index].checked = !hobby[index].checked
        this.setState({
            hobby: hobby
        })
    }

    handelInfo =(e)=>{
        this.setState({
            info: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.msg}---ReactForm组件</h2>

                <form onSubmit={this.handelSubmit}>
                    <p>{this.state.name}</p>
                    <span>用户名：</span><input type="text" value={this.state.name} onChange={this.handelName} /><br/>
                    <span>男：</span><input type="radio" value="1" onChange={this.handelGender} checked={this.state.gender==='1'} />
                    <span>女：</span><input type="radio" value="2" onChange={this.handelGender} checked={this.state.gender==='2'} /><br/>
                    <span>城市：</span>
                    <select value={this.state.city} onChange={this.handelCity}>
                        {
                            this.state.cities.map((value, index)=>{
                                return <option key={index}>{value}</option>
                            })
                        }
                        
                    </select><br/>
                    <span>爱好：</span>
                    {
                        this.state.hobby.map((value, index) => {
                            return(
                                <span key={index}>
                                    <span>{value.title}</span><input type="checkbox" checked={value.checked} onChange={this.handleHobby.bind(this,index)} />
                                </span>
                            ) 
                        })
                    }<br/>
                    <span>备注：</span>
                    <textarea value={this.state.info} onChange={this.handelInfo} /><br/>
                    <input style={{width: '120px',height: '160px'}} type="submit"  value="提交"/>
                </form>
                <br/><br/><br/>
            </div>
        );
    }
}

export default ReactForm;