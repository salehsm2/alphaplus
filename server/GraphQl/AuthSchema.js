const { gql } = require("apollo-server-express");
// const contentShcema = require('./ContentSchema');
module.exports = gql`
  type Query {
    findUser(id: ID!): User!
    getUsers: [User!]!
  }

  type User {
    id: ID!
    type: String!
    username: String!
    name: String
    password: String
    email: String!
    createdAt: String
    token: String!
  }

  # TODO: add defualt value for type
  input RegisterInput {
    name: String
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(email: String!, password: String!): User!
    updateUserInfo(id: ID!, name: String!, type: String!): User!
    deleteUser(id: ID!): String!
  }
  enum UserType {
    Admin
    endUser
    analyst
  }
  scalar DateTime
`;
