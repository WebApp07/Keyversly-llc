import { defineQuery } from "next-sanity";

// Define a GROQ query that fetches all documents of type "brand"
// and sorts them alphabetically by the "name" field.
const BRANDS_QUERY = defineQuery(`*[_type=="brand"] | order(name asc)`);

export { BRANDS_QUERY };
