function setEnvironment(configPath, environment) {
    fs.writeJson(configPath, {env: environment},
      function (res) {
        console.log('Environment variable set to ' + environment)
      }
    );
  }
  
  // Set environment variable to "production"
  setEnvironment('./src/config/env.json', 'production');