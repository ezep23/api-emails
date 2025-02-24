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
`;

(function runApp(){
  const mailerform = document.querySelector(' #mailer-form ')
  mailerform.onsubmit = async (e) => {
      e.preventDefault()

      const error = document.querySelector(' #error ')
      error.innerHTML = ''
      
      const formData = new FormData(mailerform) 
      const data = Object.fromEntries(formData.entries())
      const response = await fetch('http://localhost:3000/send', { 
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          }
      })

    const responseText = await response.text()
    if(response.status > 300) {
          error.innerHTML = responseText
          return
      }

    mailerform.reset()
    alert('correo enviado con exito')
  }
})();