import './FormContato.css'

function FormContato() {
    return (
      <section id="contact">
        <form>
          <label htmlFor="Nome">Nome:</label>
          <input type="text" id='nome'  />

          <label htmlFor="Email">Email:</label>
          <input type="email" id='email'  />

          <label htmlFor="Mensagem">Mensagem:</label>
          <textarea id='mensagem'  />

          <button type="submit">Enviar</button>
        </form>
      </section>
    );
  }
  
  export default FormContato;