import React from "react";
import './Modal.css';

class Modal extends React.Component{
    render(){
        return(
            <div className='modal'>
                {this.props.children}
            </div>
        )
    }
}
export default Modal