function CISResultsTable({ checks }) {

  return (

    <div className="bg-slate-900 rounded-2xl overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-800">

          <tr>
            <th className="p-4 text-left">Check</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Evidence</th>
          </tr>

        </thead>

        <tbody>

          {checks.map((check, index) => (

            <tr
              key={index}
              className="border-b border-slate-800 hover:bg-slate-800"
            >

              <td className="p-4">
                {check.checkName}
              </td>

              <td className="p-4">

                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold
                  ${
                    check.status === "PASS"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {check.status}
                </span>

              </td>

              <td className="p-4">
                {check.evidence}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default CISResultsTable;