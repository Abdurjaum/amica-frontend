// import views
import homeView from './views/pages/home.js'
import fourOFourView from './views/pages/404.js'
import signinView from './views/pages/signin.js'
import signupView from './views/pages/signup.js'
import profileView from './views/pages/profile.js'
import editProfileView from './views/pages/editProfile.js'
import guideview from './views/pages/guide.js'
import discoverview from './views/pages/discover.js'
import MessageView from './views/pages/messages.js'
import notificationview from './views/pages/notifications.js'
import FriendrequestView from './views/pages/friendrequest.js'
import InterestsView from './views/pages/interests.js'
import GroupView from './views/pages/group,js'

// define routes
const routes = {
	'/': homeView,	
	'404' : fourOFourView,
	'/signin': signinView,
	'/signup': signupView,
	'/profile': profileView,
	'/editProfile': editProfileView,
	'/guide': guideview,
	'/discover': discoverview,
	'/messages': MessageView,
	'/notifications': notificationview,
	'/friendrequest': FriendrequestView,
	'/interests': InterestsView,
	'/group': GroupView

}

class Router {
	constructor(){
		this.routes = routes
	}
	
	init(){
		// initial call
		this.route(window.location.pathname)

		// on back/forward
		window.addEventListener('popstate', () => {
			this.route(window.location.pathname)
		})
	}
	
	route(fullPathname){
		// extract path without params
		const pathname = fullPathname.split('?')[0]
		const route = this.routes[pathname]
		
		if(route){
			// if route exists, run init() of the view
			this.routes[window.location.pathname].init()
		}else{			
			// show 404 view instead
			this.routes['404'].init()			
		}
	}

	gotoRoute(pathname){
		window.history.pushState({}, pathname, window.location.origin + pathname);
		this.route(pathname)
	}	
}

// create appRouter instance and export
const AppRouter = new Router()
export default AppRouter


// programmatically load any route
export function gotoRoute(pathname){
	AppRouter.gotoRoute(pathname)
}


// allows anchor <a> links to load routes
export function anchorRoute(e){
	e.preventDefault()	
	const pathname = e.target.closest('a').pathname
	AppRouter.gotoRoute(pathname)
}
