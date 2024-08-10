// import AspectRatio from "./Components/aspectratio";

// export default function TestPage() {
//   return (
//     <div className="bg-[#0C3B65] h-screen flex items-center justify-center">
//     <AspectRatio>
//       <h1 className="text-black">Aspect Ratio 19.5:9</h1>
//     </AspectRatio>
//     </div>
//   );
// }


import AspectRatio from "./Components/aspectratio";

const Home = () => {
  return (
    <div className="bg-[#0C3B65] h-screen flex items-center justify-center">
      <AspectRatio>
        <h1 className="text-black">Aspect Ratio 19.5:9</h1>
      </AspectRatio>
    </div>
  );
};

export default Home;

