function HostTable({ hosts }) {

  return (

    <div className="bg-slate-900 rounded-2xl shadow-lg overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-800">

          <tr>
            <th className="p-4 text-left">Hostname</th>
            <th className="p-4 text-left">OS</th>
            <th className="p-4 text-left">IP Address</th>
            <th className="p-4 text-left">Last Seen</th>
          </tr>

        </thead>

        <tbody>

          {hosts.map((host, index) => (

            <tr
              key={index}
              className="border-b border-slate-800 hover:bg-slate-800"
            >

              <td className="p-4">{host.hostname}</td>
              <td className="p-4">{host.os}</td>
              <td className="p-4">{host.ipAddress}</td>
              <td className="p-4">{host.lastSeen}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default HostTable;