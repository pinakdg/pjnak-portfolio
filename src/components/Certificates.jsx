import certs from "../data/certificates.js"

function CertCard({ title, issuer, date, credentialId, url, badge }) {
  return (
    <article className="rounded-2xl border border-gray-800 p-4 flex gap-4 items-center">
      {badge && (
        <img
          src={badge}
          alt={`${issuer} badge`}
          className="w-14 h-14 rounded-lg border border-gray-800 object-cover"
          loading="lazy"
        />
      )}
      <div className="min-w-0">
        <h3 className="font-semibold leading-tight truncate">{title}</h3>
        <p className="text-sm text-gray-400">{issuer} • {date}</p>
        <div className="text-xs text-gray-500">
          {credentialId && <span>Credential ID: {credentialId}</span>}
        </div>
        {url && (
          <p className="mt-2">
            <a className="underline text-sm" href={url} target="_blank" rel="noreferrer">
              View credential ↗
            </a>
          </p>
        )}
      </div>
    </article>
  )
}

export default function Certificates(){
  return (
    <section id="certs" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Certificates</h2>
      {certs.length === 0 ? (
        <p className="text-gray-400 text-sm">No certificates yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map(c => <CertCard key={`${c.title}-${c.credentialId || c.url}`} {...c} />)}
        </div>
      )}
    </section>
  )
}
