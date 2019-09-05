import React from 'react';
import Aux from '../Hoc/Auxx';
import styled from 'styled-components';

const Main = styled.main`
    margin-top: 16px;
`

const layout = (props: any) => (
    <Aux>
        <div>Toolbar Sidedrawer Backdrawere</div>
        <Main>{props.children}</Main>
    </Aux>
);

export default layout;