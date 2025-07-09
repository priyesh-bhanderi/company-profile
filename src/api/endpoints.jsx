const baseURL = import.meta.env.VITE_APP_BASEURL;

const API = {
    getProjectList: `${baseURL}/all/priyesh-bhautik`,
    addProject: `${baseURL}/categories/add`,
};

export default API;
