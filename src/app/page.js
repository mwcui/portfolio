import AspectRatio from "./Components/aspectratio";

export default function Home() {
  return (
    <AspectRatio>
      <div className="bg-blue-500">
        <h1 className="text-white">Content inside 19.5:9 Aspect Ratio</h1>
      </div>
    </AspectRatio>
  );
}