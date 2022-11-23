import { gql } from "apollo-angular";
import { User } from "../_models/User";

// ...
export const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($firstname: String!,$lastname: String!, $email: String!, $password: String!) {
    createUser(
      firstname: $firstname,
      lastname: $lastname
      authProvider: {
        email: {
          email: $email,
          password: $password
        }
      }
    ) {
      id
    }

    signinUser(email: {
      email: $email,
      password: $password
    }) {
      token
      user{
        id
      }
      
    }
  }
`;

export interface CreateUserMutationResponse {
  loading: boolean;
  createUser: User;
  signinUser: {
    token: string,
    user?: User
  };
}

export const SIGNIN_USER_MUTATION = gql`
  mutation SigninUserMutation($email: String!, $password: String!) {
    CreateToken(email: {
      email: $email,
      password: $password
    }) {
      token
    }
  }
`;


export interface SigninUserMutationResponse {
  loading: boolean;
  signinUser: {
    token: string,
    user?: User
  };
}