import { gql } from '@apollo/client';

export const SAVE_BOOK = gql`
  mutation saveBook(
    $bookID: ID!
    $authors: [String]
    $description: String!
    $title: String!
    $image: String!
    $link: String!
  ) {
    addProfile(
      bookID: $bookID
      authors: $authors
      description: $description
      title: $title
      image: $image
      link: $link
    ) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addSkill(username: $username, email: $email, password: $password) {
      _id
      username
      email
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks
    }
  }
`;
