
export function getOrigin(){
    return window.location.origin.toString()
}

export function addToShoppingCart(productIdParam){
    const CART_ITEM = "SHOPPING_CART"
    const newProduct = {
        productId: productIdParam, 
        amount: 1
    }    

    let cartContent = localStorage.getItem(CART_ITEM);
    let products = []

    if(cartContent){
        products = JSON.parse(cartContent)  
        let idx = -1;
        for(let i = 0; i < products.length; i++){
            if(products[i].productId === productIdParam){
                idx = i;
                break;
            }
        }
        if(idx >= 0){
            products[idx].amount = products[idx].amount + 1;
        }
        else{
            products.push(newProduct);
        }
    }
    else{
        products = [newProduct]
    }
    const productsStr = JSON.stringify(products)
    localStorage.setItem(CART_ITEM, productsStr)
    console.log(`Dodano produkt z id=${productIdParam} do koszyka. Zawartosc koszyka to ${productsStr}`)
}

export function getShoppingCartContent(){
    const CART_ITEM = "SHOPPING_CART"
    let cartContent = localStorage.getItem(CART_ITEM);
    return JSON.parse(cartContent)
}

export function getCartElementById(productIdParam){
    const CART_ITEM = "SHOPPING_CART"

    const cartContent = localStorage.getItem(CART_ITEM);
    let products = JSON.parse(cartContent) 
    let idx = -1;
    for(let i = 0; i < products.length; i++){
        if(products[i].productId === productIdParam){
            idx = i;
            break;
        }
    }
    if(idx < 0) return null;
    return products[idx];
}

export function redirectToErrorPage(){
    window.location.href = `${window.location.origin.toString()}/not-found`
}
