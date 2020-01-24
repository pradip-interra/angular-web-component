# AngularWebComponent

A simple program to show how to build an Angular web component which can be reused interchangibly with any other JavaScript frameworks like Vue.js, React.js etc.

## Dependencies
Angular CLI: 6.2.1 Node: 8.11.1 OS: win32 x64 Angular: 6.1.7 ... animations, common, compiler, compiler-cli, core, forms ... http, language-service, platform-browser ... platform-browser-dynamic, router

## How to?
* npm install
* npm start 
* npm run build-prod  // this will build the dist folder
* npm run package     // this will create the deployable web component as angular-web-component.js
You can use this web component in any JavaScript framework as you wish. E.g. you can modify the index.html to add the script tag:

  
              <body>
                                     ...........
                      <my-web-component></my-web-component>
                                     ............
                      <script type="text/javascript" src="../angular-web-component.js"></script>
              </body>

