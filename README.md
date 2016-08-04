# Cordova Angular Native Transitions  
**Zipped Telerik-Verified-Plugins/NativePageTransitions into an Angular module**  
This module has sealed Cordova NativePageTransitions plugin to an Angular module.  
For any who wants to build Hybrid App with Angular@1.X framework may import this module to get OS native transitions.  
Also, The module was recommenced to be used with [angular-ui-router][]

#### Before using this  
This module has dependence on [**Telerik-Verified-Plugins/NativePageTransitions**][].  
To install this plugin, please use command  
<code>cordova plugin add com.telerik.plugins.nativepagetransitions</code>  
or, please refer to the description in [here][].

#### Include the javascript
```html
<!DOCTYPE HTML>
<html>
  <head>
    <title>YOUR_TITLE</title>
  </head>
  <body>
    <div ng-app="app" ng-controller="appCtrl">
    </div>
  </body>
  <script type="text/javascript" src="PATH-IN-YOUR-PROJECT/angular.min.js"></script>
  <script type="text/javascript" src="PATH-IN-YOUR-PROJECT/angular-ui-router.min.js"></script>
  <script type="text/javascript" src="assets/angular-native-transitions.min.js"></script>
  <script>
    angular.module('app', ['ui.router', 'ngNativeTransitions'])
    .controller('appCtrl', ['$scope', function($scope){
      // YOUR CODE HERE
    }])
  </script>
</html>
```

#### Use Angular directive
The default effect is "Slide  
```html
<button native-transition href="#home">Back</button>
```  
or have more attributes to configure the transition effect:  
```html
<button class="opt-blk half"
        native-transition
        href="#home"
        effect="slide"
        duration="400"
        direction="left"
        fixtop="82">Back</button>
```

#### Effect types
The plugin provides 6 types of transition effect in total.  
Please refer [Here](http://plugins.telerik.com/cordova/plugin/native-page-transitions) for more information.  

#### Directive Attribute
| Slide  |  |
|-------------|-------------|
|href|target directory or url|
|direction    |up,down,left,right|
|duration|(ms), default is 400|
|slowdownfactor|default is 0|
|slidepixels|(px), default is 0|
|delay|(ms), default is 0|
|fixtop|(px), default is 0|
|fixbottom|(px), default is 0|  

|Flip| |
|-------------|------------|
|href|target directory or url|
|direction|up, down, left, right|
|duration|(ms), default is 400|
|delay|(ms), default is 0|  

|Fade|   |
|--------------|------------|
|href|target directory or url|
|duration|(ms), default is 400|
|delay|(ios and android only), default is 0|  

|Drawer|not recommended  |
|--------------|------------|
|origin|left, right|
|action|open, close|
|duration|(ms), default is 400|
|delay|(ios only), default is 0|  

|Curl|iOS only|
|--------------|-------------|
|href|target directory or url|
|direction|up, down|
|duration|(ms), default is 400|
|delay|(ios only), default is 0 ms|  

#### Angular Factory
If the transitions are wished to be triggered in program.  
Inject <code>$nativeTransitions</code> to your Angular function.  
<code>$nativeTransitions</code> provides 5 functions:  
<code>$nativeTransitions.slide(options, callback, error)</code>  
<code>$nativeTransitions.flip(options, callback, error)</code>  
<code>$nativeTransitions.fade(options, callback, error)</code>  
<code>$nativeTransitions.drawer(options, callback, error)</code>  
<code>$nativeTransitions.curl(options, callback, error)</code>  
```html
<script>
angular.module('app', ['ngNativeTransitions'])
.controller('appCtrl', ['$scope', '$nativeTransitions', function($scope, $nativeTransitions){
  var options = {
    direction: 'left',
    duration: 300,
    iosdelay: 100,
    fixedPixelsTop: 45,
    href: '#home'
  };
  var callback = function(successMsg){ console.log('success -> ' + successMsg) };
  var error = function(error){ console.log(error); };
  if(condition){ $nativeTransitions.slide(options, callback, error); }
}]);
</script>
```  
Please refer [Here](http://plugins.telerik.com/cordova/plugin/native-page-transitions) for more information.  

#### Author Jacky Wang  
**Inspired by [Telerik](www.telerik.com)**  


[**Telerik-Verified-Plugins/NativePageTransitions**]:https://github.com/Telerik-Verified-Plugins/NativePageTransitions
[here]:https://github.com/Telerik-Verified-Plugins/NativePageTransitions
[angular-ui-router]:https://github.com/angular-ui/ui-router
