import React, { Component } from 'react'
import {COWTRIAL_ABI, COWTRIAL_ADDRESS} from './config'
import Web3 from 'web3'
import App from './App.js'
import detectEthereumProvider from '@metamask/detect-provider';
import { thistle } from 'color-name';


class NFTFetcher extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>MY ASSETS:</h1>
            </div>
        )
    }
}
export default NFTFetcher;
