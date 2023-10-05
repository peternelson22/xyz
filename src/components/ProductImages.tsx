type ProductImagesProps = {
  images: Images[] | undefined;
};

const ProductImages = ({ images = [] }: ProductImagesProps) => {
  return (
    <div className='flex items-center justify-center mb-4 sm:flex-none'>
      <img
        src={images[0]?.url}
        alt='img'
        className='h-52 w-52 md:h-96 md:w-96 object-cover'
      />
    </div>
  );
};
export default ProductImages;
