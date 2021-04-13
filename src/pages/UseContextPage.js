import React from 'react';
import {Context} from '../Context';

export default function UseContextPage(props) {
    const theme = React.useContext(Context);
    // const user = React.useContext(UserContext);

    return (
        <div>
            <h3 className={theme.themeColor}>UseContextPage</h3>
            {/*<p>{user.name}</p>*/}
        </div>
    )
}
