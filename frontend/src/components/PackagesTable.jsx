function PackagesTable({ packages }) {

  return (

    <div className="bg-slate-900 rounded-2xl overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-800">

          <tr>
            <th className="p-4 text-left">Package Name</th>
            <th className="p-4 text-left">Version</th>
          </tr>

        </thead>

        <tbody>

          {packages.map((pkg, index) => (

            <tr
              key={index}
              className="border-b border-slate-800 hover:bg-slate-800"
            >

              <td className="p-4">
                {pkg.name}
              </td>

              <td className="p-4">
                {pkg.version}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default PackagesTable;