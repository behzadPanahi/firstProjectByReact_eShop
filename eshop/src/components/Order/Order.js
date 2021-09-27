import React from "react";
import Wrapper from '../../hoc/Wrapper'

class Order extends React.Component {

    render() {
        const summery = Object.keys(this.props.products).map((item) => {
            return (
                <li key={item}>
                    {item} : {this.props.products[item]}
                </li>
            )
        })
        return (
            <Wrapper>
                <h3>order</h3>
                <ul> {summery} </ul>
            </Wrapper>
        )
    }
}

export default Order