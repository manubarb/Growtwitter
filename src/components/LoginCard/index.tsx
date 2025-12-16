import { LoginForm } from '../LoginForm/index'
import { Wrapper, TextSection } from './styles'

export function LoginCard() {
  return (
    <>
      <Wrapper>
        <TextSection> 
          <h2>Growtwitter</h2>
          <small>Trabalho final do bloco intermediário</small>
          <p>O Growtwitter é a plataforma definitiva para todos os apaixonados por redes sociais que buscam uma experiência familiar e poderosa, semelhante ao Twitter, mas com um toque único. Seja parte desta comunidade que valoriza a liberdade de expressão, a conexão com pessoas de todo o mundo e a disseminação de ideias.</p>
        </TextSection>
        <div>
          <LoginForm />
        </div>
      </Wrapper>
    </>
  )
}
