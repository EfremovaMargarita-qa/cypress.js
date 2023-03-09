
describe('Форма авторизации', function () {
    
    it('Верный логин и пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

        it('Логика восстановления пароля', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').click();
            cy.get('#mailForgot').type('efrmargarita88@yandex.ru');
            cy.get('#restoreEmailButton').click();
            cy.contains('Успешно отправили пароль на e-mail ').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })

         it('Негативный кейс авторизации', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('german@dolnikov.ru');
            cy.get('#pass').type('5555рост');
            cy.get('#loginButton').click();
            cy.contains('Такого логина или пароля нет').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
          })

          it('Негативный кейс авторизации2', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('german@dolnikof.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.contains('Такого логина или пароля нет').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
          })

          it('Негативный кейс валидации', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('germandolnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.contains('Нужно исправить проблему валидации').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
          })

          it('Приведение к строчным буквам', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('GerMan@Dolnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.contains('Авторизация прошла успешно').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            })




    })  



     