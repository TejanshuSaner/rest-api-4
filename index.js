const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require("dotenv").config();
const PORT = process.env.PORT || 3050;
const mongoose = require('mongoose');
const mongo_Uri = process.env.MONGO_URL;
const Product = require('./model/productmodel');
const cors = require('cors');
const product = require('./model/productmodel');

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rest API

// const ConnectToMongo = async () => {
//     try {
//         await mongoose.connect(mongo_Uri).then(() => {
//             console.log("Connected to DB");
//             app.listen(PORT, () => {
//                 console.log(`Server is running on ${PORT}`);
//             });
//         });
//     } catch (error) {
//         console.log("Error connecting to DB", error);
//     }
// };


const ConnectToMongo = async () => {
    try {
        await mongoose.connect(mongo_Uri).then(() => {
            console.log("connected to DB");
            app.listen(PORT, () => {
                console.log(`runing on ${PORT}`);
            });

        });

    } catch (error) {
        console.log("Error in Connecting database", error);

    }
}


ConnectToMongo();
//create product routing 








// app.post("/products", async (req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product)

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: error.message });
//     }
// });  




app.post("/products", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
});


app.get("/products", async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }

})

app.get("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findOne({ _id: id });
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json(error)

    }
})

