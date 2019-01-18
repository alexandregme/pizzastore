import React from 'react';
import Link from 'next/link';
import TotalCost from './totalcost';

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
                      <li
                        className="nav-item"
                        key={link.path+i}
                      >
                        <Link
                          href={link.path}

                        >
                            <a
                              className="nav-link"
                            >
                              {link.name}
                            </a>
                        </Link>
                      </li>
                    )
                 )}
                  <li className="nav-item mr-sm-2">
                    <TotalCost className="nav-link"/>
                  </li>
                </ul>
              </div>
            </nav>
        </header>
    </React.Fragment>
);

export default Header;
