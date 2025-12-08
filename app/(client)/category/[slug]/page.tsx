import Container from "@/components/Container";
import Title from "@/components/Title";
import { getCategories } from "@/sanity/queries";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  // Fetch all categories from your data source (Sanity, API, etc.)
  const categories = await getCategories();
  // Wait for the params promise to resolve, and extract 'slug'
  const { slug } = await params;
  return (
    <div className="py-10">
      <Container>
        <Title>
          Products by Category:{" "}
          <span className="font-bold text-green-600 capitalize tracking-wide">
            {slug && slug}
          </span>
        </Title>
      </Container>
    </div>
  );
};

export default CategoryPage;
