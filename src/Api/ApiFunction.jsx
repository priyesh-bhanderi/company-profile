import axios from 'axios';

export const apiFunctions = () => {

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const apiGet = async (url) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            throw error;
        } finally {
            await delay(2000);
        }
    };

    return { apiGet };
};