import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import collection from "./mongo.js";
import router from './routers/users.js';
const app = express();
const port = 5000;
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use("/", router);



app.get("/", (req, res) => {
    res.send("Hello from express!!!!!")
});

// app.all("*", (req, res) => res.send("That route does not exist"));

app.post("/", async (req, res) => {
    const { email, password } = req.body

    try {
        const check = await collection.findOne({ email: email })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
        }

    }
    catch (e) {
        res.json("fail")
    }

})



app.post("/signup", async (req, res) => {
    const { email, password } = req.body

    const data = {
        email: email,
        password: password
    }

    try {
        const check = await collection.findOne({ email: email })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch (e) {
        res.json("fail")
    }

})


app.listen(port, () => console.log(`Server is listening on port: http://localhost:${port}`));