

export const getData = async (url: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`);
    if (!response.ok) {
      throw new Error("Failed to fetch section data");
    }
    const res = await response.json();
    return res.data;
  } catch (error) {
    console.log("Error fetching section data:", error);
    return null;
  }
};

export const getTestimonials = async () => {
  const testimonialsData: any = await getData("/api/testimonial");
  if (testimonialsData.length === 0) return { loading: false };
  const loading = testimonialsData.length === 0 ? true : false;
  return { loading, data: testimonialsData };
};

export const getFaqs = async () => {
  const faqData: any = await getData("/api/faq");

  return { data: faqData };
};

export const getBanners = async (slug: any) => {
  const bannerData: any = await getData(`/api/banner/public?slug=${slug}`);
  return { data: bannerData[0] };
};

export const getBlogData = async () => {
  const blogPageData: any[] = await getData("/api/blog/public");
  return {
    data: blogPageData,
  };
};

export const getBlogSlugData = async (slug: any) => {
  const blogPageSlugData: any[] = await getData(`/api/blog?slug=${slug}`);
  return {
    blogPageSlugData,
  };
};
