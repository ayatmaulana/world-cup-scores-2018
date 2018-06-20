import React from 'react'
import AppContext from './Context'
export default class Context extends React.Component<> {

        constructor(props){
                super(props)
                this.state = {

                        //match active
                        matchActive: {},
                        setMatchActive: async data => await this.setState({matchActive: data}),
                        destroyMatchActive: async () => await this.setState({matchActive: {}}),   

                        //
                        groupActive: "",
                        setGroupActive: async data => await this.setState({groupActive: data}),
                        destroyGroupActive: async () => await this.setState({groupActive: ""}),
                }
        }

        render(){
                
                return (
                        <AppContext.Provider value={this.state}>
                                {this.props.children}
                        </AppContext.Provider>
                )
        }

}