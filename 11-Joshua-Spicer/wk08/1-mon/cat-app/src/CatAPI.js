import axios from 'axios';

const API_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'DEMO-API-KEY';

export const getRandomCatImage = async () => {
    try {
        const response = await axios.get(`${API_URL}/images/search`, {
            headers: {
                'x-api-key': API_KEY
            }
        });
        return response.data[0].url;
    } catch (error) {
        console.error(error);
    }
};
