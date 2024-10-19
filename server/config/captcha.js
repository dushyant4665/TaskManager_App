const axios = require('axios');


const verifyCaptcha = async (req, res, next) => {
  const { captchaToken } = req.body;
  const secretKey = process.env.HCAPTCHA_SECRET_KEY; 

  if (!captchaToken) {
    return res.status(400).json({ message: 'CAPTCHA token is missing.' });
  }

  try {
    const response = await axios.post(`https://hcaptcha.com/siteverify`, null, {
      params: {
        secret: secretKey,
        response: captchaToken,
      },
    });

    if (response.data.success) {
      next(); 
    } else {
      return res.status(400).json({ message: 'CAPTCHA verification failed.' });
    }
  } catch (error) {
    console.error('Error verifying CAPTCHA:', error);
    return res.status(500).json({ message: 'Error verifying CAPTCHA.' });
  }
};

module.exports = verifyCaptcha;
