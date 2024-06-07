import React from 'react';
import PropTypes from 'prop-types';
import SeafetyWhite from '../../Assets/SeafetyWhite.svg'
import { Link } from "react-router-dom";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="login-modal-overlay" onClick={handleOverlayClick}>
      <div className="login-modal">
        <video className='background-video' autoPlay loop muted>
            <source src='https://s3-figma-videos-production-sig.figma.com/video/1359687156048822209/TEAM/40e7/ce17/-0839-4e9f-8419-b02ed16062d3?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WN7lna9algmALAzzXHPU-kKw4l2yYaLsegt2dA4ADAHBDETLbmtIbEb66t~FHtHTJtXhsxjt71BdDy4JeXsftSogaFjEItHLCBP7xuRZhL3bQihJakY7PEB4FdC8mSh54hYVI80xzIux57Sz8vPaGTvn6tNDS2OsGDVoqdalmDrf~84EzJb0Ay~JPHRtTbKdwACEyF8tc0VOj0jscu74xijsbEheZSHpQKvNTeV4sHqRXQucK3AIGImhyzPlnn4FT1FoVNkRxe36PKHrmBcMSiPpWQFsYwO6Q7Fk9GTesUpIrqg8ZUg16QydrTrCqBjZxf54Ma8mDnJll4qJZjBFPQ__' type='video/mp4' />
        </video>
        <div className='gradient-overlay'></div>
        <button className="close-button" onClick={onClose}>×</button>
        <div className='new-account'>
            <img src={SeafetyWhite} />
        <h2>Crie uma nova conta</h2>
        <h5>Já é membro? Entre.</h5>
        <form>
            <div className='all-login'>
        <div className='login123'>
            <div className='form-group'>
                <label></label>
                <input className='input-login'
                type="text" 
                name="nome" 
                placeholder='Nome' />
            </div>
            <div className='form-group'>
                <label></label>
                <input className='input-login'
                type="text" 
                name="sobrenome" 
                placeholder='Sobrenome' />
            </div>
          </div>
          <div className="form-group2">
            <label></label>
            <input className='input-login2' 
            type="email" 
            name="email" 
            placeholder='E-mail'/>
          </div>
          <div className="form-group2">
            <label></label>
            <input  className='input-login2'
            type="password" 
            name="password" 
            placeholder='Senha'/>
          </div>
          </div>
          <Link to="/Demo" onClick={onClose}>
            <button className="blue-button">Criar Conta</button>
            </Link>
        </form>
        <p>Isso é apenas um protótipo, essa funcionalidade não é usável.
        <br></br>Clique no botão “Criar Conta” para ir ao dashboard.</p>
        </div>
        </div>
    </div>
  );
};

LoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginModal;
