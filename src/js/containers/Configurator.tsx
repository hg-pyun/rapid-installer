import React, {Component} from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript.js';
import '../../scss/configurator.scss';

interface ConfigerProps {
}

interface ConfigerState {
}

class Configurator extends Component<ConfigerProps, ConfigerState> {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const editor = CodeMirror.fromTextArea(document.getElementById("code"), {
            lineNumbers: true,
            styleActiveLine: true,
            matchBrackets: true,
            theme: 'darcula',
            mode: {name: "javascript", json: true}
        });
    }

    render() {
        return (
            <div className={'configurator-wrap'}>
                <form className={'package-json half'}><textarea id={'code'} name={'code'}>
                    {JSON.stringify({
                            "name": "rapid-installer",
                            "description": "Generate module install command, Easily",
                            "repository": {
                                "type": "git",
                                "url": "git+https://github.com/hg-pyun/rapid-installer.git"
                            },
                            "author": "Haegul Pyun",
                            "license": "MIT",
                            "bugs": {
                                "url": "https://github.com/hg-pyun/rapid-installer/issues"
                            },
                            "homepage": "https://github.com/hg-pyun/rapid-installer#readme",
                            "devDependencies": {
                                "@babel/cli": "^7.1.0",
                                "@babel/core": "^7.1.0",
                                "@babel/plugin-proposal-class-properties": "^7.1.0",
                                "@babel/plugin-proposal-object-rest-spread": "^7.0.0",
                                "@babel/preset-env": "^7.1.0",
                                "@babel/preset-react": "^7.0.0",
                                "@babel/preset-typescript": "^7.1.0",
                                "@types/react": "^16.4.14",
                                "babel-loader": "^8.0.2",
                                "clean-webpack-plugin": "^0.1.19",
                                "css-loader": "^1.0.0",
                                "ejs-loader": "^0.3.1",
                                "html-webpack-harddisk-plugin": "^0.2.0",
                                "html-webpack-plugin": "^3.2.0",
                                "mini-css-extract-plugin": "^0.4.3",
                                "node-sass": "^4.9.3",
                                "sass-loader": "^7.1.0",
                                "style-loader": "^0.23.0",
                                "webpack": "^4.19.1",
                                "webpack-cli": "^3.1.0",
                                "webpack-dev-server": "^3.1.8",
                                "webpack-merge": "^4.1.4"
                            },
                            "dependencies": {
                                "@babel/polyfill": "^7.0.0",
                                "codemirror": "^5.40.2",
                                "react": "^16.5.2",
                                "react-dom": "^16.5.2",
                                "react-router-dom": "^4.3.1"
                            },
                            "scripts": {
                                "dev": "webpack-dev-server --config ./configs/webpack.config.dev.js",
                                "build": "webpack --config ./configs/webpack.config.prod.js",
                                "deploy": "./deploy.sh"
                            }
                        },null, 2)}
                </textarea></form>
                <div className={'module-config half'}>
                    Result Modules
                </div>
            </div>
        );
    }
}

export default Configurator;