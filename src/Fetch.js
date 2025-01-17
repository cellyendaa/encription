import axios from "axios";

export const Fetch = () => {
    const API = axios.create({
        baseURL: `http://localhost:3000/api/`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    });

    const postFile = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
    
        try {
            const response = await API.post('encrypt', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error uploading file:', error);
            throw error;
        }
    };

    const encriptionFile = (file) => {
        return API.post('url', file)
    }

    const deskripFile = (file) => {
        return API.post('url', file)
    }

    const downloadFile = (file) => {
        return API.get('url', file)
    }

    const getListEncriptionFile = (file) => {
        return API.get('url', file)
    }

    const getListDecriptionFile = (file) => {
        return API.get('url', file)
    }



    return {
        postFile,
        encriptionFile,
        deskripFile,
        downloadFile,
        getListEncriptionFile,
        getListDecriptionFile
    }
}