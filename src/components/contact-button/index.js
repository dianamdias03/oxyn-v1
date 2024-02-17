import { WhatsAppOutlined } from '@ant-design/icons';
import './style.css'

export const ContactButton = ({color}) => {
    const className = `info-button ${color}-color`
    return (
        <>
            <div className={className}><WhatsAppOutlined style={{ fontSize: '15px', marginBottom: '-3px' }}/>ENTRE EM CONTATO</div>
        </>
      );
  };