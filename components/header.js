import React from 'react';
import Link from 'next/link';
import SummaryCart from './summary-cart';
import { LINKS } from "../__mocks__";

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
                              className="nav-link navbar-brand"
                            >
                              {link.name}
                            </a>
                        </Link>
                      </li>
                    )
                 )}
                  <li className="nav-item header-summary">
                    <SummaryCart className="nav-link navbar-brand"/>
                  </li>
                </ul>
              </div>
            </nav>
        </header>
    </React.Fragment>
);

export default Header;
