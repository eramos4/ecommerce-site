import React, {Component} from 'react'
import Client from 'shopify-buy';

const ShopContext = React.createContext()

const client = Client.buildClient({
    
   storefrontAccessToken: 'cfdc4bfa95a9d915b0bd21eea2b7fb57',
  domain: 'imitation-design-art.myshopify.com'
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
            variantId: window.btoa(`gid://shopify/ProductVariant/${variantId}`),
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
        // insert your own mongoDB query
        // axios.get('/productById/:id')
        // this would return the product object and you can set it to 
        // product

        // const product = {
        //   availableForSale: true,
        //   createdAt: "2020-08-04T20:18:55Z",
        //   description: "A Walk Through Nostalgia is a small batch 92 page zine of a collection of my favorite photographs from 2015 to 2020.",
        //   descriptionHtml: "<span>A Walk Through Nostalgia is a  small batch 92 page zine of a collection of my favorite photographs from 2015 to 2020.</span>",
        //   handle: "a-walk-through-nostalgia",
        //   id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU1NzEzMTU4OTIzNzQ=",
        //   images: [{src: 'https://s3-us-west-1.amazonaws.com/stormco.re/assets/Lacroix.imageset/lacroix-logo-grey.png'}],
        //   onlineStoreUrl: "https://imitationdesign.myshopify.com/products/a-walk-through-nostalgia",
        //   options: [],
        //   productType: "photography zine",
        //   publishedAt: "2020-08-05T21:35:43Z",
        //   title: "A Walk Through Nostalgia",
        //   updatedAt: "2020-08-23T00:10:55Z",
        //   variants: [{price: 16.99}],
        //   vendor: "Imitation Design",
        //   __typename: "Product",
        // }
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
