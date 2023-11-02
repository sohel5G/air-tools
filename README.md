### Aircraft Engineers Tools

Live link > [https://air-tools-coderloft.web.app/](https://air-tools-coderloft.web.app/)

### Some great feature of this online store : 

- Add new products
- Updated products 
- Add to cart (add to cart is fully functional)
- registration page with validation 
- Login page with validation 
- Login with google 
- If user not login, then can not see product details
- All the brand showing on front page
- When click on brand item it show all of this brand products
- If user not login, then can not add products to cart
- If user not login, then can not add new product
- If user not login, then can not update existing product


### API secure

- every person get a access token 
- every person get a refresh token 
- if access token expire then auto create a access token again using by the fresh token
- if refresh token can not create a access token then logout the user



### Technology 

- use JWT json web token
- generate a token using jwt.sign
- cors setup origin url and credentials: true
- create API set to cookie, httpOnly: true, secure:true, sameSite: 'none'
- from client side do : axios withCredentials: true




# Steps:

#### Steps 1 (client side)
```JavaScript
// set a token for this user 
const userEmail = currentUser?.email || user?.email;
if (currentUser) {
    axios.post('http://localhost:5000/jwt', { email: userEmail }, { withCredentials: true })
        .then(res => {
            console.log('Token created : ', res.data)
        })
}
// set a token for this user end
```



#### Steps 2 (server side)
```JavaScript
// Auth API, Create token and set it to browser cookie
jwt = require('jsonwebtoken');

app.use(cors({
    origin: ['http://localhost:5173'],
    credentials:true
}));

app.post('/jwt', async (req, res) => {
    const user = req.body;
    console.log('User for token create', user);

    const token = jwt.sign(user, process.env.SECRET_TOKEN, { expiresIn: '1h' })
    res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite:'none'
    })
    .send({success: true})
})

// Auth API, Create token and set it to browser cookie end
```



#### Steps 3 (Server side)
```JavaScript
// Remove cookie from browser if user logout
app.post('/logout', async (req, res) => {
    const user = req.body;

    res.clearCookie('token', { maxAge: 0 }).send({ success: true })
})
// Remove cookie from browser if user logout end
```



#### Steps 4 (Client side)
```JavaScript
// // Remove cookie from browser if user logout
else {
    axios.post('http://localhost:5000/logout', { email: userEmail }, { withCredentials: true })
        .then(res => {
            console.log('Token removed', res.data)
        })
}
// // Remove cookie from browser if user logout end
```
