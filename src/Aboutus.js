import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import userName from "./utills/UserInfo";

class Aboutus extends React.Component{
    
    constructor(){
        super()
        // console.log("Parent Constructor")
    }
    componentDidMount(){
        // console.log(" Parent componenteDidMount")
    }
    render(){
    //    console.log("Parent Render")
       const {logedinuser}=userName;
        return(
            <div>
            <h1>UserClass</h1>
            <UserClass name={"first"} Location={"Vellore"} Email={"naveenk17@gmail.com"}/>
           <div>
            <userName.Consumer>
                {(data)=><h1>{data.logedinuser}</h1>}
            </userName.Consumer>
           </div>
        </div>
        )
    }
}
export default Aboutus;


