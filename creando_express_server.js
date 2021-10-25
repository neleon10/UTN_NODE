

const express = require('express')
const app = express()
const hbs = require('hbs')//USAMOS HANDLEBARS pero podemos usar EJS o el que sea. 

//puerto //ATENCION! ver archivos .env
require ('dotenv').config();
const port =process.env.PORT;

app.listen(port, () => {
    console.log(`Escuchando ${port}`)
})

//handlebars / motor de plantilla.
app.set('view engine', 'hbs')

//partials o templates es lo mismo.
hbs.registerPartials(__dirname+ '/views/partials')

//carpeta de estaticos
app.use(express.static('public'))


// paginas DINAMICAS
app.get('/', (req, res) => {
    res.render('index',{
        nombre:'Carlos',
        titulo:'uso de Node'
    })
})
app.get('/generic', (req, res) => {
    res.render('generic',{nombre:'Carlos'})
})

app.get('/elements', (req, res) => {
    res.render('elements',{nombre:'Carlos'})
}) 


//error
app.get('*', (req, res) => {
    res.send('UPS! you did it again')
})


