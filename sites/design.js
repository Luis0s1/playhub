const DESIGN_SITES = [
  {
    "name": "PhotoCraft",
    "url": "https://getartcraft.com/apps/photocraft",
    "domain": "getartcraft.com",
    "category": "design",
    "price": "free",
    "description": "❗️Photoshop de código aberto free\nEditor de imagens open-source para desktop e navegador.",
    "tags": ["Edição", "Camadas"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "VectorCraft",
    "url": "https://getartcraft.com/apps/vectorcraft",
    "domain": "getartcraft.com",
    "category": "design",
    "price": "free",
    "description": "❗️Illustrator de código aberto free\nEditor de ilustração vetorial rápido escrito em Rust.",
    "tags": ["Vetor", "Ilustração"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "LightCraft",
    "url": "https://getartcraft.com/apps/lightcraft",
    "domain": "getartcraft.com",
    "category": "design",
    "price": "free",
    "description": "❗️Lightroom de código aberto free\nRevelador RAW e gerenciador de biblioteca de fotos.",
    "tags": ["RAW", "Fotografia"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Pixlr",
    "url": "https://pixlr.com",
    "domain": "pixlr.com",
    "category": "design",
    "price": "freemium",
    "description": "Editor de fotos online com IA e remoção de fundo.",
    "tags": ["Filtros IA", "Edição Web"],
    "iconData": ""
  },
  {
    "name": "Vectorpea",
    "url": "https://www.vectorpea.com",
    "domain": "vectorpea.com",
    "category": "design",
    "price": "free",
    "description": "Editor de arquivos vetoriais AI/SVG diretamente no navegador.",
    "tags": ["Vetor", "SVG/AI"],
    "iconData": ""
  },
  {
    "name": "Excalidraw",
    "url": "https://excalidraw.com",
    "domain": "excalidraw.com",
    "category": "design",
    "price": "free",
    "description": "Lousa virtual colaborativa estilo rascunho feito à mão.",
    "tags": ["Diagramas", "Lousa"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "GIMP",
    "url": "https://www.gimp.org",
    "domain": "gimp.org",
    "category": "design",
    "price": "free",
    "description": "Editor de imagem avançado e manipulação fotográfica gratuita.",
    "tags": ["Edição", "Photoshop Alt", "Camadas"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Inkscape",
    "url": "https://inkscape.org",
    "domain": "inkscape.org",
    "category": "design",
    "price": "free",
    "description": "Editor profissional de gráficos vetoriais no formato SVG.",
    "tags": ["Vetor", "SVG"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Krita",
    "url": "https://krita.org",
    "domain": "krita.org",
    "category": "design",
    "price": "free",
    "description": "Programa de pintura digital e ilustração profissional de código aberto.",
    "tags": ["Pintura Digital", "Ilustração"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Penpot",
    "url": "https://penpot.app",
    "domain": "penpot.app",
    "category": "design",
    "price": "free",
    "description": "Ferramenta open-source de design de interfaces e prototipagem.",
    "tags": ["UI/UX", "Figma Alt"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "OpenDesign",
    "url": "https://open-design.ai",
    "domain": "open-design.ai",
    "category": "design",
    "price": "free",
    "description": "Workspace colaborativo open-source de design e protótipos com IA.",
    "tags": ["UI/UX", "IA"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Plasmic",
    "url": "https://plasmic.app",
    "domain": "plasmic.app",
    "category": "design",
    "price": "freemium",
    "description": "Construtor visual de interfaces e páginas integrado a código React.",
    "tags": ["No-Code", "UI Builder"],
    "iconData": ""
  },
  {
    "name": "Avnac",
    "url": "https://github.com/xt42io/avnac",
    "domain": "github.com",
    "category": "design",
    "price": "free",
    "description": "Editor gráfico online de código aberto estilo Canva.",
    "tags": ["Artes", "Canva Alt"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Blender",
    "url": "https://www.blender.org",
    "domain": "blender.org",
    "category": "design",
    "price": "free",
    "description": "Suíte profissional de criação 3D, animação, modelagem e renderização.",
    "tags": ["3D", "Modelagem", "VFX"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Darktable",
    "url": "https://www.darktable.org",
    "domain": "darktable.org",
    "category": "design",
    "price": "free",
    "description": "Software open-source de fotografia e revelação não destrutiva de RAW.",
    "tags": ["RAW", "Fotografia"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "RawTherapee",
    "url": "https://www.rawtherapee.com",
    "domain": "rawtherapee.com",
    "category": "design",
    "price": "free",
    "description": "Processador avançado de imagens RAW e ajuste fino de cores.",
    "tags": ["RAW", "Fotografia"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Reactbits",
    "url": "https://reactbits.dev",
    "domain": "reactbits.dev",
    "category": "design",
    "price": "free",
    "description": "Biblioteca de componentes React animados e interativos para web.",
    "tags": ["React", "Componentes"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "SKILLRY",
    "url": "https://skillry.dev",
    "domain": "skillry.dev",
    "category": "design",
    "price": "free",
    "description": "Coleção de recursos, componentes e ferramentas para design e dev.",
    "tags": ["UI", "Recursos"],
    "iconData": ""
  },
  {
    "name": "Is Agentic",
    "url": "https://is-agentic.com",
    "domain": "is-agentic.com",
    "category": "design",
    "price": "free",
    "description": "Avaliador de compatibilidade e leitura de sites para agentes de IA.",
    "tags": ["Auditoria", "Agentes IA"],
    "iconData": ""
  }
];
