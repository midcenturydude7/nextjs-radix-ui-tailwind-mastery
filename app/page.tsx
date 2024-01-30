export default function Home() {
  return (
    <div className="flex h-screen text-white">
      <div className="space-y-2 overflow-y-scroll bg-gray-800 p-3 no-scrollbar">
        {[...Array(40)].map((_, i) => (
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-800"
            key={i}
          >
            {i}
          </div>
        ))}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-800">
          TW
        </div>
      </div>
      <div className="flex w-60 flex-col bg-gray-700">
        <div className="flex h-12 items-center px-3 shadow-md">
          Tailwind CSS
        </div>
        <div className="flex-1 space-y-2 overflow-y-scroll p-3 no-scrollbar">
          {[...Array(40)].map((_, i) => (
            <p key={i}>channels {i}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-gray-600">
        <div className="flex h-12 items-center px-3 shadow-md">general</div>
        <div className="flex-1 space-y-4 overflow-y-scroll p-3 no-scrollbar">
          {[...Array(40)].map((_, i) => (
            <p className="px-3" key={i}>
              Message {i}. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam maxime vero, nobis cupiditate animi totam minus,
              amet sapiente omnis possimus laborum dolorem magnam obcaecati.
              Voluptas, dolore. Natus placeat architecto praesentium.
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
