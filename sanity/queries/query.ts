import { defineQuery } from "next-sanity";

/* =======================
   BRANDS
======================= */
export const BRANDS_QUERY = defineQuery(`
*[_type == "brand"] | order(name asc)
`);

/* =======================
   LATEST BLOGS
======================= */
export const LATEST_BLOG_QUERY = defineQuery(`
*[_type == "blog" && isLatest == true] | order(publishedAt desc){
  ...,
  blogcategories[]->{
    title,
    "slug": slug.current
  }
}
`);

/* =======================
   DEAL PRODUCTS
======================= */
export const DEAL_PRODUCTS = defineQuery(`
*[_type == "product" && status == "hot"] | order(name asc){
  ...,
  "categories": categories[]->title
}
`);

/* =======================
   PRODUCT BY SLUG (SINGLE)
======================= */
export const PRODUCT_BY_SLUG_QUERY = defineQuery(`
*[_type == "product" && slug.current == $slug][0]
`);

/* =======================
   PRODUCT BRAND (SINGLE)
======================= */
export const BRAND_QUERY = defineQuery(`
*[_type == "product" && slug.current == $slug][0]{
  "brandName": brand->title
}
`);

/* =======================
   USER ORDERS
======================= */
export const MY_ORDERS_QUERY = defineQuery(`
*[_type == "order" && clerkUserId == $userId] | order(orderDate desc){
  ...,
  products[]{
    ...,
    product->
  }
}
`);

/* =======================
   ALL BLOGS (PAGINATED)
======================= */
export const GET_ALL_BLOG = defineQuery(`
*[
  _type == "blog" &&
  defined(slug.current)
] | order(publishedAt desc)[0...$quantity]{
  ...,
  blogcategories[]->{
    title,
    "slug": slug.current
  }
}
`);

/* =======================
   SINGLE BLOG (BY SLUG)
======================= */
export const SINGLE_BLOG_QUERY = defineQuery(`
*[_type == "blog" && slug.current == $slug][0]{
  ...,
  publishedAt,
  author->{
    name,
    image
  },
  blogcategories[]->{
    title,
    "slug": slug.current
  }
}
`);

/* =======================
   BLOG CATEGORIES (CLEAN)
======================= */
export const BLOG_CATEGORIES = defineQuery(`
*[_type == "blogCategory"] | order(title asc){
  title,
  "slug": slug.current
}
`);

/* =======================
   OTHER BLOGS (RELATED)
======================= */
export const OTHERS_BLOG_QUERY = defineQuery(`
*[
  _type == "blog" &&
  defined(slug.current) &&
  slug.current != $slug
] | order(publishedAt desc)[0...$quantity]{
  ...,
  title,
  slug,
  publishedAt,
  mainImage,
  author->{
    name,
    image
  },
  blogcategories[]->{
    title,
    "slug": slug.current
  }
}
`);
