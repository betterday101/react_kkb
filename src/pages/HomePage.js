import React, { Component } from 'react';
import {ThemeContext} from '../Context'
import UserPage from './UserPage'
class HomePage extends Component{
   
   // static  contextType=ThemeContext
    render(){
        // const {themeColor}=this.props.themeColor
        // console.log(themeColor)
        console.log(this)
        const {themeColor}=this.context
        return (
            <div>
                <h3 className={themeColor}>HomePage</h3>
                <UserPage/>
            </div>
        )
    }
}
HomePage.contextType=ThemeContext
export default  HomePage