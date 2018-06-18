import Axios from 'axios'
import Collect from 'collect.js'

export default const GroupData = async (groupName: string) => {
        try {
                let data = await Axios("https://fifa-2018-apis.herokuapp.com/fifa/grouptable")
                let filter = Collect(data.data)

                return filter.where("title", groupName)
        } catch(e){
                throw new Error(e)
        }
}