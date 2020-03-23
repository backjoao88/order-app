/*
*   MIT License
*   Copyright (c) 2020 João Paulo Back
*
*/

const app = require('./app')

function initServer(){
    app.listen(process.env.PORT, () => console.log(`Server is listening on port: " + ${process.env.PORT}`))
}

initServer();
