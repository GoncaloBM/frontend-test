import { gql } from "@apollo/client";

export const BOOKS_GRAPH = gql`
  {
    books {
      title
      bookId
      author
      price
    }
  }
`;

export const CREATE_BOOK = gql`
  mutation createBook($title: String!, $author: String!, $price: Float!) {
    createBook(title: $title, author: $author, price: $price) {
      title
      author
      price
      bookId
    }
  }
`;

export const EDIT_BOOK = gql`
  mutation editBook(
    $id: Int!
    $titleToEdit: String!
    $authorToEdit: String!
    $priceToEdit: Float!
  ) {
    editBook(
      bookId: $id
      title: $titleToEdit
      author: $authorToEdit
      price: $priceToEdit
    ) {
      title
      author
      price
      bookId
    }
  }
`;
