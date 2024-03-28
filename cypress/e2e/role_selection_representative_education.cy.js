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

            cy.log('Нажатие на кнопку "Выбрать роль"')
            cy.get('.page-nav__role-block > .button')
            .click()

            cy.log('Нажатие на кнопку выбора роли аккаунта')
            cy.get('.select-role-form > :nth-child(2)')
            .click()

            cy.get('.variants-company > :nth-child(1)')
            .click()

            cy.log('Ввод образовательного учреждения')
            cy.get('div.search-input__field > .form-input--text')
            .type(data.educational_institution)

            cy.get('.search-input__item')
            .click()
            cy.wait(1000)

            cy.log('Нажатие на кнопку "Выбрать ОУ"')
            cy.get('.choose-company > .button')
            .click()
        });
    });
  });