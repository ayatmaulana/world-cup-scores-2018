import Axios from 'axios'
import CONFIG from '../../config.json'

export default Axios.create({
        baseURL: CONFIG.BASE_URL,
        timeout: 10000,
})