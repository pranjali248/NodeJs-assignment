const express = require('express')
const app = express()
const port = 3000
const router = express.Router()
const bodyParser = require('body-parser')

app.use('/',router)

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

router.get('/',function(req,res){
    res.send('<h1>Hello World</h1>')
})

router.post('/post/:user',function(req,res){   
    var name = req.params.user;
    if(name <= 4) {
        return res.status(400).json({
            success : false,
            errors : error.array()
        })
    }
    res.status(200).json({
        success : true,
        message : 'Successful !!'
    })
    res.send(`Post Request for ${name}`)
    console.log(req.body)
})

app.listen(port,()=>{
    console.log(`Application is working at https://localhost:${port}`)
})