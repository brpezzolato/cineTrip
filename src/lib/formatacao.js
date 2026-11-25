/** "2024-05-17" -> "17/05/2024" */
export function formatarData(data) {
  if (!data) return null;
  const [ano, mes, dia] = data.split('-');
  return dia && mes ? `${dia}/${mes}/${ano}` : ano;
}

export function anoDe(data) {
  return data ? data.slice(0, 4) : null;
}

export function formatarDolar(valor) {
  return valor
    ? valor.toLocaleString('pt-BR', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
    : null;
}

export function formatarNota(nota) {
  return typeof nota === 'number' ? nota.toFixed(1) : '–';
}
