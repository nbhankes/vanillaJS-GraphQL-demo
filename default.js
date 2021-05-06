// Querying the GraphQL API using the Fetch API.
// There are other libraries that are designed to 
// work specifically with GraphQL, but for the 
// sake of this demo, we'll rely on Fetch.

fetch('https://api.spacex.land/graphql/', {
// Since the Fetch API is deisgned with REST APIs in mind, we're stuck using the REST methods.
// We're technically receiving data, so GET would seem to be more appropiate, however 
// POST seems to result in fewer issues when using FETCH with GraphQL. 
// Shout out to Jason Lengstorf for sharing this in his post: https://www.netlify.com/blog/2020/12/21/send-graphql-queries-with-the-fetch-api-without-using-apollo-urql-or-other-graphql-clients/
    method: "POST",
// The header "Content-Type" sends the query and any variables as JSON data.
//
    headers: {
        'Content-Type': 'application/json',
    },
// This query was generated in the GraphiQL explorer at https://api.spacex.land/graphql/
// Create your own query, and integrate it into this code to learn how to use it. 
// (Hint: if your query returns an array, use the .map() method to display all the results.)
    body: JSON.stringify({
        query: `
            query {
                company {
                  ceo
                  name
                  founded
                  summary
                }
              }
              
          `,
// Even if you don't have variables, you may avoid issues by 
// sending an empty variable object.
// Variables are things like
  variables: {},
}),
})
// A promise chain: Once the above query is sent, then the below code turns the response to JSON
.then((res) => res.json())
// A promise chain: Once the above code is executed, the the below code insert the JSON into the 
// HTML template literal below, which is then inserted into the HTML element with the class of .query-response.
.then((result) => {
    document.querySelector(".query-response").innerHTML = `
    <article class="ceo-card-container">
        <h1>${result.data.company.name}</h1>
        <h3>CEO: ${result.data.company.ceo}</h3>
        <h3>Founded: ${result.data.company.founded}</h3>
        <h4>${result.data.company.summary}</h4>
    </article>
    `
})






