import {
  commitMutation,
  graphql,
} from 'react-relay';
import environment from '../Environment';

// 2
const mutation = graphql`
  mutation CreateChatMutation($input: CreateChatInput!) {
    createChat(input: $input) {
      chat {
        id
        createdAt
        from
        content
      }
    }
  }
`

export default (from, content, callback) => {
  const variables = {
    input: {
      from,
      content,
      clientMutationId: ''
    },
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err),
    },
  )
}
