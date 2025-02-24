import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="app-container">
    <h1>Mailer</h1>
      <form id="mailer-form">
        <div>
            <label>Para:</label>
            <input name='to' />
        </div>
        <div>  
            <label>Asunto:</label>
            <input name='subject' />      
        </div>
        <div>
            <label>Mensaje:</label>
            <textarea name='html'></textarea>
         </div>
         <button type="submit">Enviar</button>
      </form>
    <div id='error'></div>
  </div>
`
