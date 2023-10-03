type ProductImagesProps = {
  images: Images[] | undefined;
};

const ProductImages = ({ images = [] }: ProductImagesProps) => {
  return (
    <>
      <img
        src={images[0]?.url}
        alt='img'
        className='h-52 w-52 md:h-96 md:w-96 object-cover'
      />
    </>
  );
};
export default ProductImages;
