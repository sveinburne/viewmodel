Package.describe({
  name: 'manuel:viewmodel2',
  summary: "MVVM, two-way data binding, and components for Meteor. Similar to Angular and Knockout.",
  version: "2.0.0",
  git: "https://github.com/ManuelDeLeon/viewmodel"
});

var CLIENT = 'client';

Package.onUse(function(api) {
  api.use([
    'coffeescript',
    'blaze',
    'manuel:reactivearray',
    'manuel:viewmodel-debug'
  ], CLIENT);

  api.addFiles([
    'lib/viewmodel.coffee',
    'lib/blazeHooks.coffee'
  ], CLIENT);

  api.export([
    'ViewModel2'
  ], CLIENT);
});

Package.onTest(function(api) {

  api.use([
    'coffeescript',
    'blaze',
    'peterellisjones:describe'
  ], CLIENT);

  api.addFiles([
    'lib/viewmodel.coffee',
    'lib/blazeHooks.coffee',
    'tests/viewmodelStatic.coffee',
    'tests/templateInstance.coffee'
  ], CLIENT);

  api.export([
    'ViewModel2'
  ], CLIENT);
});