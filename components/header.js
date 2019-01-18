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
            <nav className="navbar navbar-expand-lg navbar-light bg-warning">
              <div className="container">
                <ul className=" nav navbar-nav flex-row">
                  {LINKS.map((link,i)=>
                    (
                      <Link
                        href={link.path}
                        key={link.path+i}
                      >
                          <a
                            className="nav-item nav-link"
                          >
                            {link.name}
                          </a>
                      </Link>
                    )
                  )}
                </ul>
              </div>
            </nav>
        </header>
    </React.Fragment>
);

export default Header;
