import { defineQuery } from "next-sanity";

// Define a GROQ query that fetches all documents of type "brand"
// and sorts them alphabetically by the "name" field.
const BRANDS_QUERY = defineQuery(`*[_type=="brand"] | order(name asc)`);

//Find all documents where the type is "blog" and the field "isLatest" is true
//Sort these results alphabetically by the "name" field (A → Z)
//Include ALL fields from the blog document (title, slug, image, etc.)
//For each category reference inside "blogcategories"
//fetch the "title" of that category

const LATEST_BLOG_QUERY = defineQuery(
  ` *[_type == 'blog' && isLatest == true]|order(name asc){
      ...,
      blogcategories[]->{
      title
    }
    }`
);

const DEAL_PRODUCTS = defineQuery(
  // Fetch all hot products, sort them by name, and include category titles
  `*[_type == 'product' && status == 'hot'] | order(name asc){
    ...,"categories": categories[]->title
  }`
);

export { BRANDS_QUERY, LATEST_BLOG_QUERY, DEAL_PRODUCTS };
