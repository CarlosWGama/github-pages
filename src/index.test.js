const login = require('./index')

describe('Teste de login', () => {

    it ('Login válido', () => {
        const retorno = login('teste11@teste.com', '123456');
        expect(retorno).toBeTruthy()
    })

    
    it ('Login inválido', () => {
        const retorno = login('teste11@teste.com', '123456');
        expect(retorno).toBeFalsy()
    })
})