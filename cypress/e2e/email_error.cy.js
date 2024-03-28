describe('Cypress Tests', () => {
    it('email_error', () => {
        cy.fixture('cypressTests').then(data => {
            cy.log('Переход на главную страницу')
            cy.visit(data.main_url)
            cy.wait(3000)
  
            cy.log('Нажатие на кнопку "Регистрация"')
            cy.get('[href="/registration"] > .button')
            .click()
  
            cy.log('Ввод логина для регистрации')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
            .type(data.registration_login)
  
            cy.log('Ввод электронной почты')
            cy.get('input[class="form-input--email form-input"]')
            .type(data.email)
            
            cy.log('Ввод пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
            .type(data.registration_password)
  
            cy.log('Повторный ввод пароля')
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
            .type(data.registration_password)
  
            cy.log('Нажатие на кнопку "Далее"')
            cy.get(':nth-child(4) > .button')
            .click()

            cy.log('Проверка на ошибку')
            cy.get('.form-error > span')
            .should('exist')
        });
    });
  });