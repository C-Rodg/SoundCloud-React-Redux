import React from 'react';
import ReactDOM from 'react-dom';

import Stream from './components/Stream';

const title = 'SoundCloud React + Redux App';

const tracks = [
    {
        title : 'Some track'
    },
    {
        title : 'Some other track'
    }
];

ReactDOM.render(
    <Stream tracks={tracks} />,
    document.getElementById('app')
);