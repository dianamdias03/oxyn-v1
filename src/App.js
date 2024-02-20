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
        subtitle={'MARKETING PARA PSICOLOGO RECEM FORMADO'} 
        title={'Transforme Sua Formação em Sucesso: Marketing para Psicólogos Clínicos que Estão Começando!'}
        paragraphs={['Entendemos os desafios de dar os primeiros passos na sua carreira clínica e estamos aqui para simplificar sua jornada. Com estratégias de marketing digital feitas sob medida, você pode focar no que realmente importa: seus pacientes.', 
        'Você não conhecer marketing não é problema. Nós cuidamos de tudo para que você apareça na primeira página do Google quando alguém buscar por atendimento clínico em psicologia.',
        'Tenha um site que reflita sua profissionalidade, com fotos e especialidades que destacam seus serviços, e se torne a escolha preferida de quem busca ajuda.']} 
        paragraphBold={'Transforme Dúvidas em Ação: Entre em contato agora mesmo!'}
        image={'/about.webp'}
        altImage={'Homem olhando para o celular com notificações'}
        imageRightSide={true}
      />
      <TextImage 
        subtitle={'TRANSFORME SUA PRESENÇA DIGITAL E ATRAIA MAIS PACIENTES!'} 
        title={'Conquiste Seu Espaço: Marketing na Internet Ajustado para o Seu Momento Profissional!'}
        paragraphs={[
          'Imagine abrir seu WhatsApp todos os dias com novas mensagens de potenciais pacientes. Esse é o poder do marketing digital acessível e eficaz. Clique agora e dê o primeiro passo para transformar sua formação em um sucesso palpável.',
          'Elimine as barreiras geográficas e amplie seu alcance. Com nosso suporte, você pode oferecer atendimento online e conectar-se com pacientes de todas as regiões do país, maximizando sua visibilidade e oportunidades de crescimento.'
        ]}
        paragraphBold={'Deixe as incertezas de lado e embarque em uma jornada rumo ao sucesso. Junte-se a nós e construa o futuro brilhante que você merece.'}
        image={'/finances.webp'}
        altImage={'Planta simbolizando economia'}
        imageRightSide={true}
      />
      <Text title={'Juntos, vamos transformar desafios em oportunidades.'} paragraphs={['Descubra como a Oxyn Pages pode ajudar você a se conectar com aqueles que estão procurando exatamente o que você tem a oferecer.']} background={'blue'}/>
      <TextImage 
        title={'Como funciona:'}
        paragraphs={[
          'Ao clicar no botão "ENTRE EM CONTATO", você pode sanar qualquer dúvida via Whataspp, usado texto ou audio ou ainda combinar uma conversa de tira-dúvidas.',
          'Importante: Você só paga após seu site e estrutura de marketing estiver funcionando. Caso não goste do serviço, você pode cancelar dentro de 30 e devolveremos o seu dinheiro.'
        ]}
        paragraphBold={'Clique no botão abaixo, vamos nos conhecer e resolver todas as duvidas'}
        image={'/therapy.webp'}
        altImage={'Planta simbolizando economia'}
        imageRightSide={false}
      />
      <Footer/>
    </div>
  );
}

export default App;


