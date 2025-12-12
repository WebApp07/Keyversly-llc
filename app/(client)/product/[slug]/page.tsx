import notFound from "@/app/not-found";
import Container from "@/components/Container";
import ImageView from "@/components/ImageView";
import { getProductBySlug } from "@/sanity/queries";

// This component is async because we need to WAIT for data
const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  // params.slug comes from the URL
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) {
    return notFound();
  }
  return (
    <Container className="flex flex-col md:flex-row gap-10 py-10">
      {product?.images && (
        <ImageView images={product?.images} isStock={product?.stock} />
      )}
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">{product?.name}</h2>
          <p className="text-sm text-gray-600 tracking-wide">
            {product?.description}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default SingleProductPage;
