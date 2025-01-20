import image from "../../assets/images/sign-159285_1280.webp";

interface ImageDisplayProps {
  currentImage: string;
  images: string[];
  onImageClick: (img: string) => void;
}

export const ImageDisplay = ({
  currentImage,
  images,
  onImageClick,
}: ImageDisplayProps) => {
  const fallbackImage = image;

  return (
    <div className="w-full h-fit">
      <div className="overflow-hidden h-[354px] relative">
        <img
          className="transition-transform duration-300 ease-in-out transform hover:scale-110 h-full w-full object-cover"
          src={currentImage || fallbackImage}
          alt="Product"
        />
      </div>

      <div className="grid pt-5 grid-cols-3 gap-3">
        {images.map((img, index) => (
          <div key={index} className="h-[80px] lg:h-[162px]">
            <img
              className="w-full h-[80px] lg:h-[162px] object-cover cursor-pointer"
              src={img || fallbackImage}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => onImageClick(img)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
