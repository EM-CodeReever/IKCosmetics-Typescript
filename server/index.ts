import express, {Application, Response, Request, query} from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from 'path';
import Routes from "../routes/api"
const history = require('connect-history-api-fallback');

const app:Application = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());

const corsOptions = {
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
app.use(cors(corsOptions)); 

app.use('/api', Routes.routes());


console.log(`Currently in ${process.env.NODE_ENV} mode`)

if (process.env.NODE_ENV === 'production') {
    app.use(history())
    app.use(express.static(path.join(__dirname, '/public/')));
    
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '/public/index.html'));
    })
}

app.listen(port, () => console.log(`Listening on port ${port}`));

app.route('/')
    .post((req:Request, res:Response) => {
        res.send('test');
    })
    .get((req:Request, res:Response) => {
        res.send(generateRandomCode());
    })

function generateRandomCode(){
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var result = ""
    var charactersLength = characters.length;

    for ( var i = 0; i < 5 ; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result.toUpperCase()
}