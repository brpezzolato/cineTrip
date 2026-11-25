'use client';

export default function VoltarAoTopo() {
  return (
    <div className="d-flex m-5 justify-content-center">
      <button
        type="button"
        className="btn btn-outline-warning"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Voltar ao topo <i className="bi bi-arrow-bar-up ps-2" aria-hidden="true"></i>
      </button>
    </div>
  );
}
