import React from 'react';
import {connect, styled} from 'frontity';
import PropertyList from '../components/PropertyList';
import tw from "twin.macro";

const Button = styled("button")`
  ${tw`font-mono text-lg bg-blue-300`};
`;


const Properties = () => {
   
    return (
        <>
            <h2>Properties</h2>
            <Button>Pepe</Button>
            <PropertyList />
        </>
    )
}
export default connect(Properties);