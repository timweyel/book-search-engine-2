// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type Book {
    bookId: ID
    title: String
    authors: [String]
    description: String
    image: String
    link: String
  }

  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
    bookCount: Int
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookData: BookInput): User
    removeBook(bookId: ID!): User
  }

  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
    bookId: ID
    title: String
    authors: [String]
    description: String
    image: String
    link: String
  }
`;

// export the typeDefs
module.exports = typeDefs;