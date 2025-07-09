const API_URL = "http://localhost:3000"; // ou o endereço da sua API

export async function fetchVulnerabilidade() {
  const res = await fetch(`${API_URL}/vulnerabilidade`);
  return res.json();
}

export async function fetchFome() {
  const res = await fetch(`${API_URL}/fome`);
  return res.json();
}

export async function fetchAlfabetizacao() {
  const res = await fetch(`${API_URL}/alfabetizacao`);
  return res.json();
}
export async function fetchAll() {
  const [vulnerabilidade, fome, alfabetizacao] = await Promise.all([
    fetchVulnerabilidade(),
    fetchFome(),
    fetchAlfabetizacao()
  ]);
  return { vulnerabilidade, fome, alfabetizacao };
}