window.jQuery = require('jquery');
require("bootstrap-webpack");
require("./style.css");
// document.write('<h1>aaa</h1><button class="btn btn-primary"><i class="glyphicon glyphicon-flash">闪电</button>');

// document.write(require('./content'));

import React from 'react';
import ReactDOM from 'react-dom'

class MyComponent extends React.Component {
    render() {
        return "<div>Hello world</div>";
    }
}

ReactDOM.render('<MyComponent />', document.body);