export default async function apiCall(url) {
  let data;

  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (error) {
    console.log(error.message);
  }
  return data;
}
