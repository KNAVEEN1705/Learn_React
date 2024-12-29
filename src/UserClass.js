import React from "react";
class UserClass extends React.Component{
    
    constructor(props){
        super(props);
       
        this.state={
            userInfo:{
                name:"navi",
                login:"vellore"
            }
           
        }
        // console.log(this.props.name+"child constructor")
       }
      async componentDidMount(){
        const data = await fetch("https://api.github.com/users/KNAVEEN1705");
        const json= await data.json();
        console.log(json)
        this.setState({
            userInfo:json
        })
       }
   
    render(){
        // console.log(this.props.name+"Child Render")
        const{name,login}=this.state.userInfo
       
        return(
            <div>
                
                <h2>{name}</h2>
                <h2>{login}</h2>
            </div>
        )
    }
}

export default UserClass;