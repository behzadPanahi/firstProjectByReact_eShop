import React from "react";
import Wrapper from "../../hoc/Wrapper";
import Control from "../../components/controls/control";
import Modal from "../../components/UI/Modal/Modal"
import Order from "../../components/Order/Order";
const price = {
    product1: 59,
    product2: 63,
    product3: 99,
    product4: 32
}
class Shopping extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: {
                product1: 0,
                product2: 0,
                product3: 0,
                product4: 0
            },
            totalPrice: 0,
            purchased: false
        }
    }




    addProductHandler(type) {
        const prevCount = this.state.products[type]
        const newCount = prevCount + 1
        const newProducts = this.state.products
        newProducts[type] = newCount;
        const unitPrice = price[type]
        const total = this.state.totalPrice;
        const newTotal = total + unitPrice;
        this.setState({ Products: newProducts, totalPrice: newTotal })
    }

    removeProductHandler(type) {
        const prevCount = this.state.products[type]
        if (prevCount > 0) {
            const newCount = prevCount - 1
            const newProducts = this.state.products
            newProducts[type] = newCount;
            const unitPrice = price[type]
            const total = this.state.totalPrice;
            const newTotal = total - unitPrice;
            this.setState({ Products: newProducts, totalPrice: newTotal })
        }
    }

    purchasedHandler=()=> {
        this.setState({ purchased: true })
    }

    closeModalHandler=()=> {
        this.setState({ purchased: false })
    }
    render() {
        return (
            <Wrapper>
                <Modal show={this.state.purchased}
                closeModal={this.closeModalHandler}
                >
                    <Order products={this.state.products} />
                </Modal>
                <div>
                    <Control productAdd={this.addProductHandler.bind(this)}
                        productRemove={this.removeProductHandler.bind(this)}
                        totalPrice={this.state.totalPrice}
                        order={this.purchasedHandler}
                    />
                </div>
            </Wrapper>
        )
    }
}

export default Shopping