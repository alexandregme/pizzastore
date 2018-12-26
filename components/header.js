import React from 'react';
import Link from 'next/link';

const LINKS = [
    {
        name:'Home',
        path:'/'
    },{
        name:'Cart',
        path:'/cart'
    }
];

const Header = () => (
    <React.Fragment>
        <header>
            <nav>
                {LINKS.map((link,i)=>
                  (
                    <Link
                      key={link.path+i}
                      href={link.path}
                    >
                        <a>{link.name}</a>
                    </Link>
                  )
                )}
            </nav>
        </header>
    </React.Fragment>
);

export default Header;
