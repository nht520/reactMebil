import React, {Component, Fragment} from "react";
import { SettingWropr } from "../style";
class Setting extends Component {
    constructor(props){
        super(props);
        this.state=({
            title:"5252000"
        })
    }
    render(){
        return(
            <Fragment>
                <SettingWropr>
                    <ul>
                        <li>
                            111111
                        </li>
                    </ul>

                </SettingWropr>
            </Fragment>
        )
    }

}
export default Setting;
