import 'normalize.css';
import 'typeface-roboto';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from './BrowserRouter';

ReactDOM.render(
    <AppContainer>
        <BrowserRouter />
    </AppContainer>,
    document.getElementById('root') as HTMLElement
);

interface RequireImport {
    default: any;
}

if (module.hot) {
    module.hot.accept('./BrowserRouter', () => {
        console.log('doing a app hot accept')
        const NextApp = require<RequireImport>('./BrowserRouter').default
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
