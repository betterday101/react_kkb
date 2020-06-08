import React, { Component } from 'react';

//hoc 高阶组件
// 是一个函数 接收的是一个组件返回的是一个组件
const foo=(Comp)=>(props)=>{
   return <div className="border">
     <Comp {...props}/>
   </div>
}   
function Child(props){
    return <div className="border">child-{props.name}</div>
}
const Foo=foo(foo(Child))
export default class ContentPage extends Component{
 

    render(){
      
        return (
            <div>
               <h3>HocPage</h3>
               <Foo name="celine" />
            </div>
        )
    }
}