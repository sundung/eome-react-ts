import React from 'react';

import { Button, Flex } from 'antd';
import Test from  './test.tsx'
import Test1  from "@/views/Test1.tsx";
const App: React.FC = () => (

    <>
            <Flex gap="small" wrap="wrap">
                    <Button type="primary">Primary Button</Button>
                    <Button>Default Button</Button>
                    <Button type="dashed">Dashed Button</Button>
                    <Button type="text">Text Button</Button>
                    <Button type="link">Link Button</Button>
            </Flex>
            <Test></Test>
        <Test1></Test1>
    </>
);

export default App;
