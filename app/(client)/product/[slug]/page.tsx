import React from "react";

// This component is async because we need to WAIT for data
const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  // params.slug comes from the URL
  const { slug } = await params;

  return <div>SingleProductPage</div>;
};

export default SingleProductPage;
