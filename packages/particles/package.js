// "authors": "Vincent Garreau <vin.garreau@gmail.com>"

var packageName = 'newswim:particles';

var where = 'client';

Package.describe({
  name: packageName,
  version: '2.0.0',
  summary: 'Create & generate interactive particles.',
  git: 'https://github.com/newswim/particles.js.git',
  documentation: 'README.md'
});


Package.onUse(function(api) {
  // including older version
  api.versionsFrom('1.1.0.2');
  api.addFiles('particles.js','client');
  //api.addFiles('../../particles.json','client');
  api.export('pJS', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use(packageName);
  api.addFiles('particles-tests.js');
});
