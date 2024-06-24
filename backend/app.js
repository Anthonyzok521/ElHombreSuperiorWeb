import express from 'express'
import("dotenv").config();
const router = express.Router();
const app = express();
const cors = require("cors");
const axios = require("axios");
const port = process.env.PORT || 3000;

//enabling cors
app.use(cors());

//Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//add router in express app
app.use("/", router);

//POST route
router.post("/verify", async (req, res) => {

  ////Destructuring response token and input field value from request body
  const { token } = req.body;

  try {
    // Sending secret key and response token to Google Recaptcha API for authentication.
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_RECAPTCHA_KEY}&response=${token}`
    );

    // Check response status and send back to the client-side
    if (response.data.success) {
      res.send("Human 👨 👩");
    } else {
      res.send("Robot 🤖");
    }
  } catch (error) {
    // Handle any errors that occur during the reCAPTCHA verification process
    console.error(error);
    res.status(500).send("Error verifying reCAPTCHA");
   }
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});