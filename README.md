This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**




### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# ReactLearn
学习react 简单些一些demo
1. [react表单](src/components/ReactForm)
2. 事件对象---EventObj组件
3. 代办事项-已完成对象 ---   TodoList
4. 模块化---封装storage

## 父子组件

组件的相互调用中，我们把调用者称为父组件，被调用者称为子组件  
  
父组件给子组件传值

 1.在调用子组件的时候定义一个属性    
 
 <Header msg='首页'></Header>
 
 

2.子组件里面 this.props.msg          


        说明：父组件不仅可以给子组件传值，还可以给子组件传方法,以及把整个父组件传给子组件,可以让子组件给父组件传值。


    父组件主动获取子组件的数据

        1、调用子组件的时候指定ref的值 <Header ref='header'></Header>      
        
        2、通过this.refs.header  获取整个子组件实例  (dom（组件）加载完成以后获取 )

##  axios 和 jsonp
react获取服务器APi接口的数据：


    react中没有提供专门的请求数据的模块。但是我们可以使用任何第三方请求数据模块实现请求数据


    1、axios          https://github.com/axios/axios       axios的作者觉得jsonp不太友好，推荐用CORS方式更为干净（后端运行跨域）


          1、安装axios模块npm install axios  --save   /  npm install axios  --save


          2、在哪里使用就在哪里引入import axios from 'axios'

          3、看文档使用


            var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';

            axios.get(api)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });



    2、fetch-jsonp    https://github.com/camsong/fetch-jsonp


            1、安装 npm install fetch-jsonp  --save

            2、import fetchJsonp from 'fetch-jsonp'


            3、看文档使用

            fetchJsonp('/users.jsonp')
            .then(function(response) {
              return response.json()
            }).then(function(json) {
              console.log('parsed json', json)
            }).catch(function(ex) {
              console.log('parsing failed', ex)
            })

   3、其他请求数据的方法也可以...自己封装模块用原生js实现数据请求也可以...




远程测试API接口：


get请求：

    http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20


jsonp请求地址:

    http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&callback=?

           

# ReactLearn1

    
## React 生命周期
1. 初始化阶段：  
    constructor()  
    componentWillMount()  
    render() 

2. 更新阶段  
   componentWillUpdate()  
   render()  
   componentDidUpdate()    

3. 组件销毁  
   componentWillUnmount() 在这里清楚定时器

4. 错误处理  
   componentDidCatch()       

## 虚拟DOM和Diff算法  
> 虚拟DOM和Diff算法是react中非常核心的两个概念  

**虚拟DOM:**  
   内部执行流程：  
    1. 用JavaScript对象结构表示DOM树的结构；然后用这个树结构建一个真正的DOM树。插到文档当中；  
    2. 当状态变更的时候，重新构造一棵树的对象树，然后用新的树和旧的树就行比较，记录两个数的差异；  
    3. 把步骤2所记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新了。   

    本质：就是在JS和DOM之间做了一个缓存，可以类比CPU和硬盘，硬盘读取数据速度慢，我们就在它们之间加一个缓存条。反之，既然DOM运行速度慢，那么我们就在JS和DOM之间加个缓存，JS只操作visual DOM，最后的时候再把变更的结果写入DOM。  



   