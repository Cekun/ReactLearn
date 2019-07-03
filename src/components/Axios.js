import React, {Component} from 'react';
import axios from 'axios'

class Axios extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list: [],
            msg: 'Axios组件'
         };
    }

    getData = ()=> {
        let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20'; //后台允许访问
        axios.get(api).then((response) => {
            // handle success
            //console.log(response);
            this.setState({
                list: response.data.result
            })
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
    }

    componentDidMount = () =>{
        this.getData()
    }

    render() {
        return (
            <div>
                <h2>请求后台数据---{this.state.msg}</h2>
                <br/>
                <button onClick={this.getData}>获取数据</button>
                <ul>
                {
                    this.state.list.map((value, index) => {
                        return (
                            <li key={index}>{value.title}</li>
                        )
                    })
                }
                </ul>
            </div>
        );
    }
}

export default Axios;