import { Container, Profile } from "./styles";

import { Input } from '../Input';

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input type="text" placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <strong>Gabriel Oliveira</strong>
          <a href="#">sair</a>
        </div>
        <img src="https://github.com/gabrielodeveloper.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}
