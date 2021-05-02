//Modified from a tutorial by Nolan Kovacik at https://medium.com/@noltron000/graphql-vanillajs-in-minutes-e5457e27e85b

/* STEP 1: USE A MODULE */
// Using HTML modules, we'll import this project:
// https://github.com/octokit/graphql.js/
import {graphql} from 'https://cdn.pika.dev/@octokit/graphql'


/* STEP 2: PREPARE FOR REQUEST */
// We'll need three things for our request:
// - the GraphQL query that we want called
// - our GitHub Access Token
// - the Authorization Header, with our token

// If you'd like to mess around with the GitHub API,
// visit the GraphiQL playground here:
// https://developer.github.com/v4/explorer/
const query = `
# GraphQL query comments use a hashtag.
# Create queries at the GitHub API Explorer: https://docs.github.com/en/graphql/overview/explorer
query {
  user(login: "ADD_YOUR_USERNAME_HERE") {
    repositories {
      totalCount
    }
    bio
    avatarUrl
    contributionsCollection {
      contributionYears
      totalCommitContributions
    }
  }
}
`

// Create your github access token at: https://github.com/settings/tokens
// GitHub recommends allowing specific scoped permissions. See list at: https://docs.github.com/en/graphql/guides/forming-calls-with-graphql
const token = 'ADD_YOUR_TOKEN_HERE'
const auth = {
    headers: {
        authorization: 'token ' + token
    }
}


/* STEP 3: CREATE THE FUNCTION */
// Create an async function to make the request.
async function niceRequest(query, auth) {
   return await graphql(query, auth)
}

/* STEP 4: USE THE FUNCTION */
// This will resolve the promise and print it to console.
// You can expand the objects and subobjects to see data.
console.log(niceRequest(query, auth))