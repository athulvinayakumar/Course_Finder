// import axios
import axios from "axios";

export const commonAPI = async (httprequest, url, reqbody, reqheader) => {
    // configuration
    const reqConfig = {
        method: httprequest,
        url: url,
        data: reqbody,
        headers: reqheader ? reqheader : { "Content-Type":"application/json"} 
    }
    return await axios(reqConfig).then((results) => {
        return results
    }).catch((err) => {
        return err
    })
}