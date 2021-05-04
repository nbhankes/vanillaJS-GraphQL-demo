// Querying the GraphQL API using the Fetch() API

fetch('https://api.spacex.land/graphql/', {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
    },
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
}),
})
.then((res) => res.json())
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






