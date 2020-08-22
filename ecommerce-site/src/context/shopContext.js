import React, {Component} from 'react'
import Client from 'shopify-buy';

const ShopContext = React.createContext()

const client = Client.buildClient({
    
    storefrontAccessToken: '7053f4116b54393f7f9591815abc954c',
    domain: 'imitationdesign.myshopify.com'
  });


class ShopProvider extends Component {

    state = {
        products: [],
        product: {},
        checkout: {},
        isCartOpen: false,
        test: 'test'
    }

    componentDidMount() {
        if (localStorage.checkout) {
            this.fetchCheckout(localStorage.checkout);
          } else {
            this.createCheckout();
          }
    }

    createCheckout = async () =>{
        const checkout = await client.checkout.create();
        localStorage.setItem("checkout", checkout.id);
        await this.setState({ checkout: checkout });
    }

    fetchCheckout = async (checkoutId) => {
        client.checkout
          .fetch(checkoutId)
          .then((checkout) => {
            this.setState({ checkout: checkout });
          })
          .catch((err) => console.log(err));
      };

    addItemToCheckout = async (variantId, quantity) => {
        const lineItemsToAdd = [
          {
            variantId,
            quantity: parseInt(quantity, 10),
          },
        ];

        const checkout = await client.checkout.addLineItems(
          this.state.checkout.id,
          lineItemsToAdd
        );
        this.setState({ checkout: checkout });
        console.log(checkout);
    
      };

    updateCheckoutItems = async(variantId, quantity) =>{
      const lineItemsToUpdate = [
        {
          variantId,
          quantity: parseInt(quantity,10),
        },
      ];

      const checkout = await client.checkout.updateLineItems(
        this.state.checkout.id,
        lineItemsToUpdate
      );
      this.setState({ checkout: checkout });
      console.log(checkout);

    };

    removeCheckoutItem = async(variantId) =>{
      const lineItemIdsToRemove = [
        {
          variantId
        },
      ];
      const checkout = await client.checkout.removeLineItems(
        this.state.checkout.id,
        lineItemIdsToRemove
      );
      this.setState({ checkout: checkout });
      console.log(checkout);

    };

    fetchAllProducts = async () =>{
        const products = await client.product.fetchAll()
        this.setState({products: products})
    }

    fetchProductWithId = async (id) =>{
        const product = await client.product.fetch(id)
        this.setState({product: product})
    }

    closeCart = () =>{
        this.setState({isCartOpen: false})
        
    }

    openCart = () =>{
        this.setState({isCartOpen: true})
    }

    render(){
        return(
            <ShopContext.Provider value={{ 
                ...this.state,
                fetchAllProducts: this.fetchAllProducts,
                fetchProductWithId: this.fetchProductWithId,
                closeCart: this.closeCart,
                openCart: this.openCart,
                updateCheckoutItems: this.updateCheckoutItems,
                addItemToCheckout: this.addItemToCheckout 
            }}>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}
const ShopConsumer = ShopContext.Consumer 

export {ShopConsumer, ShopContext}

export default ShopProvider