import { Component } from "react";
import '../index.css'
import '../App.css'

class Image extends Component{
    myFunztion(){
       const myImg = document.getElementById('myImg')
        
        console.log('click')
        if(!(myImg.classList.contains('rounded') && myImg.classList.contains('rotate'))){
            myImg.classList.add('rounded')


        }
        
          

    
    }

    render(){
        return (
            <img id = "myImg" onClick={this.myFunztion}  src = {this.props.source} alt = {this.props.alternative} width= {this.props.width} height= {this.props.height} />
        )
    }
}


    



export default Image

