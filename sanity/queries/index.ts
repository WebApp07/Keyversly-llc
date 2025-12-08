import { sanityFetch } from "../lib/live";
import { BRANDS_QUERY, DEAL_PRODUCTS, LATEST_BLOG_QUERY } from "./query";

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

// Function to fetch all brand documents from Sanity
const getAllBrands = async () => {
  try {
    // Call your custom Sanity fetch function.
    // It sends the BRANDS_QUERY to Sanity and returns an object like: { data: [...] }
    const { data } = await sanityFetch({
      query: BRANDS_QUERY, // GROQ query that fetches all brands sorted by name
    });

    // Return the data if it exists, otherwise return an empty array to avoid undefined errors.
    return data ?? [];
  } catch (error) {
    // If anything goes wrong (network error, invalid query, etc.)
    // log the error so you can debug it.
    console.log("Error fetching all brands:", error);

    // Optional: return an empty array when an error happens,
    // so the UI doesn't break.
    return [];
  }
};

// Function to fetch all Latest Blogs from Sanity
const getLatestBlogs = async () => {
  try {
    // Call your custom Sanity fetch function.
    // It sends the BRANDS_QUERY to Sanity and returns an object like: { data: [...] }
    const { data } = await sanityFetch({
      query: LATEST_BLOG_QUERY, // GROQ query that fetches all Blogs
    });

    // Return the data if it exists, otherwise return an empty array to avoid undefined errors.
    return data ?? [];
  } catch (error) {
    // If anything goes wrong (network error, invalid query, etc.)
    // log the error so you can debug it.
    console.log("Error fetching latest Blogs:", error);

    // Optional: return an empty array when an error happens,
    // so the UI doesn't break.
    return [];
  }
};

// function safely asks Sanity for hot deal products and always returns an array, even if something breaks.

const getDealProducts = async () => {
  try {
    const { data } = await sanityFetch({ query: DEAL_PRODUCTS });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching deal Products:", error);
    return [];
  }
};

export { getCategories, getAllBrands, getLatestBlogs, getDealProducts };
