import axios from "axios";


const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/'
})

export const get = async (path, opitions = {}) => { // bât đồng bộ path~user/... options~param
    const response = await request.get(path, opitions) // chờ request.get()
    return response.data
}

export default request;