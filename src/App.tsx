import { useEffect, useMemo, useState, type ReactNode } from "react";

type IconName =
  | "book"
  | "grid"
  | "loans"
  | "users"
  | "catalog"
  | "chart"
  | "settings"
  | "bell"
  | "search"
  | "clock"
  | "arrow"
  | "check"
  | "alert"
  | "plus"
  | "more"
  | "chevron"
  | "moon"
  | "sun"
  | "mail";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    book: (
      <>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
        <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5z" />
      </>
    ),
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" />
      </>
    ),
    loans: (
      <>
        <path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3" />
        <path d="M11 13 21 3m0 0h-6m6 0v6" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    catalog: (
      <>
        <path d="m16 6 4 14M12 6v14M8 8v12M4 4v16" />
        <path d="M2 20h20" />
      </>
    ),
    chart: (
      <>
        <path d="M3 3v18h18" />
        <path d="m7 16 4-5 4 3 5-8" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.09A1.7 1.7 0 0 0 9 19.36a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.63 15 1.7 1.7 0 0 0 3.08 14H3v-4h.09A1.7 1.7 0 0 0 4.64 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.63h.01A1.7 1.7 0 0 0 10 3.08V3h4v.09A1.7 1.7 0 0 0 15 4.64a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.37 9v.01A1.7 1.7 0 0 0 20.92 10H21v4h-.09A1.7 1.7 0 0 0 19.4 15Z" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M13.7 21a2 2 0 0 1-3.4 0" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    arrow: <path d="m9 18 6-6-6-6" />,
    chevron: <path d="m6 9 6 6 6-6" />,
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.5 2.5L16 9" />
      </>
    ),
    alert: (
      <>
        <path d="M10.3 3.7 2.2 18a2 2 0 0 0 1.74 3h16.12a2 2 0 0 0 1.74-3L13.7 3.7a2 2 0 0 0-3.4 0Z" />
        <path d="M12 9v4m0 4h.01" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    more: (
      <>
        <circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="19" cy="12" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    moon: <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const navItems: { label: string; icon: IconName }[] = [
  { label: "Visão geral", icon: "grid" },
  { label: "Empréstimos", icon: "loans" },
  { label: "Leitores", icon: "users" },
  { label: "Acervo", icon: "catalog" },
  { label: "Relatórios", icon: "chart" },
];

const loans = [
  {
    title: "Torto Arado",
    author: "Itamar Vieira Junior",
    reader: "Marina Alves",
    initials: "MA",
    due: "Hoje, 17:30",
    status: "urgent",
    cover: "cover-yellow",
  },
  {
    title: "O Avesso da Pele",
    author: "Jeferson Tenório",
    reader: "João Pedro",
    initials: "JP",
    due: "Amanhã",
    status: "soon",
    cover: "cover-blue",
  },
  {
    title: "Ideias para adiar o fim do mundo",
    author: "Ailton Krenak",
    reader: "Beatriz Lima",
    initials: "BL",
    due: "18 Jun",
    status: "normal",
    cover: "cover-green",
  },
];

const readerContacts = [
  {
    name: "Marina Alves",
    initials: "MA",
    book: "Torto Arado",
    email: "marina.alves@aluno.edu.br",
    phone: "(11) 99842-3170",
  },
  {
    name: "João Pedro",
    initials: "JP",
    book: "O Avesso da Pele",
    email: "joao.pedro@aluno.edu.br",
    phone: "(11) 99163-4825",
  },
  {
    name: "Beatriz Lima",
    initials: "BL",
    book: "Ideias para adiar o fim do mundo",
    email: "beatriz.lima@aluno.edu.br",
    phone: "(11) 98724-6108",
  },
];

const reportMetrics = [
  { label: "Livros ganhos", value: 86, detail: "Doações e novas aquisições", icon: "plus" as IconName, tone: "gained" },
  { label: "Livros devolvidos", value: 312, detail: "No período selecionado", icon: "check" as IconName, tone: "returned" },
  { label: "Livros perdidos", value: 9, detail: "Aguardando reposição", icon: "alert" as IconName, tone: "lost" },
];

const categories: { name: string; description: string; count: number; icon: IconName; tone: string }[] = [
  { name: "Ciências", description: "Biologia, física e química", count: 428, icon: "chart", tone: "science" },
  { name: "Português", description: "Gramática, redação e literatura", count: 612, icon: "book", tone: "language" },
  { name: "Matemática", description: "Álgebra, geometria e cálculo", count: 356, icon: "grid", tone: "math" },
  { name: "História", description: "Brasil, mundo e sociedade", count: 289, icon: "clock", tone: "history" },
  { name: "Geografia", description: "Espaço, ambiente e território", count: 194, icon: "catalog", tone: "geography" },
  { name: "Artes", description: "Arte, música e expressão", count: 173, icon: "users", tone: "arts" },
  { name: "Tecnologia", description: "Computação e inovação", count: 241, icon: "settings", tone: "technology" },
  { name: "Outros", description: "Referências e temas diversos", count: 98, icon: "more", tone: "others" },
];

const catalogBooks = [
  { title: "A Ciência de Tudo", author: "Natalia Pasternak", category: "Ciências", code: "CIE-2041", availability: "Disponível" },
  { title: "Gramática Essencial", author: "Cegalla", category: "Português", code: "POR-1038", availability: "Disponível" },
  { title: "Matemática: Contexto e Aplicações", author: "Luiz Roberto Dante", category: "Matemática", code: "MAT-3012", availability: "Emprestado" },
  { title: "Brasil: Uma Biografia", author: "Lilia Schwarcz", category: "História", code: "HIS-2210", availability: "Disponível" },
];

function App() {
  const [activeNav, setActiveNav] = useState("Visão geral");
  const [audience, setAudience] = useState<"bibliotecario" | "aluno">("bibliotecario");
  const [remaining, setRemaining] = useState(2 * 60 * 60 + 14 * 60 + 37);
  const [notice, setNotice] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("bibliotech-theme") === "dark");
  const [largeText, setLargeText] = useState(() => localStorage.getItem("bibliotech-large-text") === "true");
  const [highContrast, setHighContrast] = useState(() => localStorage.getItem("bibliotech-high-contrast") === "true");
  const [reducedMotion, setReducedMotion] = useState(() => localStorage.getItem("bibliotech-reduced-motion") === "true");
  const [emergencyEmail, setEmergencyEmail] = useState(
    () => localStorage.getItem("bibliotech-emergency-email") || "biblioteca@instituicao.edu.br",
  );
  const [privacySettings, setPrivacySettings] = useState({
    anonymizedReports: true,
    consentRecords: true,
    automaticDeletion: false,
  });

  useEffect(() => {
    const timer = window.setInterval(
      () => setRemaining((value) => (value > 0 ? value - 1 : 0)),
      1000,
    );
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(null), 3500);
    return () => window.clearTimeout(timer);
  }, [notice]);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    localStorage.setItem("bibliotech-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.dataset.fontSize = largeText ? "large" : "default";
    document.documentElement.dataset.contrast = highContrast ? "high" : "default";
    document.documentElement.dataset.motion = reducedMotion ? "reduced" : "default";
    localStorage.setItem("bibliotech-large-text", String(largeText));
    localStorage.setItem("bibliotech-high-contrast", String(highContrast));
    localStorage.setItem("bibliotech-reduced-motion", String(reducedMotion));
  }, [largeText, highContrast, reducedMotion]);

  const countdown = useMemo(() => {
    const hours = Math.floor(remaining / 3600);
    const minutes = Math.floor((remaining % 3600) / 60);
    const seconds = remaining % 60;
    return [hours, minutes, seconds].map((value) => String(value).padStart(2, "0"));
  }, [remaining]);

  const sendReminder = () => {
    setNotice("Lembrete enviado para Marina Alves");
  };

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileMenu ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark"><Icon name="book" size={22} /></div>
          <div className="brand-name">Bibliotech</div>
        </div>

        <nav className="sidebar-nav" aria-label="Navegação principal">
          <div className="nav-label">MENU</div>
          {navItems.map((item) => (
            <button
              type="button"
              className={`nav-item ${activeNav === item.label ? "active" : ""}`}
              key={item.label}
              onClick={() => {
                setActiveNav(item.label);
                setMobileMenu(false);
              }}
            >
              <Icon name={item.icon} size={19} />
              <span>{item.label}</span>
              {item.label === "Empréstimos" && <span className="nav-badge">12</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button
            type="button"
            className={`nav-item ${activeNav === "Configurações" ? "active" : ""}`}
            onClick={() => {
              setActiveNav("Configurações");
              setMobileMenu(false);
            }}
          >
            <Icon name="settings" size={19} />
            <span>Configurações</span>
          </button>
          <div className="support-card">
            <div className="support-icon"><Icon name="book" size={18} /></div>
            <div className="support-title">Precisa de ajuda?</div>
            <div className="support-copy">Acesse a central de suporte</div>
            <button type="button" className="support-link">Falar com suporte <Icon name="arrow" size={15} /></button>
          </div>
        </div>
      </aside>

      {mobileMenu && <button className="backdrop" aria-label="Fechar menu" onClick={() => setMobileMenu(false)} />}

      <main className="main-area">
        <header className="topbar">
          <button className="menu-button" aria-label="Abrir menu" onClick={() => setMobileMenu(true)}>
            <span />
            <span />
            <span />
          </button>
          <div className="search-box">
            <Icon name="search" size={19} />
            <input aria-label="Buscar" placeholder="Buscar por título, autor ou leitor..." />
            <kbd>⌘ K</kbd>
          </div>
          <div className="top-actions">
            <button
              type="button"
              className="icon-button theme-button"
              aria-label={darkMode ? "Ativar modo claro" : "Ativar modo noturno"}
              title={darkMode ? "Modo claro" : "Modo noturno"}
              onClick={() => setDarkMode((current) => !current)}
            >
              <Icon name={darkMode ? "sun" : "moon"} size={20} />
            </button>
            <button type="button" className="icon-button" aria-label="Notificações">
              <Icon name="bell" size={20} />
              <span className="notification-dot" />
            </button>
            <div className="profile">
              <div className="avatar">AS</div>
              <div className="profile-copy">
                <div className="profile-name">Ana Souza</div>
                <div className="profile-role">Bibliotecária</div>
              </div>
              <Icon name="chevron" size={16} />
            </div>
          </div>
        </header>

        <div className="content">
          {activeNav === "Empréstimos" ? (
            <>
              <div className="welcome-row">
                <div>
                  <div className="eyebrow">ACOMPANHAMENTO DE PRAZOS</div>
                  <div className="page-title">Empréstimos</div>
                  <div className="page-subtitle">Consulte quem está com cada livro e envie avisos de devolução.</div>
                </div>
                <button type="button" className="primary-button" onClick={() => setNotice("Novo empréstimo iniciado")}>
                  <Icon name="plus" size={19} /> Novo empréstimo
                </button>
              </div>

              <section className="simple-page-card">
                <div className="section-header">
                  <div>
                    <div className="section-title">Livros emprestados</div>
                    <div className="section-subtitle">A lista exibe apenas o nome do leitor e o respectivo livro, sem dados de contato.</div>
                  </div>
                  <span className="record-count">{loans.length} empréstimos</span>
                </div>
                <div className="loan-notice-list">
                  <div className="loan-notice-head">
                    <span>LEITOR</span>
                    <span>LIVRO</span>
                    <span>VENCIMENTO</span>
                    <span />
                  </div>
                  {loans.map((loan) => (
                    <div className="loan-notice-row" key={loan.title}>
                      <div className="notice-reader">
                        <span>{loan.initials}</span>
                        <strong>{loan.reader}</strong>
                      </div>
                      <div className="notice-book">
                        <strong>{loan.title}</strong>
                        <span>{loan.author}</span>
                      </div>
                      <div className="due-cell"><Icon name="clock" size={16} />{loan.due}</div>
                      <button
                        type="button"
                        className="notice-button"
                        onClick={() => setNotice(`Aviso de devolução enviado para ${loan.reader}`)}
                      >
                        <Icon name="bell" size={16} /> Dar aviso
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            </>
          ) : activeNav === "Leitores" ? (
            <>
              <div className="welcome-row">
                <div>
                  <div className="eyebrow">LEITORES E CONTATOS</div>
                  <div className="page-title">Lista de contatos</div>
                  <div className="page-subtitle">Veja os dados do leitor e o livro que está com ele no momento.</div>
                </div>
              </div>

              <section className="reader-contact-grid" aria-label="Contatos dos leitores">
                {readerContacts.map((reader) => (
                  <article className="reader-contact-card" key={reader.email}>
                    <div className="reader-contact-top">
                      <div className="contact-avatar">{reader.initials}</div>
                      <div>
                        <div className="reader-contact-name">{reader.name}</div>
                        <div className="reader-contact-status">Empréstimo ativo</div>
                      </div>
                    </div>
                    <div className="reader-book">
                      <span className="reader-book-icon"><Icon name="book" size={18} /></span>
                      <div>
                        <small>LIVRO COM O LEITOR</small>
                        <strong>{reader.book}</strong>
                      </div>
                    </div>
                    <div className="contact-details">
                      <a href={`mailto:${reader.email}`}><Icon name="mail" size={16} />{reader.email}</a>
                      <span><Icon name="users" size={16} />{reader.phone}</span>
                    </div>
                  </article>
                ))}
              </section>
            </>
          ) : activeNav === "Relatórios" ? (
            <>
              <div className="welcome-row">
                <div>
                  <div className="eyebrow">MOVIMENTAÇÃO DO ACERVO</div>
                  <div className="page-title">Relatório de livros</div>
                  <div className="page-subtitle">Resumo mensal de livros ganhos, devolvidos e perdidos.</div>
                </div>
                <span className="report-period"><Icon name="clock" size={16} /> Junho de 2025</span>
              </div>

              <section className="report-grid" aria-label="Números do relatório">
                {reportMetrics.map((metric) => (
                  <article className={`report-card ${metric.tone}`} key={metric.label}>
                    <div className="report-icon"><Icon name={metric.icon} size={22} /></div>
                    <div className="report-label">{metric.label}</div>
                    <div className="report-value">{metric.value}</div>
                    <div className="report-detail">{metric.detail}</div>
                  </article>
                ))}
              </section>

              <section className="report-summary-card">
                <div>
                  <div className="section-title">Balanço do período</div>
                  <div className="section-subtitle">Comparativo consolidado da movimentação registrada neste mês.</div>
                </div>
                <div className="report-bars">
                  {reportMetrics.map((metric) => (
                    <div className="report-bar-row" key={metric.label}>
                      <div><span>{metric.label}</span><strong>{metric.value}</strong></div>
                      <div className="report-bar-track">
                        <span className={metric.tone} style={{ width: `${Math.max(8, (metric.value / 312) * 100)}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          ) : activeNav === "Acervo" ? (
            <>
              <div className="welcome-row catalog-heading">
                <div>
                  <div className="eyebrow">ORGANIZAÇÃO DO ACERVO</div>
                  <div className="page-title">Acervo por categorias</div>
                  <div className="page-subtitle">Encontre e gerencie os livros por área de conhecimento.</div>
                </div>
                <button type="button" className="primary-button" onClick={() => setNotice("Cadastro de novo livro iniciado")}>
                  <Icon name="plus" size={19} /> Adicionar livro
                </button>
              </div>

              <section className="catalog-overview">
                <div>
                  <span className="catalog-overview-label">TOTAL NO ACERVO</span>
                  <strong>2.391</strong>
                  <small>livros cadastrados</small>
                </div>
                <div className="catalog-divider" />
                <div className="catalog-metric">
                  <span>1.847</span>
                  <small>Disponíveis</small>
                </div>
                <div className="catalog-metric">
                  <span>498</span>
                  <small>Emprestados</small>
                </div>
                <div className="catalog-metric">
                  <span>46</span>
                  <small>Em manutenção</small>
                </div>
                <div className="catalog-progress">
                  <div><span>Disponibilidade</span><strong>77%</strong></div>
                  <div className="progress-track"><span /></div>
                </div>
              </section>

              <div className="catalog-section-heading">
                <div>
                  <div className="section-title">Categorias</div>
                  <div className="section-subtitle">Selecione uma área para explorar os títulos.</div>
                </div>
                <button
                  type="button"
                  className={`category-all ${selectedCategory === "Todas" ? "selected" : ""}`}
                  onClick={() => setSelectedCategory("Todas")}
                >
                  Todas as categorias
                </button>
              </div>

              <section className="categories-grid" aria-label="Categorias do acervo">
                {categories.map((category) => (
                  <button
                    type="button"
                    className={`category-card ${selectedCategory === category.name ? "selected" : ""}`}
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    <span className={`category-icon ${category.tone}`}><Icon name={category.icon} size={22} /></span>
                    <span className="category-copy">
                      <strong>{category.name}</strong>
                      <small>{category.description}</small>
                    </span>
                    <span className="category-count">{category.count}<small> livros</small></span>
                    <Icon name="arrow" size={17} />
                  </button>
                ))}
              </section>

              <section className="catalog-list-card">
                <div className="section-header">
                  <div>
                    <div className="section-title">{selectedCategory === "Todas" ? "Adicionados recentemente" : `Livros de ${selectedCategory}`}</div>
                    <div className="section-subtitle">Últimos títulos cadastrados no sistema.</div>
                  </div>
                  <button type="button" className="text-button">Ver catálogo completo <Icon name="arrow" size={16} /></button>
                </div>
                <div className="catalog-book-list">
                  {catalogBooks
                    .filter((book) => selectedCategory === "Todas" || book.category === selectedCategory)
                    .map((book, index) => (
                      <div className="catalog-book-row" key={book.code}>
                        <div className={`catalog-book-cover cover-${index + 1}`}><Icon name="book" size={20} /></div>
                        <div className="catalog-book-main"><strong>{book.title}</strong><span>{book.author}</span></div>
                        <span className="catalog-category">{book.category}</span>
                        <span className="catalog-code">{book.code}</span>
                        <span className={`availability ${book.availability === "Disponível" ? "available" : "borrowed"}`}>{book.availability}</span>
                        <button type="button" className="more-button" aria-label={`Opções para ${book.title}`}><Icon name="more" size={18} /></button>
                      </div>
                    ))}
                  {selectedCategory !== "Todas" && !catalogBooks.some((book) => book.category === selectedCategory) && (
                    <div className="empty-category">
                      <Icon name="catalog" size={26} />
                      <strong>Categoria organizada</strong>
                      <span>Os {categories.find((item) => item.name === selectedCategory)?.count} livros estão disponíveis no catálogo completo.</span>
                    </div>
                  )}
                </div>
              </section>
            </>
          ) : activeNav === "Configurações" ? (
            <>
              <div className="welcome-row settings-heading">
                <div>
                  <div className="eyebrow">PREFERÊNCIAS E SEGURANÇA</div>
                  <div className="page-title">Configurações</div>
                  <div className="page-subtitle">Personalize a experiência e gerencie a proteção dos dados da biblioteca.</div>
                </div>
                <div className="settings-status"><Icon name="check" size={17} /> Sistema protegido</div>
              </div>

              <div className="settings-layout">
                <div className="settings-main">
                  <section className="settings-card">
                    <div className="settings-card-header">
                      <div className="settings-header-icon accessibility"><Icon name="users" size={21} /></div>
                      <div>
                        <div className="section-title">Acessibilidade</div>
                        <div className="section-subtitle">Ajuste a interface para uma navegação mais confortável.</div>
                      </div>
                    </div>
                    <div className="settings-options">
                      <div className="setting-row">
                        <div>
                          <strong>Texto ampliado</strong>
                          <span>Aumenta o tamanho de textos e controles do sistema.</span>
                        </div>
                        <button
                          type="button"
                          className={`switch ${largeText ? "on" : ""}`}
                          role="switch"
                          aria-checked={largeText}
                          onClick={() => setLargeText((value) => !value)}
                        ><span /></button>
                      </div>
                      <div className="setting-row">
                        <div>
                          <strong>Alto contraste</strong>
                          <span>Reforça bordas e diferenças entre fundo e conteúdo.</span>
                        </div>
                        <button
                          type="button"
                          className={`switch ${highContrast ? "on" : ""}`}
                          role="switch"
                          aria-checked={highContrast}
                          onClick={() => setHighContrast((value) => !value)}
                        ><span /></button>
                      </div>
                      <div className="setting-row">
                        <div>
                          <strong>Reduzir movimentos</strong>
                          <span>Desativa animações e transições não essenciais.</span>
                        </div>
                        <button
                          type="button"
                          className={`switch ${reducedMotion ? "on" : ""}`}
                          role="switch"
                          aria-checked={reducedMotion}
                          onClick={() => setReducedMotion((value) => !value)}
                        ><span /></button>
                      </div>
                      <div className="setting-row">
                        <div>
                          <strong>Modo noturno</strong>
                          <span>Reduz o brilho da interface em ambientes escuros.</span>
                        </div>
                        <button
                          type="button"
                          className={`switch ${darkMode ? "on" : ""}`}
                          role="switch"
                          aria-checked={darkMode}
                          onClick={() => setDarkMode((value) => !value)}
                        ><span /></button>
                      </div>
                    </div>
                  </section>

                  <section className="settings-card">
                    <div className="settings-card-header">
                      <div className="settings-header-icon privacy"><Icon name="check" size={21} /></div>
                      <div>
                        <div className="section-title">Privacidade e LGPD</div>
                        <div className="section-subtitle">Controle como os dados pessoais são tratados e armazenados.</div>
                      </div>
                      <span className="lgpd-badge">Em conformidade</span>
                    </div>
                    <div className="privacy-notice">
                      <Icon name="catalog" size={20} />
                      <div>
                        <strong>Proteção de dados ativa</strong>
                        <span>Os dados de leitores são criptografados e acessíveis apenas por pessoas autorizadas.</span>
                      </div>
                    </div>
                    <div className="settings-options">
                      {[
                        {
                          key: "anonymizedReports" as const,
                          title: "Anonimizar dados em relatórios",
                          description: "Oculta nomes e identificadores pessoais nas análises.",
                        },
                        {
                          key: "consentRecords" as const,
                          title: "Registro de consentimento",
                          description: "Mantém o histórico de autorizações dos leitores.",
                        },
                        {
                          key: "automaticDeletion" as const,
                          title: "Exclusão automática de dados",
                          description: "Remove cadastros inativos após o período legal de retenção.",
                        },
                      ].map((setting) => (
                        <div className="setting-row" key={setting.key}>
                          <div>
                            <strong>{setting.title}</strong>
                            <span>{setting.description}</span>
                          </div>
                          <button
                            type="button"
                            className={`switch ${privacySettings[setting.key] ? "on" : ""}`}
                            role="switch"
                            aria-checked={privacySettings[setting.key]}
                            onClick={() =>
                              setPrivacySettings((current) => ({ ...current, [setting.key]: !current[setting.key] }))
                            }
                          ><span /></button>
                        </div>
                      ))}
                    </div>
                    <div className="privacy-actions">
                      <button type="button" className="outline-button" onClick={() => setNotice("Relatório de dados preparado para download")}>
                        Exportar relatório de dados
                      </button>
                      <button type="button" className="danger-text-button" onClick={() => setNotice("Solicitação de exclusão registrada")}>
                        Solicitar exclusão de dados
                      </button>
                    </div>
                  </section>
                </div>

                <aside className="settings-side">
                  <section className="contact-card">
                    <div className="contact-symbol"><Icon name="bell" size={23} /></div>
                    <div className="section-title">Contato de emergência</div>
                    <div className="contact-description">
                      Use este canal para avisos urgentes, problemas de segurança ou comunicação direta com a biblioteca.
                    </div>
                    <label className="field-label" htmlFor="emergency-email">E-mail da biblioteca</label>
                    <div className="email-field">
                      <Icon name="mail" size={17} />
                      <input
                        id="emergency-email"
                        type="email"
                        value={emergencyEmail}
                        onChange={(event) => setEmergencyEmail(event.target.value)}
                        aria-describedby="email-help"
                      />
                    </div>
                    <div className="field-help" id="email-help">Este endereço será usado nos atalhos de contato.</div>
                    <button
                      type="button"
                      className="contact-button"
                      onClick={() => {
                        localStorage.setItem("bibliotech-emergency-email", emergencyEmail);
                        window.location.href = `mailto:${emergencyEmail}?subject=${encodeURIComponent("Aviso urgente — Biblioteca")}`;
                      }}
                    >
                      Enviar e-mail agora <Icon name="arrow" size={17} />
                    </button>
                    <button
                      type="button"
                      className="save-contact-button"
                      onClick={() => {
                        localStorage.setItem("bibliotech-emergency-email", emergencyEmail);
                        setNotice("Contato da biblioteca salvo");
                      }}
                    >
                      Salvar contato
                    </button>
                    <div className="emergency-note">
                      <Icon name="alert" size={17} />
                      <span>Em risco imediato à integridade física, acione também os serviços públicos de emergência.</span>
                    </div>
                  </section>

                  <section className="data-summary-card">
                    <div className="data-summary-title"><Icon name="settings" size={17} /> Governança de dados</div>
                    <div className="data-summary-row"><span>Última revisão</span><strong>12 Jun 2025</strong></div>
                    <div className="data-summary-row"><span>Responsável LGPD</span><strong>Ana Souza</strong></div>
                    <div className="data-summary-row"><span>Registros protegidos</span><strong>1.284</strong></div>
                    <button type="button" className="text-button" onClick={() => setNotice("Política de privacidade aberta")}>
                      Ver política de privacidade <Icon name="arrow" size={15} />
                    </button>
                  </section>
                </aside>
              </div>
            </>
          ) : (
            <>
          <div className="welcome-row">
            <div>
              <div className="eyebrow">SEGUNDA-FEIRA, 17 DE JUNHO</div>
              <div className="page-title">Olá, Ana. Bom trabalho!</div>
              <div className="page-subtitle">Acompanhe o movimento da biblioteca e os próximos vencimentos.</div>
            </div>
            <button type="button" className="primary-button" onClick={() => setNotice("Novo empréstimo iniciado")}>
              <Icon name="plus" size={19} /> Novo empréstimo
            </button>
          </div>

          <section className="stats-grid" aria-label="Resumo">
            <div className="stat-card">
              <div className="stat-icon purple"><Icon name="loans" /></div>
              <div>
                <div className="stat-label">Empréstimos ativos</div>
                <div className="stat-value">148</div>
                <div className="stat-trend positive">↑ 8% <span>este mês</span></div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon green"><Icon name="check" /></div>
              <div>
                <div className="stat-label">Devolvidos hoje</div>
                <div className="stat-value">24</div>
                <div className="stat-trend neutral">6 aguardando baixa</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon orange"><Icon name="clock" /></div>
              <div>
                <div className="stat-label">Próximos do prazo</div>
                <div className="stat-value">12</div>
                <div className="stat-trend warning">3 vencem hoje</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon red"><Icon name="alert" /></div>
              <div>
                <div className="stat-label">Em atraso</div>
                <div className="stat-value">7</div>
                <div className="stat-trend danger">Requer atenção</div>
              </div>
            </div>
          </section>

          <section className="countdown-card">
            <div className="countdown-top">
              <div>
                <div className="section-kicker"><span className="pulse-dot" /> PRÓXIMO VENCIMENTO</div>
                <div className="countdown-title">O prazo termina em</div>
              </div>
              <div className="audience-toggle" aria-label="Visualização do aviso">
                <button
                  type="button"
                  className={audience === "bibliotecario" ? "selected" : ""}
                  onClick={() => setAudience("bibliotecario")}
                >
                  Bibliotecário
                </button>
                <button
                  type="button"
                  className={audience === "aluno" ? "selected" : ""}
                  onClick={() => setAudience("aluno")}
                >
                  Aluno
                </button>
              </div>
            </div>

            <div className="countdown-body">
              <div className="loan-highlight">
                <div className="book-cover-large">
                  <span>TORTO</span>
                  <span>ARADO</span>
                  <small>Itamar Vieira Junior</small>
                </div>
                <div className="loan-info">
                  <div className="loan-meta">EMPRÉSTIMO #BT-10928</div>
                  <div className="loan-title">Torto Arado</div>
                  <div className="loan-author">Itamar Vieira Junior</div>
                  <div className="reader-line">
                    <div className="reader-avatar">MA</div>
                    <div>
                      <div className="reader-name">Marina Alves</div>
                      <div className="reader-course">Arquitetura • 4º período</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timer-panel">
                <div className="timer">
                  {countdown.map((part, index) => (
                    <div className="timer-group" key={index}>
                      <div className="timer-value">{part}</div>
                      <div className="timer-label">{["HORAS", "MINUTOS", "SEGUNDOS"][index]}</div>
                    </div>
                  ))}
                </div>
                <div className={`audience-message ${audience}`}>
                  <Icon name={audience === "aluno" ? "bell" : "clock"} size={18} />
                  <div>
                    <strong>{audience === "aluno" ? "Seu livro vence hoje" : "Aviso automático programado"}</strong>
                    <span>
                      {audience === "aluno"
                        ? "Devolva até 17:30 ou renove pelo portal."
                        : "Marina receberá um lembrete em 14 minutos."}
                    </span>
                  </div>
                </div>
                <div className="countdown-actions">
                  <button type="button" className="secondary-button" onClick={() => setRemaining((time) => time + 86400)}>
                    Renovar por 1 dia
                  </button>
                  <button type="button" className="light-button" onClick={sendReminder}>
                    <Icon name="bell" size={17} /> Avisar agora
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="loans-card">
            <div className="section-header">
              <div>
                <div className="section-title">Próximos vencimentos</div>
                <div className="section-subtitle">Empréstimos que precisam de atenção nos próximos dias.</div>
              </div>
              <button type="button" className="text-button">Ver todos <Icon name="arrow" size={16} /></button>
            </div>
            <div className="loans-table">
              <div className="table-head">
                <span>LIVRO</span>
                <span>LEITOR</span>
                <span>VENCIMENTO</span>
                <span>STATUS</span>
                <span />
              </div>
              {loans.map((loan) => (
                <div className="table-row" key={loan.title}>
                  <div className="book-cell">
                    <div className={`mini-cover ${loan.cover}`}><Icon name="book" size={18} /></div>
                    <div><strong>{loan.title}</strong><span>{loan.author}</span></div>
                  </div>
                  <div className="reader-cell"><span>{loan.initials}</span>{loan.reader}</div>
                  <div className="due-cell"><Icon name="clock" size={16} />{loan.due}</div>
                  <div><span className={`status-pill ${loan.status}`}>{loan.status === "urgent" ? "Vence hoje" : loan.status === "soon" ? "Próximo" : "No prazo"}</span></div>
                  <button type="button" className="more-button" aria-label={`Opções para ${loan.title}`}><Icon name="more" size={18} /></button>
                </div>
              ))}
            </div>
          </section>
            </>
          )}
        </div>
      </main>

      {notice && (
        <div className="toast" role="status">
          <div className="toast-icon"><Icon name="check" size={18} /></div>
          <div><strong>Tudo certo!</strong><span>{notice}</span></div>
        </div>
      )}
    </div>
  );
}

export default App;
