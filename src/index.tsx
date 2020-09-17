import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import 'unorm/lib/unorm';
import 'whatwg-fetch';
import 'abortcontroller-polyfill/dist/polyfill-patch-fetch';
import { init as Sentry } from '@sentry/browser';
import App from './App/App';
import './index.less';
import environment from './utils/environment';

Sentry({
    dsn: 'https://57108359840e4a28b979e36baf5e5c6c@sentry.gc.nav.no/27',
    release: process.env.GIT_COMMIT_HASH || 'unknown',
    environment: window.location.hostname,
});

if (process.env.REACT_APP_MOCK) {
    console.log('========================================');
    console.log('=============== MED MOCK ===============');
    console.log('== DETTE SKAL DU IKKE SE I PRODUKSJON ==');
    console.log('========================================');
    require('./mock/pamMock');
    require('./mock/syfoMock');
    require('./mock/arbeidsavtalerMock');
    require('./mock/altinnMock');
    require('./mock/altinnMeldingsboksMock');
    require('./mock/unleashMock');
}

if (process.env.REACT_APP_MOCK || environment.MILJO === 'dev-sbs') {
    require('./mock/enhetsRegisteretMock');
}

ReactDOM.render(<App />, document.getElementById('root'));
