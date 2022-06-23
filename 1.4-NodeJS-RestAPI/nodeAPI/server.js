const dbConnection = require('./database/connection.js')
const dotEnv = require('dotenv');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const swaggerUi = require('swagger-ui-express');
const express = require('express');
const cors = require('cors');
const app = express();

dotEnv.config();

//DB connectivity
dbConnection();

const PORT = process.env.PORT || 8080;

app.use(cors());
//  request payload middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api/v1/product', require('./routes/productRoutes.js'));
app.use('/api/v1/user', require('./routes/userRoutes.js'));

//  API Documentation
if(process.env.NODE_ENV != 'production'){
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

app.get('/', (req,res,next) =>{
    res.send('Welcome =]')
})

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
})

//  error handler middlewar
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.send({
        status : 500,
        mesagge : err.message,
        body: {},
    })
})