import { WhatsAppOutlined } from '@ant-design/icons';
import './style.css'

export const ContactButton = ({color}) => {
    const className = `info-button ${color}-color`
    return (
        <>
            <button onClick={() => {
               window.open('https://wa.me/5548991555418', '_blank', 'noopener,noreferrer') 
            }} className={className}><WhatsAppOutlined style={{ fontSize: '15px', marginBottom: '-3px' }}/>ENTRE EM CONTATO</button>
        </>
      );
  };