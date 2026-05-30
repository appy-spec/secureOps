function StatCard({ title, value, color }) {

  return (

    <div
      className={`p-6 rounded-2xl shadow-lg ${color} transition hover:scale-105`}
    >

      <h3 className="text-lg font-medium">
        {title}
      </h3>

      <p className="text-4xl font-bold mt-4">
        {value}
      </p>

    </div>
  );
}

export default StatCard;