myApp.config(function ($routeProvider) {
	
	$routeProvider.when('/', {
		templateUrl: 'views/home.html',
		controller: 'homeCtrl'
	}).when('/customerList',{
		controller: 'homeCtrl',
		templateUrl: 'views/customersList.html'
	}).when('/customers/add', {
		templateUrl: 'views/addCustomer.html',
		controller: 'homeCtrl'
	}).when('/logout', {
		templateUrl: 'content/views/logout.html',
		controller: 'LoginController'
	}).when('/register', {
		templateUrl: 'content/views/register.html',
		controller: 'formController'
    }).when('/about', {
		templateUrl: 'content/views/profile.html',
		controller: 'aboutController'
    }).when('/search', {
		templateUrl: 'content/views/search.html',
		controller: 'searchController'
    }).when('/faq', {
		templateUrl: 'content/views/faq.html',
		controller: 'faqController'
    }).when('/contact', {
		templateUrl: 'content/views/contact.html',
		controller: 'contactController'
    }).otherwise({
		redirectTo: '/'
	});
});