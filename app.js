const express=require('express');
const app= express();
app.use(express.json());

app.use(function(req,res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","POST"); 
    res.header("Access-Control-Allow-Headers","Content-Type");
    next();
});


app.post(
    '/api/sumar',
    (req, res)=>{
        const {numero1, numero2}= req.body;
        const resultado=parseFloat(numero1)+parseFloat(numero2);        
        res.json(resultado);
    }
);

app.post(
    '/api/restar',
    (req, res)=>{
        const {numero1, numero2}= req.body;
        const resultado=parseFloat(numero1)-parseFloat(numero2);        
        res.json(resultado);
    }
);

app.post(
    '/api/multiplicar',
    (req, res)=>{
        const {numero1, numero2}= req.body;
        const resultado=parseFloat(numero1)*parseFloat(numero2);        
        res.json(resultado);
    }
);

app.post(
    '/api/dividir',
    (req,res)=>{
        let resultado;
        
        try{
            const {numero1, numero2}= req.body;           
            resultado=parseFloat(numero1)/parseFloat(numero2);   

        }catch(error){
            resultado=error;
        }
        
        res.json(resultado);
    }
)


app.listen(
    3001,
    ()=>{
      console.log("El puerto 3001 está listo para usarse");
    }
);


