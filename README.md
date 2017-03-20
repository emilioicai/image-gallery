Image Gallery
---
 
An simple image gallery built with:

- React (View library)
- Babel (for ES6 transforms)
- Webpack (for bundle creation)
- Redux (state management)
- Mocha (unit-testing framework)
- Enzyme (unit-testing tools)
- isomorphic-fetch (http requests)

The file structure was created thinking of simplicity for such a simple piece of functionality. In a larger project I would have split the actions, components, APIs (server and client), reducers into separate folders. Moreover, things like error handling on http requests has been replaced by graceful degradation techniques for the sake of simplicity.
 
Usage
---

Install dependencies and set up: 

```
npm install
```

Compile source code:

```
npm run compile
```

Start the server with this command:

```
npm start
```

The server should be available at http://localhost:3000

Development
---
 
Watch the files to rebuild bundle on development:
 
```
npm run watch
```
