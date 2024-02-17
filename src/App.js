import './App.css';
import { TextImage } from './sections/TextImage';
import { Header } from './sections/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <TextImage 
        subtitle={'AGÊNCIA DE MARKETING'} 
        title={'São muitos os desafios dos primeiros passos na carreira de psicologia clínica'}
        paragraphs={['Imagine dedicar-se totalmente aos seus pacientes, enquanto a Oxyn Pages conecta você a pessoas que precisam de atendimento. Você pode dedicar-se em se aprimorar no atendimento clinico e nós cuidamos do resto.']} 
        paragraphBold={'Clique no botão abaixo e descubra como podemos te ajudar.'}
        image={'/about.png'}
        altImage={'Homem olhando para o celular com notificações'}/>
      <TextImage 
        subtitle={'NÃO DEIXE DINHEIRO NA MESA'} 
        title={'Sabemos que o inicio da prática clinica traz vários desafios e dentre eles, a está a questão financeira e a dificuldade em conseguir novos clientes.'}
        paragraphs={[
          'Pensando nisso a Oxyn Pages trabalha com planos de pagamento facilitado para quem está iniciando. O dinheiro investido retorna dentro do mesmo mês, sem comprometer suas finanças pessoais.'
          ,'Com os clientes que vamos ajudar você a conseguir, sua prática clinica não apenas sobreviverá, mas prosperará. Você terá a liberdade de focar no seu desenvolvimento profissional, expandir suas habilidades e, o mais importante, transformar a vida de seus pacientes.'
        ]}
        paragraphBold={'Está pronta para deixar as incertezas para trás e dar um grande passo em direção ao sucesso na sua carreira? Clique no botão abaixo e vamos juntos construir o futuro próspero que você e sua prática clínica merecem.'}
        image={'/finances.png'}
        altImage={'Planta simbolizando economia'}/>
    </div>
  );
}

export default App;


