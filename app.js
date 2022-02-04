const http = new EasyHTTP()

// GET USERS
http
  .get('https://jsonplaceholder.typicode.com/users')
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

// A USER
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com',
}

// POST USER
http
  .post('https://jsonplaceholder.typicode.com/users', data)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

// UPDATE USER

http
  .put('https://jsonplaceholder.typicode.com/users/2', data)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

// DELETE USER
http
  .delete('https://jsonplaceholder.typicode.com/users/2')
  .then((data) => console.log(data))
  .catch((err) => console.log(err))