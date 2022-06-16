import App from './App.js'
import Auth from './Auth.js'
import Toast from './Toast.js'

class InterestAPI {

  async getInterests(){
    
    // fetch the json data
    const response = await fetch(`${App.apiBase}/interest`, {
      headers: { "Authorization": `Bearer ${localStorage.accessToken}`}
    })

    // if response not ok
    if(!response.ok){ 
      // console log error
      const err = await response.json()
      if(err) console.log(err)
      // throw error (exit this function)      
      throw new Error('Problem getting interest groups')
    }
    
    // convert response payload into json - store as data
    const data = await response.json()
    
    // return data
    return data
  }
}

export default new InterestAPI()