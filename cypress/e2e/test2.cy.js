
describe('Тестирование testqastudio', function () {
    
    it('Откроем карточку товара «БРОММС Двухместная кровать»', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click ();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('#content').click();
        cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Маргарита');
        cy.get('#billing_last_name').type('Ефремова');
        cy.get('#select2-billing_country-container').click();
        cy.get('#page-header').click();
        cy.get('#billing_address_1').type('116, Ошарская');
        cy.get('#billing_address_2').type('1 подъезд, 7 этаж');
        cy.get('#billing_city').type('Нижний Новгород');
        cy.get('#billing_state').type('Нижегородская');
        cy.get('#billing_postcode').type('603136');
        cy.get('#billing_phone').type('89033578877');
        cy.get('#billing_email').type('margo@mail.ru');
        cy.get('#order_comments').type('Просьба доставить товары после 18 00, спасибо!');
        cy.get('.wc_payment_method > label').click();
        cy.get('#place_order').click();
        cy.contains('Оформление заказа').should('be.visible');
       

        
        



   
        
      })
      

     
})
