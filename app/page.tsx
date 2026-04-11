export default function Home() {
  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>⚖️ Legal AI Munshi - Case Intake</h1>

      <h2>Client Details</h2>
      <input placeholder="Client Name" /><br /><br />
      <input placeholder="Mobile Number" /><br /><br />
      <input placeholder="Address" /><br /><br />

      <h2>Case Type</h2>
      <select>
        <option>Civil</option>
        <option>Revenue (UP)</option>
        <option>Land Dispute</option>
        <option>Other</option>
      </select>

      <h2>Documents Available</h2>
      <label><input type="checkbox" /> Khasra</label><br />
      <label><input type="checkbox" /> Khatauni</label><br />
      <label><input type="checkbox" /> Chakbandi Map</label><br />
      <label><input type="checkbox" /> CH-41</label><br />
      <label><input type="checkbox" /> CH-45</label><br />
      <label><input type="checkbox" /> Old Khatauni (Basta)</label><br />

      <h2>Notes / Missing Documents</h2>
      <textarea rows={4} cols={40} placeholder="Write inspection requirements..." />

      <br /><br />
      <button>Save Case</button>
      <button style={{ marginLeft: "10px" }}>Generate Summary</button>
    </main>
  );
}
