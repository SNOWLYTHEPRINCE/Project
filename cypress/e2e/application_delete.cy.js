describe('Cypress Tests', () => {
    it('login_successful', () => {
        cy.fixture('cypressTests').then(data => {
            cy.log('Переход на главную страницу')
            cy.visit(data.main_url)
            cy.wait(3000)
  
            cy.log('Нажатие на кнопку "Авторизация"')
            cy.get('[href="/login"] > .button')
            .click()
  
            cy.log('Ввод логина для авторизации')
            cy.get('.form-input--text')
            .type(data.login)
            
            cy.log('Ввод пароля')
            cy.get('.form-input--password')
            .type(data.registration_password)
            cy.wait(1000)
  
            cy.log('Нажатие на кнопку "Войти"')
            cy.get('.form__buttons > :nth-child(3)')
            .click()

            cy.log('Нажатие на кнопку "Заявки"')
            cy.get(':nth-child(3) > .menu-item__item-name')
            .click()

            cy.log('Нажатие на кнопку "Удалить"')
            cy.get('.buttons > .button')
            .click()
        });
    });
  });