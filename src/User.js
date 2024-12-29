import { useState } from "react";


import React from "react";
class User extends React.Component{
    constructor(){
        super()
        console.log("ChildTwo Constructor")
    }
    componentDidMount(){
        console.log("ClidTwo componentDidMout")
    }
    render(){
        console.log("ChildTwo Render")
        return(
            <div>
            <h1>User function</h1>
        </div>
        )
    }
}
export default User;
// const User =(props)=>{
//     const{name ,Location,Email}=props
//     const [count]=useState(0);
//     const[count2]=useState(1);
    
//     return(
       
//     )
// }

