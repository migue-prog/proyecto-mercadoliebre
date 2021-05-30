const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public' );
app.use( public.static (publicPath) );

app.listen(3000, () => {
    console.log("servidor corriendo en el puerto 3000");
});