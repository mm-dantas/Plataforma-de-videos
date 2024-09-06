import React from 'react';

import './Planos.css'; 
// import Coorp from '../../assets/FtCoorp.png';

const Planos = () => {
  return (
    <div className="planos-container">
      <h2>Planos</h2>
      <div className="cards-container">
        <div className="card">
          <h3>Individual</h3>
          <p>1 Usuário</p>
          <select>
            <option>10 Vídeos R$15</option>
          </select>
          <button>Cadastrar</button>
        </div>

        <div className="card">
          <h3>Profissional - Times</h3>
          <p>1-10 Usuários</p>
          <select>
            <option>Vídeos Ilimitados R$40</option>
            <option>+10 Usuários R$20</option>
          </select>
          <button>Cadastrar</button>
        </div>

        <div className="card corporativo">
          <h3>Corporativo</h3>
          <div className="image-placeholder">
            {/* <img src={Coorp} alt="Corporativo" /> */}
          </div>
          <button>Entre Em Contato</button>
        </div>
      </div>
    </div>
  );
};

export default Planos;
