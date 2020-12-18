addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const response = await fetch(
    new URL('https://raw.githubusercontent.com/michaltalaga/reedcouklite/master/site/indexX1.html'))
const x = await response.text()
  return new Response(x, {status: 200, headers: {
    "content-type": "text/html;charset=UTF-8"
  } })
}
/**
 * Respond to the request
 * @param {Request} request
 */
// async function handleRequest(request) {
//   const response = await fetch(
//     new URL('https://www.reed.co.uk/api/1.0/search?keywords=developer&location=london&distancefromlocation=15'),
//     {
//       headers: {
//         authorization: 'Basic NGUxODdhMjAtNDRiMi00YzdjLTlkNTMtOGQzNDc3NmY3MDgzOg=='
//       }
//     })
// const x = await response.json()
//   return new Response(JSON.stringify(x), {status: 200, headers: {
//     "content-type": "application/json;charset=UTF-8"
//   } })
// }
// async function gatherResponse(response) {
//   const { headers } = response
//   const contentType = headers.get("content-type") || ""
//   if (contentType.includes("application/json")) {
//     return JSON.stringify(await response.json())
//   }
//   else if (contentType.includes("application/text")) {
//     return await response.text()
//   }
//   else if (contentType.includes("text/html")) {
//     return await response.text()
//   }
//   else {
//     return await response.text()
//   }
// }