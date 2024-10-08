import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './components/App';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const content = renderToString(<App />);
    const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
    res.send(html);
});

app.listen(6000, () => {
    console.log('Server is listening on port 5000');
});
