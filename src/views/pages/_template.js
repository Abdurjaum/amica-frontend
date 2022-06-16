import App from './../../App.js'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router.js'
import Auth from './../../Auth.js'
import Utils from './../../Utils.js'

class TemplateView {
  init(){
    document.title = 'Template'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Profile" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1>Page title</h1>
        <p>Page content ...</p>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new TemplateView()