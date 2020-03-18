 const express = require('express');

 const app =express();

//set static folder
app.use(express.static(path.join(__dirname,'client')));

 const PORT = process.env.Port || 5000;

 app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


 