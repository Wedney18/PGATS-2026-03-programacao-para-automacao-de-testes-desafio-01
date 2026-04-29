import { realizarLogin } from '../src/gestaoDeUsuarios.js';
import assert from 'node:assert';

describe('Testes de informações sobre usuários de um site', () => {

  it('Validar que as credenciais de login são válidas, ou seja, login realizado com sucesso', () => {
    //Act
    const retornoDaFuncaoDeLogin = realizarLogin('wedney.silva@pgats.com', '123456');
    assert.equal(retornoDaFuncaoDeLogin, 'Login realizado com sucesso!');
  });

  it('Validar que as credenciais de login expiraram, ou seja, a senha expirou. Por favor, redefina sua senha', () => {
    //Act
    const retornoDaFuncaoDeLogin = realizarLogin('moises.silva@pgats.com', '012345');
    assert.equal(retornoDaFuncaoDeLogin, 'A senha expirou, por favor, redefina sua senha.');
  });

  it('Validar que as credenciais de login são inválidas, ou seja, usuário não existe', () => {
    // Act & Assert
    assert.throws(
      function (){  realizarLogin('junior@pgats.com', '123456')},
      {
        message: 'Credenciais inválidas.'
      }
    );
  });

  it('Validar que as credenciais de login são inválidas, ou seja, a senha digitada está incorreta', () => {
    // Act & Assert
    assert.throws(
      function (){  realizarLogin('wedney.silva@pgats.com', '012345')},
      {
      message: 'Credenciais inválidas.'
      }
    );
  });
});