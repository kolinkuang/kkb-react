import React, {Component} from 'react';
import {Context, UserContext} from '../Context';
import ContextTypePage from './ContextTypePage';
import UseContextPage from './UseContextPage';

export default class ContextPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: {themeColor: 'red'},
            user: {name: 'xiaoMing'}
        };
    }

    render() {
        const {theme, user} = this.state;
        return (
            <div>
                <h3>ContextPage</h3>
                <Context.Provider value={theme}>
                    <UserContext.Provider value={user}></UserContext.Provider>
                    <ContextTypePage />
                    <UseContextPage />
                </Context.Provider>
            </div>
        );
    }

}

// 如何使用 context
// step 1: 创建 context 对象
// step 2: 创建 provider，传递 value
// step 3：子组件消费 value，有三种途径
//  contextType, useContext

// 区别
// contextType 只能用在类组件，只能订阅单一的 context 来源
// userContext 只能用在函数组件或自定义 hook
