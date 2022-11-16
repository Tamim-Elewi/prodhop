import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'AdminUser',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Batman',
    email: 'batman@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'tit',
    email: 'gg@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
