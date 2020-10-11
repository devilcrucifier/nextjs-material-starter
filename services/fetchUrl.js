const baseUrl = process.env.BASE_URL;

export default function fetchUrl(apiService, postFixUrl) {
  if (postFixUrl) {
    return `${baseUrl}/${apiService}/${postFixUrl}`;
  } else {
    return `${baseUrl}/${apiService}`;
  }
}
