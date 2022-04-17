import axios from "axios";

//Movie list from online
export const getMovieListByTitle = (title: string, cb: any) => {
  const options = {
    method: "GET",
    url: process.env.REACT_APP_IMAGE_API_URL,
    params: { q: title },
    headers: {
      "X-RapidAPI-Host": process.env.REACT_APP_X_RAPIDAPI_HOST,
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
    },
  };

  axios
    .request(options as any)
    .then(function (response) {
      cb(response.data);
    })
    .catch(function (error) {
      cb(error);
    });
};
