import React, { Fragment } from "react";

import Image from "./Image";
import HeaderCartButton from "./HeaderCartButton";

import styles from './Header.module.css';

import backgroundImaga from '../../Assets/background.jpg';

const Header = (props) => {
    return (
      <Fragment>
        <header className={styles.header }>
            <h1>TechTrove</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <Image>
          <img
            src={backgroundImaga}
            alt="Discover, Shop, and Unleash Your Tech Potential with TechTrove - Your Ultimate Destination for Computer Parts and Accessories"
          />
        </Image>
      </Fragment>
    );
};

export default Header;