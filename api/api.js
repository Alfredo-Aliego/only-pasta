import { api } from "./apiConfig";

// get all movies
export const getMovies = async () => {
  try {
    const res = await api.get("/movies");
    return res.data;
  } catch (error) {
    throw error;
  }
};

// get movie by id
export const getMovieById = async (id) => {
  try {
    const res = await api.get(`/movies/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// get all stills
export const getStills = async () => {
  try {
    const res = await api.get("/stills");
    return res.data;
  } catch (error) {
    throw error;
  }
};

// get still by id
export const getStillById = async (id) => {
  try {
    const res = await api.get(`/stills/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
