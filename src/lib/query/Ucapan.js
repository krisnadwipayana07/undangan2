const { gql } = require("apollo-boost");

export const GET_MY_UCAPAN = gql`
  query MyQuery {
    yogidiwani_ucapan_doa(order_by: { id: desc }) {
      id
      name
      message
      avaliable
    }
  }
`;

export const INSERT_MY_UCAPAN = gql`
  mutation MyMutation($name: String!, $message: String!, $avaliable: String!) {
    insert_yogidiwani_ucapan_doa(
      objects: { name: $name, message: $message, avaliable: $avaliable }
    ) {
      returning {
        id
      }
    }
  }
`;
