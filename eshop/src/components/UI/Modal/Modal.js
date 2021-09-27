import React from "react";
import './Modal.css';
import Wrapper from '../../../hoc/Wrapper'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends React.Component {
    render() {
            return(
                <Wrapper>
                    <Backdrop show={this.props.show} click={this.props.closeModal}/> 
                <div className='modal' style={{transform : this.props.show ? 'translateY(0)': 'translateY(-100vh)', opacity:this.props.show ?'1' :'0'}}>
                    {this.props.children}
                </div>
                </Wrapper>
            )  
    }
}
export default Modal