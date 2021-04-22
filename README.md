# Music News


## Pour lancer le projet :

```yarn install```
```yarn serve # Pour lancer le front```
```yarn server # Pour lancer le serveur```


## Serveur :

Pour plus d'information sur le fonctionnement du serveur : https://github.com/typicode/json-server

## [Pour se connecter sur le serveur](https://github.com/jeremyben/json-server-auth#authentication-flow-) :

### Inscription

Any of the following routes registers a new user :

- **`POST /register`**
- **`POST /signup`**
- **`POST /users`**

Les champs **`email`** et **`password`** sont requis dans le payload :

```http
POST /register
{
  "email": "olivier@mail.com",
  "password": "bestPassw0rd"
}
```

Le mot de passe est encrypté en [bcryptjs](https://github.com/dcodeIO/bcrypt.js).
Une fois l'utilisateur inscrit, le serveur renvoie le JWT :

```http
201 Created
{
  "accessToken": "xxx.xxx.xxx"
}
```

###### Ajouter d'autres informations

Vous pouvez ajouter d'autres informations dans le payload

```http
POST /register
{
  "email": "olivier@mail.com",
  "password": "bestPassw0rd",
  "firstname": "Olivier",
  "lastname": "Monge",
  "age": 32
}
```


### Login 🛂

Vous pouvez vous logs sur les routes suivantes :

- **`POST /login`**
- **`POST /signin`**

**`email`** et **`password`** sont obligatoires :

```http
POST /login
{
  "email": "olivier@mail.com",
  "password": "bestPassw0rd"
}
```

La response contient le JWT :

```http
200 OK
{
  "accessToken": "xxx.xxx.xxx"
}
```
