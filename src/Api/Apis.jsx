const baseURL = import.meta.env.VITE_APP_BASEURL;

const API = {
    getProjectList: `${baseURL}/categories/list`,
    addProject: `${baseURL}/categories/add`
};

export default API;
