const stats = [
  { id: 1, name: "Regions", value: "6" },
  { id: 2, name: "Countries", value: "100+" },
  { id: 3, name: "Cities", value: "300+" },
  { id: 3, name: "Schools", value: "500+" },
];

export default function Stats() {
  return (
    <div className="container mx-auto bg-white py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base font-semibold">{stat.name}</dt>
              <dd className="order-first text-4xl font-semibold tracking-tight sm:text-6xl text-purple-500">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
