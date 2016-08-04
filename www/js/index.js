angular.module('nativeTransition', ['ui.router','ngNativeTransitions'])
.controller('appCtrl', function($scope, $window){
    var app = {
        initialize: function() {
            this.bindEvents();
        },
        bindEvents: function() {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        },
        onDeviceReady: function() {
            app.receivedEvent('deviceready');
        },
        receivedEvent: function(id) {
            // do nothing.
        }
    };
    app.initialize();
    $scope.title = 'Native Transitions';
})
.controller('slideCtrl', function($scope){ $scope.$parent.title = 'Slide Effect'; $scope.resetTitle = function(){ $scope.$parent.title = 'Native Transitions';}})
.controller('flipCtrl', function($scope){ $scope.$parent.title = 'Flip Effect';  $scope.resetTitle = function(){ $scope.$parent.title = 'Native Transitions';}})
.controller('fadeCtrl', function($scope){ $scope.$parent.title = 'Fade Effect';  $scope.resetTitle = function(){ $scope.$parent.title = 'Native Transitions';}})
.controller('drawerCtrl', function($scope){ $scope.$parent.title = 'Drawer Effect';  $scope.resetTitle = function(){ $scope.$parent.title = 'Native Transitions';}})
.controller('curlCtrl', function($scope){ $scope.$parent.title = 'Curl Effect';  $scope.resetTitle = function(){ $scope.$parent.title = 'Native Transitions';}})

.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url:'/home',
            templateUrl:'templates/home.html',
            controller:'appCtrl'
        })
        .state('slide', {
            url:'/slide',
            templateUrl:'templates/slide.html',
            controller:'slideCtrl'
        })
        .state('flip', {
            url:'/flip',
            templateUrl:'templates/flip.html',
            controller:'flipCtrl'
        })
        .state('fade', {
            url:'/fade',
            templateUrl:'templates/fade.html',
            controller:'fadeCtrl'
        })
        .state('drawer', {
            url:'/drawer',
            templateUrl:'templates/drawer.html',
            controller:'drawerCtrl'
        })
        .state('curl', {
            url:'/curl',
            templateUrl:'templates/curl.html',
            controller:'curlCtrl'
        });
})

angular.module('ngNativeTransitions', [])
.factory('$nativeTransitions', ['$window',function($window){
    return {
        slide:function(option, callback, errorfn){
            $window.plugins.nativepagetransitions.slide(
                option,
                callback(),
                errorfn()
            )
        },
        flip:function(option, callback, errorfn){
            $window.plugins.nativepagetransitions.flip(
                option,
                callback(),
                errorfn()
            )
        },
        fade:function(option, callback, errorfn){
            $window.plugins.nativepagetransitions.fade(
                option,
                callback(),
                errorfn()
            )
        },
        drawer:function(option, callback, errorfn){
            $window.plugins.nativepagetransitions.drawer(
                option,
                callback(),
                errorfn()
            )
        },
        curl:function(option, callback, errorfn){
            $window.plugins.nativepagetransitions.curl(
                option,
                callback(),
                errorfn()
            )
        }
    }
}])
.directive('nativeTransition', ['$nativeTransitions',function($nativeTransitions){
    return {
        restrict:'AE',
        scope:{
          success:'&',
          error:'&'  
        },
        link:function(scope, elem, attr){
            if(scope.success==null||scope.success==undefined) scope.success = function(msg){console.log(msg);}
            if(scope.error==null||scope.error==undefined) scope.error = function(error){console.log(error);}
            elem.bind('click', function(){
                switch(attr.effect){
                    case 'slide':
                        var options = {
                            direction:  attr.direction,
                            duration:   attr.duration,
                            slowdownfactor: attr.slowdownfactor,
                            slidePixels:    attr.slidepixels,
                            iosdelay:   attr.delay,
                            androiddelay:   attr.delay,
                            winphonedelay:  attr.delay,
                            fixedPixelsTop: attr.fixtop,
                            fixedPixelsBottom:  attr.fixbottom,
                            href:   attr.href
                        };
                        $nativeTransitions.slide(options, scope.success, scope.error);
                        break;
                    case 'flip':
                        var options = {
                            direction:  attr.direction,
                            duration:   attr.duration,
                            iosdelay:   attr.delay,
                            androiddelay:   attr.delay,
                            winphonedelay:  attr.delay,
                            href:   attr.href
                        };
                        $nativeTransitions.flip(options, scope.success, scope.error);
                        break;
                    case 'fade':
                        var options = {
                            duration:   attr.duration,
                            iosdelay:   attr.delay,
                            androiddelay:   attr.delay,
                            href:   attr.href
                        };
                        $nativeTransitions.fade(options, scope.success, scope.error);
                        break;
                    case 'drawer':
                        var options = {
                            origin:     attr.origin,
                            duration:   attr.duration,
                            iosdelay:   attr.delay,
                            href:   attr.href
                        };
                        $nativeTransitions.drawer(options, scope.success, scope.error);
                        break;
                    case 'curl':
                        var options = {
                            direction:  attr.direction,
                            duration:   attr.duration,
                            iosdelay:   attr.delay,
                            href:       attr.href
                        };
                        $nativeTransitions.curl(options, scope.success, scope.error);
                        break;
                    default:
                        var options = {
                            direction:  'left',
                            duration:   300,
                            slowdownfactor: 3,
                            slidePixels:    20,
                            iosdelay:   100,
                            androiddelay:   150,
                            winphonedelay:  250,
                            fixedPixelsTop: 0,
                            fixedPixelsBottom:  0,
                            href:   '#home'
                        };
                        $nativeTransitions.slide(options, scope.success, scope.error);
                } // end of switch
            }); // end of bind click
        }
    }
}])