import { useMemo, useState } from 'react'

const initialInspections = [
  {
    id: 'VST-2041',
    cliente: 'Condomínio Sol Nascente',
    tecnico: 'João Pereira',
    status: 'Concluída',
    extintores: 48,
    naoConformes: 3,
    data: '2026-02-20',
  },
  {
    id: 'VST-2042',
    cliente: 'Hospital Vida Plena',
    tecnico: 'Amanda Lima',
    status: 'Em andamento',
    extintores: 76,
    naoConformes: 5,
    data: '2026-02-24',
  },
]

const checklistBase = [
  'Selo do INMETRO válido',
  'Pressão dentro da faixa ideal',
  'Lacre de segurança intacto',
  'Acesso desobstruído',
  'Sinalização visível e correta',
]

function StatCard({ label, value, hint }) {
  return (
    <article className="card stat-card">
      <p className="muted">{label}</p>
      <h3>{value}</h3>
      <p className="hint">{hint}</p>
    </article>
  )
}

export default function App() {
  const [inspections, setInspections] = useState(initialInspections)
  const [form, setForm] = useState({
    cliente: '',
    tecnico: '',
    extintores: 1,
    naoConformes: 0,
  })

  const totals = useMemo(() => {
    const total = inspections.length
    const concluidas = inspections.filter((item) => item.status === 'Concluída').length
    const emAndamento = inspections.filter((item) => item.status === 'Em andamento').length
    const naoConformes = inspections.reduce((acc, item) => acc + item.naoConformes, 0)

    return { total, concluidas, emAndamento, naoConformes }
  }, [inspections])

  const addInspection = (event) => {
    event.preventDefault()

    const nextNumber = String(2040 + inspections.length + 1)
    const novaVistoria = {
      id: `VST-${nextNumber}`,
      cliente: form.cliente,
      tecnico: form.tecnico,
      status: 'Em andamento',
      extintores: Number(form.extintores),
      naoConformes: Number(form.naoConformes),
      data: new Date().toISOString().slice(0, 10),
    }

    setInspections((prev) => [novaVistoria, ...prev])
    setForm({ cliente: '', tecnico: '', extintores: 1, naoConformes: 0 })
  }

  return (
    <main className="app-shell">
      <header className="hero card">
        <p className="badge">Extinsete • Vistoria & Auditoria</p>
        <h1>Painel de controle para equipe técnica</h1>
        <p>
          Gerencie vistorias, registre não conformidades e acompanhe auditorias internas de
          extintores em um único lugar.
        </p>
      </header>

      <section className="stats-grid">
        <StatCard label="Vistorias no período" value={totals.total} hint="Últimos 30 dias" />
        <StatCard label="Concluídas" value={totals.concluidas} hint="Documentação finalizada" />
        <StatCard label="Em andamento" value={totals.emAndamento} hint="Aguardando conclusão" />
        <StatCard
          label="Não conformidades"
          value={totals.naoConformes}
          hint="Itens que exigem ação"
        />
      </section>

      <section className="grid-two-columns">
        <article className="card">
          <h2>Nova vistoria</h2>
          <form className="form-grid" onSubmit={addInspection}>
            <label>
              Cliente
              <input
                required
                value={form.cliente}
                onChange={(event) => setForm((prev) => ({ ...prev, cliente: event.target.value }))}
                placeholder="Ex: Shopping Primavera"
              />
            </label>
            <label>
              Técnico responsável
              <input
                required
                value={form.tecnico}
                onChange={(event) => setForm((prev) => ({ ...prev, tecnico: event.target.value }))}
                placeholder="Nome do técnico"
              />
            </label>
            <label>
              Quantidade de extintores
              <input
                type="number"
                min="1"
                required
                value={form.extintores}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, extintores: event.target.value }))
                }
              />
            </label>
            <label>
              Não conformidades encontradas
              <input
                type="number"
                min="0"
                required
                value={form.naoConformes}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, naoConformes: event.target.value }))
                }
              />
            </label>
            <button type="submit">Registrar vistoria</button>
          </form>
        </article>

        <article className="card">
          <h2>Checklist técnico padrão</h2>
          <ul className="checklist">
            {checklistBase.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="card">
        <h2>Histórico de vistorias e auditorias</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Técnico</th>
                <th>Extintores</th>
                <th>Não conformes</th>
                <th>Status</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {inspections.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.cliente}</td>
                  <td>{item.tecnico}</td>
                  <td>{item.extintores}</td>
                  <td>{item.naoConformes}</td>
                  <td>
                    <span className={`status ${item.status === 'Concluída' ? 'ok' : 'warn'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td>{new Date(item.data).toLocaleDateString('pt-BR')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
