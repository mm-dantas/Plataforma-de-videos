import './FormContato.css'

function FormContato() {
    return (
      <section id="contact">
        <form className='form_Form'>
          <div className="label-input-wrapper">
            <label htmlFor="Nome">Nome:</label>
            <input type="text" id='nome' />
          </div>

          <div className="label-input-wrapper">
            <label htmlFor="Email">Email:</label>
            <input type="email" id='email' />
          </div>

          <label htmlFor="Mensagem">Mensagem:</label>
          <textarea id='mensagem' />

          <div className="button-wrapper">
            <button className='botao_Form' type="submit">Enviar</button>
          </div>
        </form>
      </section>
    );
  }

  export default FormContato;
