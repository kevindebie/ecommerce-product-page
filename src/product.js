export default () => ({
    mobileMenu: false,
    count: 0,
    activeSlide: 1,
    slides: [1, 2, 3, 4],
    slideIndex: 1,
    modelOpen: false,
    productPrice: 250,
    salePrice: 125,
    showCart: false,
    cartCount: 0,

    /* Product info */
    discountPercentage() {
        return 100 / this.productPrice * this.salePrice + '%';
    },

    decreaseQuantity() {
        if(!this.count <= 0) {
            this.count--;
        }
    },

    increaseQuantity() {
        this.count++;
    },

    /* Cart */
    addToCart() {
        this.cartCount = this.count;

        if (this.cartCount > 0) {
            this.showCart = true;
        }
    },

    totalPrice() {
        let total = this.salePrice * this.cartCount;
        return total.toFixed(2);
    },

})