import React from 'react';
import FontAwesome from 'react-fontawesome';
import{library,icon} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from "@fortawesome/free-brands-svg-icons/";
import {home} from "@fortawesome/free-brands-svg-icons/";
//import logo from './logo.png'
library.add(faTwitter);
//library.add(faHome);
export default () => (
    <footer>
        <a
            href='https://medium.com/p/862d59583105'
            title='Medium Article'
            className={'small-button medium'}
        >
            <FontAwesomeIcon icon={faTwitter}
                             size="3x"

            />
        </a>
        <a
            href='https://github.com/viazerd/twitter-help-desk'
            title='Github repo'
            className={'small-button github'}
        >
            <FontAwesomeIcon
                icon={'faTwitter'}
                size="10x"
            />
            <FontAwesome
                name={'github'}
            />
        </a>
    </footer>
);