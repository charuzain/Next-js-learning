import Image from "next/image"
import background from '../../../../public/paper-bg.jpg';
import book from '../../../../public/book.png'
const Banner = () => {
  return (
    <>
      <div className="h-56 container mx-auto mt-10 relative">
        <div className="w-full h-full">
          <Image
            src={background}
            alt="background"
            className="max-w-full max-h-full rounded-md"
            priority
          />
        </div>
        <div className="flex justify-between items-center absolute top-0 bottom-0 right-0 left-0">
          <p className="md:text-6xl w-3/4 text-white font-bold ml-4">
            Connect , Share and Trade your favorite Products
          </p>
          <div className="border-red-500 mr-11 h-full">
            <Image
              src={book}
              alt="Book"
              className="w-auto h-full"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner