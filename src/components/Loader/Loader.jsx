import './Loader.css';

/**
 * Indicador de carregamento.
 * `inline` ocupa só o espaço do conteúdo; sem ele cobre a tela inteira.
 */
export default function Loader({ inline = false }) {
  return (
    <div
      className={inline ? 'loader loader-inline' : 'loader loader-tela'}
      role="status"
      aria-label="Carregando"
    >
      <div className="loading-wave">
        <div className="loading-bar" />
        <div className="loading-bar" />
        <div className="loading-bar" />
        <div className="loading-bar" />
      </div>
    </div>
  );
}
