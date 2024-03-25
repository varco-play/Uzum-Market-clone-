const baseUrl = "http://localhost:7777";

export const getCategories = async () => {
  const response = await fetch(`${baseUrl}/api/categories`);

  return response.json()
};
