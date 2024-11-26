interface ImageDisplayProps {
    currentImage: string;
    images: string[];
    onImageClick: (img: string) => void;
  }
  
  export const ImageDisplay = ({ currentImage, images, onImageClick,}: ImageDisplayProps) => {
    return (
      <div className="w-full h-[300px] bg-black">
        <div className="overflow-hidden relative h-[300px] md:h-full">
          <img
            className="transition-transform duration-300 ease-in-out transform hover:scale-110 h-full w-full object-cover"
            src={currentImage}
            alt="Product"
          />
        </div>
  
        <div className="grid pt-5 grid-cols-3 gap-3">
          {images.map((img, index) => (
            <div key={index} className="h-[80px] lg:h-[162px]">
              <img
                className="w-full h-[80px] lg:h-[162px] object-cover cursor-pointer"
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => onImageClick(img)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  