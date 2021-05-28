import api from "./api";

export const getPositions = () => {
  return api.get("/positions");
};
