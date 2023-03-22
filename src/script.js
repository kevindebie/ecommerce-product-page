import Alpine from 'alpinejs'
import product from "./product.js";

document.addEventListener('alpine:init', () => {
    Alpine.data('Product', product);
})

window.Alpine = Alpine

Alpine.start()