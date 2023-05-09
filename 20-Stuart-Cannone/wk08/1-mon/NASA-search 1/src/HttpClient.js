import axios from "axios"

const nasaEndpoint = 'https://api.nasa.gov/'
const nasaApiKey = 'g6BXGaOBg9rb99MOxlbQmBGYQLmMqqMHNmCGncCE'

const apodClient = axios.create({
  baseURL: `${nasaEndpoint}planetary/`
})

apodClient.interceptors.request.use(
  config => {
    config.params = config.params ? config.params : {}
    config.params["api_key"] = nasaApiKey

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

const searchClient = axios.create({
  baseURL: 'https://images-api.nasa.gov/'
})

searchClient.interceptors.request.use(
  config => {
    config.params = config.params ? config.params : {}
    config.params["api_key"] = nasaApiKey

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default {
  getApod() {
    return apodClient.get('apod')
  },
  searchImages(query) {
    return searchClient.get('search', {
      params: {
        q: query,
        media_type: 'image'
      }
    })
  }
}
