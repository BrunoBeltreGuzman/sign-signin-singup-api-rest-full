# sign-signin-singup-api-rest-full

**A simple api rest with sign, signin and signup, authentication Json Web Token, validate roles and password encryption.**

- **Routers Signin and Signup**

```javascript
router.post("/signin", [verifyRole.allRole], controllers.signin);
router.post("/signup", [verifyRole.allRole], controllers.signup);
```

**Routers Home**

```javascript
/*
       Use:
       - verifyRole.isUser
       - verifyRole.isAdmin
       - verifyRole.isReader
       And verifyRole.allRole
*/
router.get(
       "/home",
       [jsonWebToken.verifyToken, verifyRole.isUser],
       function (request, response) {
              response.send(
                     "Welcome " +
                            request.user.user.name +
                            ", you role is '" +
                            request.user.role[0].role +
                            "'"
              );
       }
);
```

- Steps to run this project:

1. Run `npm install` command

```console
$ npm install
```

2. Run `npm start` command

```console
$ npm start
```
