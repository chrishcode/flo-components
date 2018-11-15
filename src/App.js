import React, { Component } from 'react';
import './App.css';
import { Like } from './components/like.js';

class App extends Component {
  render() {
    return (
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Flo</title>
          <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet" />
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet" />
        </head>
        <body class="h-screen text-smooth">
          <div className="App">
            <div class="flex flex-col items-center justify-center h-full pt-8">
              <Like />
                {/* <a href="/" class="text-white hover:text-white no-underline">
                    <div class="flex w-12 h-12 bg-brand rounded-full self-center items-center justify-center">
                        <span class="font-logo text-xl leading-none tracking-tight">flo</span>
                    </div>
                </a>

                <div class="bg-grey-lighter w-1/2 h-64 rounded-lg"></div>

                <h1 class="bg-brand p-4 rounded-full text-4xl leading-none tracking-tight text-white mt-8 mb-8 rotate-2">Hi! I'm flo, a javascript scaffolding tool.</h1>
                <p class="w-1/2 text-center">Flo is a javascript scaffolding tool. Scaffold starter apps and components to build user interfaces with amazing speed.</p> */}
            </div>
          </div>
        </body>
      </html>
    );
  }
}

export default App;
