export default async function apiCall(url, options) {
  let data;
  let response;

  try {
    if (options) {
      response = await fetch(url, options);
    } else {
      response = await fetch(url);
    }
    data = await response.json();
  } catch (error) {
    console.log(error.message);
  }
  return data;
}
