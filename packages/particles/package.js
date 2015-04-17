// "authors": "Vincent Garreau <vin.garreau@gmail.com>"

var packageName = 'newswim:particles';

var where = 'client';

Package.describe({
  name: packageName,
  version: '1.1.0',
  summary: 'ParticlesJS(official) : A lightweight JavaScript library for creating particles.',
  git: 'https://github.com/VincentGarreau/particles.js',
  documentation: 'README.md'
});


Package.onUse(function(api) {
  // we can add older versions here if need be
  api.versionsFrom('1.1.0.2');
  api.addFiles('particles.js','client');
  api.export('pJS', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use(packageName);
  api.addFiles('particles-tests.js');
});
