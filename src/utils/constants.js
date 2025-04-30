export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjY0YjE4MGZlOGNlYWIwZWNlM2M0MWJjMGIzZmMwYyIsIm5iZiI6MS43NDYwMDgxOTE2NzkwMDAxZSs5LCJzdWIiOiI2ODExZjg3ZjA2ZjE1NjJjOGE0ZDI2YmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.vfqmSOWJT5p0EFfqTHgEvr_NBY2F6wdz-oj24xC9HT8",
  },
};

export const NOW_PLAYING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
