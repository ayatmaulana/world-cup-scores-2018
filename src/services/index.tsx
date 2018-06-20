import Axios from './axios.config'

export default {
        main: async () => (await Axios.get("/main")).data.data,
        group: async () => (await Axios.get("/group")).data.data,
        groupName: async(group) => (await Axios.get("/group", { params: { group } })).data.data
}