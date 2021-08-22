import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ramesh karr",
    email: "ramesh@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Anamika parajuli",
    email: "anamika@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
