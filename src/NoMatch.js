import React, { Component } from 'react';
import { Result, Button } from 'antd';

class NoMatch extends Component {

    render() { 
        return (
            <div>
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Button type="primary" href='/'>Back Home</Button>}
                />
            </div>
        );
    }
}
 
export default NoMatch;




    
