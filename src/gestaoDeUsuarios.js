const usuarios = [
  {
    id: 1,
    nome: "Wedney",
    email: "wedney.silva@pgats.com",
    senha: "123456",
    expirado: false
  },
  {
    id: 2,
    nome: "Moisés",
    email: "moises.silva@pgats.com",
    senha: "012345",
    expirado: true
  }
];

export function realizarLogin(email, senha) {
let usuario;

for (let i = 0; i < usuarios.length; i++) {
  if (usuarios[i].email == email) {
    usuario = usuarios[i];
    break;
  }
}

  if (!usuario) {
    throw new Error("Credenciais inválidas.");
  }

  if (usuario.senha != senha) {
    throw new Error("Credenciais inválidas.");
  }

  if (usuario.expirado == true) {
    return "A senha expirou, por favor, redefina sua senha.";
  }

  return "Login realizado com sucesso!";  
}