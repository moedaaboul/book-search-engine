const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: String
    savedBooks: [Book]
  }

  type Auth {
    token: String
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    # context functionality in place to check a JWT and decode its data, so we can use a query that will always find and return the logged in user's data
    me: User
  }

  input BookInput {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
