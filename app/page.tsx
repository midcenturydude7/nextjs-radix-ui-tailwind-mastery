import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <div className="bg-gray-800">Servers</div>
      <div className="bg-gray-700">Channels</div>
      <div className="bg-gray-600">Main</div>
    </div>
  );
}
