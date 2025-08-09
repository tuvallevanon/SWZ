
export default function ClientDetail({ params }:{ params:{ id:string }}) {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Client: {params.id}</h1>
      <div className="card">
        <h3 className="font-semibold">Recent sets</h3>
        <ul className="list-disc list-inside">
          <li>Box Squat 20kg x8 (RPE7)</li>
          <li>Glute Bridge BW x10 (RPE6)</li>
        </ul>
      </div>
    </div>
  )
}
