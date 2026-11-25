import { imagemTmdb } from '@/lib/imagens';
import Trailer from './Trailer';
import './DetalheTitulo.css';

function ListaProvedores({ titulo, provedores }) {
  if (!provedores.length) return null;
  return (
    <>
      <p className="provedores-tipo">{titulo}</p>
      <div className="provedores">
        {provedores.map((p) => (
          <img
            key={p.provider_id}
            src={imagemTmdb(p.logo_path, 'w92')}
            alt={p.provider_name}
            title={p.provider_name}
            loading="lazy"
          />
        ))}
      </div>
    </>
  );
}

function OndeAssistir({ provedores }) {
  const temAlgum =
    provedores &&
    (provedores.assinatura.length || provedores.aluguel.length || provedores.compra.length);

  return (
    <div className="bloco">
      <h2>Onde assistir</h2>
      {temAlgum ? (
        <>
          <ListaProvedores titulo="Assinatura" provedores={provedores.assinatura} />
          <ListaProvedores titulo="Aluguel" provedores={provedores.aluguel} />
          <ListaProvedores titulo="Compra" provedores={provedores.compra} />
          <p className="fonte-provedores">Dados de disponibilidade no Brasil por JustWatch.</p>
        </>
      ) : (
        <p>
          Não encontramos este título em <span>nenhum streaming</span> no Brasil.
        </p>
      )}
    </div>
  );
}

/**
 * Layout comum das páginas de filme e de série.
 */
export default function DetalheTitulo({
  titulo,
  ano,
  posterPath,
  backdropPath,
  destaques,
  sinopse,
  elenco,
  infosRapidas,
  trailer,
  provedores,
}) {
  const backdrop = imagemTmdb(backdropPath, 'w1280');
  const poster = imagemTmdb(posterPath, 'w500');

  return (
    <article className="pagina-detalhe">
      <div
        className="backdrop"
        style={backdrop ? { backgroundImage: `url(${backdrop})` } : undefined}
      >
        <div className="content-main d-flex flex-column flex-md-row align-items-center justify-content-center p-3 gap-5">
          {poster && <img className="poster" src={poster} alt={`Pôster de ${titulo}`} />}
          <div className="info">
            <h1>
              {titulo} {ano && `(${ano})`}
            </h1>
            <div className="paragrafos">
              {destaques.map(({ icone, texto }) => (
                <p key={icone}>
                  <i className={`bi ${icone}`} aria-hidden="true"></i> {texto}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="content-sec container mt-4">
        <div className="row justify-content-center gap-4">
          <div className="col-12 col-lg-6 d-flex flex-column gap-4">
            <div className="bloco">
              <h2>Sinopse</h2>
              {sinopse ? (
                <p>{sinopse}</p>
              ) : (
                <p>
                  Sinopse <span>não disponível</span>, desculpe.
                </p>
              )}
            </div>

            <div className="bloco">
              <h2>Elenco principal</h2>
              {elenco.length > 0 ? (
                <ul>
                  {elenco.map((ator) => (
                    <li key={ator.credit_id ?? ator.id}>
                      {ator.name}
                      {ator.character && (
                        <>
                          {' '}
                          como <span>{ator.character}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>
                  Elenco <span>não disponível</span>, desculpe.
                </p>
              )}
            </div>

            <OndeAssistir provedores={provedores} />
          </div>

          <div className="col-12 col-lg-5 d-flex flex-column gap-4">
            <div className="bloco">
              <h2>Informações rápidas</h2>
              <ul className="mt-1 d-flex flex-column gap-1">
                {infosRapidas.map(({ rotulo, valor }) => (
                  <li key={rotulo}>
                    <span>{rotulo}:</span> {valor || 'Não informado'}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bloco">
              <h2>Trailer</h2>
              {trailer ? (
                <Trailer videoKey={trailer.key} titulo={titulo} />
              ) : (
                <p>
                  Trailer <span>não disponível</span>, desculpe.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
