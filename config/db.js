require("dotenv").config();
const mongoose = require("mongoose");
//cyKyRAU8hu8P8FBI
mongoose
  .connect(
    "mongodb+srv://RahulsT:cyKyRAU8hu8P8FBI@cluster0.8soab.mongodb.net/Stocks?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => console.log(err));
