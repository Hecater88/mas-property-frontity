import React, {useEffect} from 'react';
import Header from './components/Header';
import {connect} from 'frontity';
import Properties from './Pages/Properties';
import Pages from './Pages/Pages';



const Root = ({state, actions}) => {
    const data = state.source.get(state.router.link);

  

    return (
      <>
        <Header/>
        <hr/>
        {data.isFetching && <p>Cargando...</p>}
        {data.isHome && <p>Estamos en la Home</p>}
        {data.isPropertyArchive && <Properties />}
        {data.isPost && <div>Es un post</div>}
        {data.isPage && <Pages />}
        
      </>
    );
  };

export default connect(Root);