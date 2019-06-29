import React, {Component} from 'react';

import fetchJsonp from 'fetch-jsonp';

class FetchJsonp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[] 
         };
    }
    getData =()=>{
        let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        fetchJsonp(api)
            .then((response) => {
              return response.json()
            }).then((json) => {
              console.log('parsed json', json.result)
              this.setState({
                list: json.result
            })
            
            }).catch(function(ex) {
              console.log('parsing failed', ex)
            })
    }
    render() {
        return (
            <div>
                <h2>FetchJsonp获取服务器jsonp接口的数据</h2>
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

export default FetchJsonp;