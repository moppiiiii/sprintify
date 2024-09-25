import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Query = {
  __typename?: "Query";
  ticketList: Array<TicketList>;
  users: Array<User>;
};

export type TicketList = {
  __typename?: "TicketList";
  avatar: Scalars["String"]["output"];
  deadline: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  status: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type User = {
  __typename?: "User";
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type GetTicketListQueryVariables = Exact<{ [key: string]: never }>;

export type GetTicketListQuery = {
  __typename?: "Query";
  ticketList: Array<{
    __typename?: "TicketList";
    id: string;
    title: string;
    avatar: string;
    status: string;
    deadline: string;
  }>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  __typename?: "Query";
  users: Array<{
    __typename?: "User";
    id: string;
    email: string;
    name: string;
  }>;
};

export const GetTicketListDocument = gql`
    query GetTicketList {
  ticketList {
    id
    title
    avatar
    status
    deadline
  }
}
    `;

/**
 * __useGetTicketListQuery__
 *
 * To run a query within a React component, call `useGetTicketListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTicketListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTicketListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTicketListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetTicketListQuery,
    GetTicketListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTicketListQuery, GetTicketListQueryVariables>(
    GetTicketListDocument,
    options,
  );
}
export function useGetTicketListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTicketListQuery,
    GetTicketListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTicketListQuery, GetTicketListQueryVariables>(
    GetTicketListDocument,
    options,
  );
}
export function useGetTicketListSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetTicketListQuery,
        GetTicketListQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetTicketListQuery,
    GetTicketListQueryVariables
  >(GetTicketListDocument, options);
}
export type GetTicketListQueryHookResult = ReturnType<
  typeof useGetTicketListQuery
>;
export type GetTicketListLazyQueryHookResult = ReturnType<
  typeof useGetTicketListLazyQuery
>;
export type GetTicketListSuspenseQueryHookResult = ReturnType<
  typeof useGetTicketListSuspenseQuery
>;
export type GetTicketListQueryResult = Apollo.QueryResult<
  GetTicketListQuery,
  GetTicketListQueryVariables
>;
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    id
    email
    name
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options,
  );
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options,
  );
}
export function useGetUsersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options,
  );
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>;
export type GetUsersSuspenseQueryHookResult = ReturnType<
  typeof useGetUsersSuspenseQuery
>;
export type GetUsersQueryResult = Apollo.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>;
