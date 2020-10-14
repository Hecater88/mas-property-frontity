import React from 'react';
import {connect} from 'frontity';
import Link from './Link';

const Header = () => {
    return (
        <>
            <Link href="/">Inicio</Link>
            <Link href="/properties">Propiedades</Link>
            <Link href="/contact-form">Contact</Link>
        </>
    )
}

export default connect(Header);
