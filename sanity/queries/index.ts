import { sanityFetch } from "../lib/live";

const getCategories = async (quantity?: number) => {
  try {
    // If "quantity" is provided, we limit the number of categories returned.
    // Otherwise, we fetch ALL categories.
    const query = quantity
      ? `*[_type == 'category'] | order(name asc) [0...$quantity] {
          ...,
          "productCount": count(*[_type == "product" && references(^._id)])
        }`
      : `*[_type == 'category'] | order(name asc) {
          ...,
          "productCount": count(*[_type == "product" && references(^._id)])
        }`;

    // Fetch categories from Sanity with optional limit (quantity)
    const { data } = await sanityFetch({
      // The GROQ query we built earlier (string)
      query,
      // Query parameters passed to Sanity.
      // If "quantity" is provided, we send { quantity: 5 }, for example.
      // If not provided, we send an empty object {}.
      // This prevents errors in GROQ when no parameters are needed.
      params: quantity ? { quantity } : {},
    });
    // We only need the 'data' part, so we return it.
    return data;
  } catch (error) {
    console.log("Error fetching categories", error);
    return [];
  }
};

export { getCategories };
