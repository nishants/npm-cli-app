

# Creating and publishing cli apps with npm



- Create project 

  ```
  npm init
  ```

- Create exectuable script 

  ```
  mkdir bin
  ```

- Create file `cli.js`

  ```javascript
  module.exports = {  
  	run : (args) => {    
  		console.log("running command with ", args);  
  	}
  };
  ```

- Create file `bin/npm-cli-app.js`

  ```javascript
  #!/usr/bin/env node
  
  require('../cli').run(process.argv);
  ```

- Run and check the script file 

  ```bash
  node bin/npm-cli-app.js hello
  # running command with  [
  #   '/Users/me/.nvm/versions/node/v14.5.0/bin/node',
  #   '/Users/me/projects/npm-cli-app/bin/npm-cli-app.js',
  #   'hello'
  # ]
  ```

- Update pakcage.json to include the bin file :

  ```yaml
  "bin": {
  	"npm-cli-app": "bin/npm-cli-app.js"
  },
  ```

- Install project locally for testing 

  ```bash
  npm link
  # /Users/me/.nvm/versions/node/v14.5.0/bin/npm-cli-app -> /Users/me/.nvm/versions/node/v14.5.0/lib/node_modules/npm-cli-app/bin/npm-cli-app.js
  
  # /Users/me/.nvm/versions/node/v14.5.0/lib/node_modules/npm-cli-app -> /Users/me/projects/npm-cli-app
  ```

- Now run and test your command : 

  ```bash
  npm-cli-app hello
  
  # running command with  [
  #   '/Users/dawn/.nvm/versions/node/v14.5.0/bin/node',
  #   '/Users/dawn/.nvm/versions/node/v14.5.0/bin/npm-cli-app',
  #   'hello'
  # ]
  ```

- 