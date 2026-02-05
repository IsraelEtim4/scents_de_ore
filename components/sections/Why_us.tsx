"use client";
import Image from "next/image";
import Image1 from "../../assets/icon1.png";
import Image2 from "../../assets/icon2.png";
import Image3 from "../../assets/icon3.png";
import imageBg from "../../assets/icon.png";
import clothe from "../../assets/clothe.jpeg";
import clothe1 from "../../assets/clothe1.jpeg";
import clothe2 from "../../assets/clothe2.jpeg";
import perfume from "../../assets/perfume.jpeg";
import shoe from "../../assets/shoe.jpeg";

function Why_us() {
  const features = [
    {
      num: 1,
      title: "Imagine and Create",
      description:
        "Finest ingredients to ensure a luxurious experience.",
      image: Image1,
    },
    {
      num: 2,
      title: "Remarkable Style",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: Image2,
    },
    {
      num: 3,
      title: "Supreme Blogging",
      description:
        "Discover a range of exclusive fragrances that captivate",
      image: Image3,
    },
    {
      num: 4,
      title: "Friendly Support",
      description:
        "Discover a range of exclusive fragrances that captivate",
      image: Image2,
    },
  ];

  const photoBg = [
    {
      num: 1,
      image: shoe,
      title: "Shoes",
      description: "center",
    },
    {
      num: 2,
      image: clothe2,
      title: "Abayas",
      description: "center",
    },
    {
      num: 3,
      image: perfume,
      title: "Perfume",
      description: "center",
    },
    {
      num: 4,
      image: clothe1,
      title: "Modesty",
      description: "center",
    },
    {
      num: 5,
      image: clothe,
      title: "Modern Wear",
      description: "center",
    },
  ];

  return (
    <div className="bg-brandWhite w-full py-10 flex flex-col justify-center items-center text-center px-4">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto py-15">
          {features.map((feature) => (
            <div key={feature.num}>
              {/* Background wrapper */}
              <div className="relative flex flex-col items-center justify-center h-40 overflow-hidden">
                {/* Background image */}
                <Image
                  src={imageBg}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw,
                        (max-width: 1024px) 50vw,
                        25vw"
                  className="object-cover"
                />

                {/* Foreground image */}
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={96}
                  height={96}
                  className="h-24 mb-4 object-cover rounded-full z-10"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2 text-black mt-3 uppercase text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-10">
          {photoBg.map((photo) => (
            <div
              key={photo.num}
              className="relative h-72 w-full group overflow-hidden"
            >
              {/* Background image */}
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw,
                      (max-width: 1024px) 33vw,
                      20vw"
                className="object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <h3 className="text-white text-xl font-semibold uppercase tracking-wide">
                  {photo.title}
                </h3>
                <p className="text-brandWhite text-center px-2">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Why_us;
