const express=require('express');
const openAiRoute=require("./routes/openAi.route");
require('dotenv').config()
const cors=require("cors");

const app=express();
// echo $OPENAI_API_KEY

app.use(express.json())
app.use(cors())
app.use("/openAi", openAiRoute);

const PORT=process.env.PORT || 4000;

app.listen(PORT, ()=>{
  console.log('listening on port',)
})



