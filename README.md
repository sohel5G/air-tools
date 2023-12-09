
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


### API 

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


