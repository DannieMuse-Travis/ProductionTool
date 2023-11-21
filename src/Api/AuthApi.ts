import  axios from  "axios"

const Url:string =  "http://localhost:2277/api/v1"

export const createAccount = async(data:any)=>{
    try {
        return await axios.post(`${Url}/createUser`,data).then((res:any)=>{
            return res.data;
        })
    } catch (error) {
        console.log(error)
    }
}