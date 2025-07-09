import axios from 'axios';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const apiGet = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    } finally {
        await delay(1000);
    }
};

const apiPost = async (url, payload) => {
    try {
        const response = await axios.post(url, payload);
        return response.data;
    } catch (error) {
        throw error;
    } finally {
        await delay(1000);
    }
};

export { apiGet, apiPost };