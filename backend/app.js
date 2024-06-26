import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import axios from "axios";

const router = express.Router();
const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

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
      res.json({message: "Human 👨 👩"});
    } else {
      res.json({message: "Robot 🤖"});
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