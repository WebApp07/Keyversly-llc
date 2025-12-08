import CategoryProducts from "@/components/CategoryProducts";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { getCategories } from "@/sanity/queries";

const CategoryPage = async ({
  params, // 'params' contains route parameters from Next.js dynamic route
}: {
  params: Promise<{ slug: string }>; // TypeScript type: 'params' is a promise that resolves to an object with a 'slug' string
}) => {
  const categories = await getCategories(); // Fetch all categories from your data source
  const { slug } = await params; // Wait for the params promise to resolve, and extract 'slug'

  return (
    <div className="py-10">
      <Container>
        {" "}
        {/* Centers content and adds padding */}
        <Title>
          Products by Category:{" "}
          <span className="font-bold text-green-600 capitalize tracking-wide">
            {slug && slug} {/* Display the category slug if it exists */}
          </span>
        </Title>
        <CategoryProducts categories={categories} slug={slug} />
      </Container>
    </div>
  );
};

export default CategoryPage; // Export the component so Next.js can use it for this route
