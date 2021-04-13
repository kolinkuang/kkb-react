import React, {Component} from 'react';
import {Context} from '../Context';

export default class ContextTypePage extends Component {
    static contextType = Context;
    // static contextType = UserContext;

    render() {
        const {themeColor} = this.context;
        console.log('contextType', this.context);
        return (
            <div>
                <h3 className={themeColor}>ContextTypePage</h3>
            </div>
        );
    }

}
