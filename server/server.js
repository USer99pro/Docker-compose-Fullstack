const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGOOSE_URI)
  .then(()=>console.log("Conneted to MongoDB Compass"))
  .catch((err)=>console.log(err))


app.get('/', (req, res) => {
    res.json({message: "Welcome to the Docker Class"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port 127.0.0.1:${PORT}`);
});
