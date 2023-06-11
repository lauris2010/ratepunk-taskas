import axios from 'axios';

const saveEmail = async (email: string) => {
  try {
    const response = await axios({
      method: 'put',
      url: `https://api.jsonbin.io/v3/b/${process.env.BIN_ID}`,
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': process.env.API_KEY,
      },
      data: {
        email: email,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to save email');
  }
};

export default { saveEmail };