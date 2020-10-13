import React from 'react';
import {connect} from 'frontity';
import Pagination from './Pagination';

const PropertyList = ({state}) => {

    const data = state.source.get(state.router.link);
    console.log(data);
    
    <h3>Properties avaliables {data.items.length}</h3>
    return (
        <>
            {data.items.map(({id}) => {
                return(
                    <div key={id}>
                        <p>Id property: {id}</p>
                       
                    </div>
                )
            })}
            <Pagination />
        </>
    )
}
export default connect(PropertyList);
