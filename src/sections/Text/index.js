import { ContactButton } from '../../components/contact-button';
import './style.css'

export const Text = ({title, paragraphs, paragraphBold}) => {
    return (
        <div className="border background">
            <div className="page-container">
            <div className="paragraph-section">
                <h1>{title}</h1>
                {paragraphs?.map((element, index) => (
                    <p key={index}>{element}</p>
                ))}
                <b>{paragraphBold}</b>
                <br/>
                <div style={{paddingBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <ContactButton color={'white'}/>
                </div>
            </div>
            </div>
        </div>
      );
  };
  