describe('Cypress Tests', () => {
    it('login_error', () => {
        cy.fixture('cypressTests').then(data => {
            cy.log('Переход на главную страницу')
            cy.visit(data.main_url)
            cy.wait(3000)
  
            cy.log('Нажатие на кнопку "Регистрация"')
            cy.get('[href="/registration"] > .button')
            .click()
  
            cy.log('Ввод логина для регистрации')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
            .type(data.registration_login_rus)

            cy.log('Проверка на ошибку')
            cy.get('.form-error > span')
            .should('exist')
        });
    });
  });