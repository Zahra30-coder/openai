const OpenAI =require("openai");

const {configuration} =require("../constants/api.constant");

console.log(configuration)

const openai = new OpenAI({apiKey:''});


exports.generateText = async (req, res) => {
    try {
      const {prompt}=req.body;
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: prompt }],
        model: "gpt-3.5-turbo",
      });
      res.json({ data: completion.choices[0].message });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error generating text');
    }
  };

  exports.generateImage = async (req, res) => {
    try {
      const {prompt}=req.body;
      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      });
  
      res.status(200).json({
        success: true,
        data: response.data,
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
  
      res.status(400).json({
        success: false,
        error: "The image could not be generated",
      });
    }
  };
  
  