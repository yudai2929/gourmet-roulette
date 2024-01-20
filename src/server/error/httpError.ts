type HTTPError = {
  status: number;
  message: string;
};

export const BadRequest = (message: string): HTTPError => ({
  status: 400,
  message,
});
