import { ContactButton } from '../../components/contact-button';
import './style.css'

export const TextImage = ({subtitle, title, paragraphs, paragraphBold, image, altImage, imageRightSide}) => {
    return (
        <div className="border">
            <div className="page-container">
            {!imageRightSide && 
                <div className="image-section">
                    {/* Substitua 'path-to-your-image.png' pelo caminho correto da sua imagem */}
                    <img src={image} alt={altImage} />
                </div>
            }
            <div className="text-section">
                <h2 className='subtitle'>{subtitle}</h2>
                <h1>{title}</h1>
                {paragraphs?.map((element, index) => (
                    <p key={index}>{element}</p>
                ))}
                <b>{paragraphBold}</b>
                <br/>
                <div className='button-section'>
                    <ContactButton color={'blue'}/>
                </div>
            </div>
            {imageRightSide &&
                <div className="image-section">
                    {/* Substitua 'path-to-your-image.png' pelo caminho correto da sua imagem */}
                    <img src={image} alt={altImage} />
                </div>
            }
            </div>
        </div>
      );
  };
  