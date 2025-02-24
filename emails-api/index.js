import express from 'express'
import path from 'path'
import sgMail from '@sendgrid/mail'

const app = express()

// Cambiar con variable de entorno VITE_VARNAME_
sgMail.setApiKey(process.env.SGKEY)

app.use(express.json())
app.use(express.static('template'))

app.get('/', (req, res) => {
    res.sendFile(`${path.resolve()}/index.html`)
    // const msg = {
    //     to: 'nicolas@mailinator.com',
    //     from: process.env.FROM,
    //     subject: 'Sending with SendGrid is Fun',
    //     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    // }
    // sgMail
    //     .send(msg)
    //     .then(() => {
    //     console.log('Email sent')
    // })
    // .catch((error) => {
    //  console.error(error)
    // })
});

app.post('/send', async (req,res) => {
   const { to, subject, html } = req.body
    
    const msg = {
    to, 
    from: process.env.FROM,
    subject,
    html
   }

   try {
    await sgMail.send(msg)
    res.sendStatus(204)
   } catch (e) {
    console.log(e)
    res.status(400)
   }
});

app.listen(3000, () => console.log('¡Ejecutando aplicación correctamente!'));