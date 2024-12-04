
# NETFLIX GPT

 - first we create an react app 
 - tailwind installation
 - Header
 - Login
 - signin/signup
 - Routing 
 - Form handling
 - use Ref hook
 - Firebase authentication
 - Sign in and sign up with full authentication
 - Firebase authentication
 - Redux sotre
 - add slices adduser slice remove user slice 
 - then use instead of dispatch we are use an api of firebase onauthstatechange and then use diaspatch to dispatch its value into store
 - use of provider in main app
 - successful login goto browse page
 - Also add signout function
 - useNavigation hook
 - OnAuthChange => this api is actually called when we sign in  ,out , or up outomatically called this api
 - bug fix of user onAuthstatechange
 - redirect user if user is not login donot go to browser page using localhost:3000/browse on this redirect back to login when the user is not login 
 
 
 # Browse Page 
 - Main container
   - Movie background
   - movie title
 - secondary container
  - movies * n rows
    - cards  *n in each row

  # Main container
 - Title
  - inside it i pass props inside it take title and review of movie
 - background
  - in background i fetch an api from movie data base then after this i use filter method that if vedio is present of trailer then give me other wise give me the json.result specific vedio
  - then i use trailer and set a state inside it and that triler key push into iframe src to display this vedio 
 - movie slice
  - create a movie slice initally null then calling an api of movies now plying name and dispatch it into store 
  - then we read that movie in title.js from this we read title and review 
  


# Features 
 signin / signup forms
 after login browser page

# browser page
  Header
  Main movie
  background trailer
  description and title
  Buttons
  Movie suggestion
  Movie list *N  