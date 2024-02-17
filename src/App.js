import './App.css';
import { TextImage } from './sections/TextImage';
import { Header } from './sections/Header';
import { Text } from './sections/Text';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <TextImage 
        subtitle={'AGÊNCIA DE MARKETING'} 
        title={'São muitos os desafios dos primeiros passos na carreira de psicologia clínica'}
        paragraphs={['Imagine dedicar-se totalmente aos seus pacientes, enquanto a Oxyn Pages conecta você a pessoas que precisam de atendimento. Você pode dedicar-se em se aprimorar no atendimento clinico e nós cuidamos do resto.']} 
        paragraphBold={'Clique no botão abaixo e descubra como podemos te ajudar.'}
        image={'/about.webp'}
        altImage={'Homem olhando para o celular com notificações'}
        imageRightSide={true}
      />
      <TextImage 
        subtitle={'NÃO DEIXE DINHEIRO NA MESA'} 
        title={'Sabemos que o inicio da prática clinica traz vários desafios e dentre eles, a está a questão financeira e a dificuldade em conseguir novos clientes.'}
        paragraphs={[
          'Pensando nisso a Oxyn Pages trabalha com planos de pagamento facilitado para quem está iniciando. O dinheiro investido retorna dentro do mesmo mês, sem comprometer suas finanças pessoais.'
          ,'Com os clientes que vamos ajudar você a conseguir, sua prática clinica não apenas sobreviverá, mas prosperará. Você terá a liberdade de focar no seu desenvolvimento profissional, expandir suas habilidades e, o mais importante, transformar a vida de seus pacientes.'
        ]}
        paragraphBold={'Está pronta para deixar as incertezas para trás e dar um grande passo em direção ao sucesso na sua carreira? Clique no botão abaixo e vamos juntos construir o futuro próspero que você e sua prática clínica merecem.'}
        image={'/finances.webp'}
        altImage={'Planta simbolizando economia'}
        imageRightSide={true}
      />
      <Text title={'Juntos, vamos transformar desafios em oportunidades.'} paragraphs={['Descubra como a Oxyn Pages pode ajudar você a se conectar com aqueles que estão procurando exatamente o que você tem a oferecer.']} background={'blue'}/>
      <TextImage 
        title={'Sabemos que cada pessoa tem suas próprias necessidades e preocupações'}
        paragraphs={[
          'Especialmente quando se trata de finanças e da construção de sua clientela. Queremos te ajudar com isso.'
          ,'Com os clientes que vamos ajudar você a conseguir, sua prática clinica não apenas sobreviverá, mas prosperará. Você terá a liberdade de focar no seu desenvolvimento profissional, expandir suas habilidades e, o mais importante, transformar a vida de seus pacientes.'
          ,'Sabemos que cada pessoa tem suas próprias necessidades e preocupações, especialmente quando se trata de finanças e da construção de sua clientela. Queremos te ajudar com isso.'
        ]}
        paragraphBold={'Clique no botão abaixo, vamos nos conhecer e resolver todas as duvidas'}
        image={'/therapy.webp'}
        altImage={'Planta simbolizando economia'}
        imageRightSide={false}
      />
      <Text title={'Você só paga após seu site e estrutura de marketing estiver funcionando'} paragraphs={['Caso não goste do serviço, você pode cancelar dentro de 30 e devolveremos o seu dinheiro.']} background={'grey'}/>
      <Footer/>
    </div>
  );
}

export default App;


