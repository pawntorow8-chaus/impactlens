export async function handler(event, context) {
  const pmid = event.queryStringParameters.pmid;

  if (!pmid) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "No PMID provided" })
    };
  }

  const url = `https://icite.od.nih.gov/api/pubs?pmids=${pmid}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}