import React from 'react';

import './Planos.css'; 
import Coorp from '../../../../assets/FtCoorp.png';

const Planos = () => {
  return (
    <div className="planos-container-sobre">
      <h2>Planos</h2>
      <div className="cards-container-sobre">
        <div className="card-sobre">
          <div className='content-div-sobre'>
            <h3 className='title-blue'>Individual</h3>
            <div className='select-users'>
              <p>1 Usuário</p>
              <select className='select select-first'>
                <option>10 Vídeos R$15</option>
              </select>
            </div>
          </div>
            <button >Cadastrar</button>
        </div>

        <div className="card-sobre">
          <div className='content-div-sobre'>
            <h3 className='title-white'>Profissional - Times</h3>
            <div className='select-users'>
              <div>
                <p>1-10 Usuários</p>
                <select className='select'>
                  <option>Vídeos Ilimitados R$40</option>
                  <option>+10 Usuários R$20</option>
                </select>
              </div>
              <div>
                <p>1-10 Usuários</p>
                <select className='select'>
                  <option>Vídeos Ilimitados R$40</option>
                  <option>+10 Usuários R$20</option>
                </select>
              </div>
            </div>
          </div>
            <button >Cadastrar</button>
        </div>

        <div className="card-sobre">
            <h3 className='title-white'>Corporativo</h3>
          <div className='content-div-sobre'>
            <div className="image-placeholder-image">
              <img src={Coorp} alt="Corporativo" />
            </div>
          </div>
            <button >Entre Em Contato</button>
        </div>
      </div>
    </div>
  );
};

export default Planos;
