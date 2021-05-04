// Querying the GraphQL API using the Fetch() API

fetch('https://api.spacex.land/graphql/', {
// We're technically receiving data, so GET might be more appropiate, however 
// POST seems to work always. 
    method: "POST",
// The header "Content-Type" tells the software that it is receiving JSON data.
    headers: {
        'Content-Type': 'application/json',
    },
// Queries and variables need to be sent as JSON Object
// This query was generated in the GraphiQL explorer at https://api.spacex.land/graphql/
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
// Even if you don't have variables, you will avoid issues by 
// sending an empty variable object.
  variables: {},
}),
})
// A promise chain: Once the above query is sent, then the below code turns the response to JSON
.then((res) => res.json())
// A promise chain: Once the above code is executed, the the below code renders it to the browser.
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






