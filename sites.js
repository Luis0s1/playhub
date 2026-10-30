const SITES = [
  {
    "name": "Astra Client",
    "url": "https://astraclientorg.github.io/",
    "domain": "astraclientorg.github.io",
    "category": "jogos",
    "price": "free",
    "description": "Cliente focado em jogos de navegador e utilitários de Minecraft.",
    "tags": ["Minecraft Web", "Jogos variados"],
    "iconData": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBhlDKpyeyHctJ97dP553UpRVZT7skDQn5996mfFnFLA&s=10"
  },
  {
    "name": "CrazyGames",
    "url": "https://www.crazygames.com.br",
    "domain": "crazygames.com.br",
    "category": "jogos",
    "price": "free",
    "description": "Coletânea de jogos 3D e casuais no navegador.",
    "tags": ["Jogos de Carro", "Multiplayer"],
    "iconData": ""
  },
  {
    "name": "CS Surf",
    "url": "https://surfd.net",
    "domain": "surfd.net",
    "category": "jogos",
    "price": "free",
    "description": "Modo surf de Counter-Strike diretamente no browser.",
    "tags": ["CS", "Surf"],
    "iconData": ""
  },
  {
    "name": "Diablo",
    "url": "https://johnimril.github.io/diablo_web/",
    "domain": "johnimril.github.io",
    "category": "jogos",
    "price": "free",
    "description": "O clássico Diablo 1 portado para WebAssembly.",
    "tags": ["RPG Clássico", "Dungeon Crawler"],
    "iconData": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYo7xNZ0bpcJSU7Q77vo5w5B-2x7YvmjT-Hqd24BHSNPITkUucTfKbD44e9vLSD9rn0EgGB94GFRssZWw4fYT4H6sEEEVvykt4zRPhHvKdpA&s=10"
  },
  {
    "name": "Friv",
    "url": "https://www.friv1000000000.net/",
    "domain": "friv1000000000.net",
    "category": "jogos",
    "price": "free",
    "description": "Biblioteca clássica de minigames para jogar online.",
    "tags": ["Jogos Flash", "Casuais"],
    "iconData": ""
  },
  {
    "name": "G-Meh Library",
    "url": "https://g-meh.com/library",
    "domain": "g-meh.com",
    "category": "aplicativos",
    "price": "free",
    "description": "Biblioteca de modding e downloads de conteúdo.",
    "tags": ["Mods", "Downloads"],
    "iconData": ""
  },
  {
    "name": "GTA (Deloskiy)",
    "url": "https://gta.deloskiy.pl",
    "domain": "gta.deloskiy.pl",
    "category": "jogos",
    "price": "free",
    "description": "Port e servidor de GTA para jogar no browser.",
    "tags": ["Mundo Aberto", "Ação"],
    "iconData": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24f_0_yEwTaDPxw8hbwAorVjuByohC_x727-KpQh2FA&s"
  },
  {
    "name": "GTA 5 (Story)",
    "url": "https://playgta5.net/start?mode=story",
    "domain": "playgta5.net",
    "category": "jogos",
    "price": "free",
    "description": "Modo história de GTA.\n‼️ativer a aceleração gráfica‼️ no navegador",
    "tags": ["Ação", "Missões"],
    "iconData": ""
  },
  {
    "name": "GTA Vice City",
    "url": "https://joncodeofficial.github.io/gta-vice-city-wasm",
    "domain": "joncodeofficial.github.io",
    "category": "jogos",
    "price": "free",
    "description": "GTA Vice City rodando via WebAssembly.",
    "tags": ["WASM", "Retrô"],
    "iconData": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtqzQ8c1lwq-P8SyjHAjjoVMfSTuwtTLXN8iOyurhyoA&s=10"
  },
  {
    "name": "Half-Life",
    "url": "https://pixelsuft.github.io/hl/",
    "domain": "pixelsuft.github.io",
    "category": "jogos",
    "price": "free",
    "description": "Half-Life 1 completo em HTML5 no navegador.",
    "tags": ["FPS", "História"],
    "iconData": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPXvN1ZqAyvyYxOw5yu89vo06EqlM2FB1hjzcgXWIhCzMmp1UjjiWty-ZETeQcKdeZBl5fOxWIQPH-vVlhIXLhKfkEPoVBpe-_pYzQp97Hw&s=10"
  },
  {
    "name": "Half-Life / CS 1.6",
    "url": "https://x8bitrain.github.io/webXash/",
    "domain": "x8bitrain.github.io",
    "category": "jogos",
    "price": "free",
    "description": "Engine Xash3D rodando Half-Life e Counter-Strike 1.6.",
    "tags": ["CS 1.6", "Multiplayer"],
    "iconData": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAPKOcMI9ZRR_9LShLrkbg-yU0EzI8UcnUxvb_wi8pg&s=10"
  },
  {
    "name": "Halo CE",
    "url": "https://mitchellhynes.com/halo",
    "domain": "mitchellhynes.com",
    "category": "jogos",
    "price": "free",
    "description": "Port de Halo: Combat Evolved no browser.",
    "tags": ["Halo", "FPS"],
    "iconData": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_JUU5Hy5hV2SHleJY_7hJsWbSrHpeIa0aA&s"
  },
  {
    "name": "Halo CE Mobile",
    "url": "https://hcemobile.com",
    "domain": "hcemobile.com",
    "category": "jogos",
    "price": "free",
    "description": "Versão otimizada de Halo CE para dispositivos móveis e PC.",
    "tags": ["Mobile", "FPS"],
    "iconData": ""
  },
  {
    "name": "Hedgewars",
    "url": "https://webwars.link",
    "domain": "webwars.link",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de estratégia por turnos estilo Worms.",
    "tags": ["Estratégia", "Turnos"],
    "iconData": ""
  },
  {
    "name": "Kino der Toten",
    "url": "https://theeagler1234-alt.github.io/kino-der-toten/",
    "domain": "theeagler1234-alt.github.io",
    "category": "jogos",
    "price": "free",
    "description": "O clássico mapa Kino der Toten no navegador.",
    "tags": ["Zombies", "BO1"],
    "iconData": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStUWV-Sx-XjkB67CYHRqayAgeAJSCgLLm7N5p8BMQaHQ&s=10"
  },
  {
    "name": "Modern Warfare 2",
    "url": "https://ovz-game-production.up.railway.app",
    "domain": "ovz-game-production.up.railway.app",
    "category": "jogos",
    "price": "free",
    "description": "Servidor de Modern Warfare 2 rodando na web.",
    "tags": ["CoD", "Multiplayer"],
    "iconData": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsLi0djFWNJjASFYjNpiePYIR1r-01zs1JUqbNTiHKNg&s=10"
  },
  {
    "name": "Moon",
    "url": "https://moon-zombies.pages.dev",
    "domain": "moon-zombies.pages.dev",
    "category": "jogos",
    "price": "free",
    "description": "Mapa Moon do modo Zombies no navegador.",
    "tags": ["BO1", "Zombies"],
    "iconData": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpyGmEJG2HuOp7JwcT5x84W1RgCvLTdxKzbwKWTP0zQ&s=10"
  },
  {
    "name": "Nite Games",
    "url": "https://nite.games",
    "domain": "nite.games",
    "category": "jogos",
    "price": "free",
    "description": "Portal de jogos leves de navegador.",
    "tags": ["Jogos Web", "Casual"],
    "iconData": ""
  },
  {
    "name": "Paper.io 2",
    "url": "https://paper-io.com",
    "domain": "paper-io.com",
    "category": "jogos",
    "price": "free",
    "description": "Jogo io multiplayer de conquistar territórios.",
    "tags": ["Multiplayer", "Competitivo"],
    "iconData": ""
  },
  {
    "name": "PES 6",
    "url": "https://pes6.optijuegos.net",
    "domain": "pes6.optijuegos.net",
    "category": "jogos",
    "price": "free",
    "description": "PES 6 no navegador e modo online \nPro Evolution Soccer 6",
    "tags": ["Futebol", "Esportes"],
    "iconData": ""
  },
  {
    "name": "Poki",
    "url": "https://poki.com.br",
    "domain": "poki.com.br",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma de jogos HTML5 online gratuitos.",
    "tags": ["Subway Surfers", "Casuais"],
    "iconData": ""
  },
  {
    "name": "Quake 1",
    "url": "https://q1.pieter.com",
    "domain": "q1.pieter.com",
    "category": "jogos",
    "price": "free",
    "description": "Quake 1 rodando em HTML5 no browser.",
    "tags": ["FPS", "Clássico"],
    "iconData": ""
  },
  {
    "name": "Quake 2",
    "url": "https://q2.pieter.com",
    "domain": "q2.pieter.com",
    "category": "jogos",
    "price": "free",
    "description": "Quake 2 completo direto no navegador.",
    "tags": ["FPS", "WebAssembly"],
    "iconData": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8rTulZ2-oVI3llXw9XLccAjIEmFkfAvWrw1raKo4rCw&s=10"
  },
  {
    "name": "Quake 3",
    "url": "https://q3.pieter.com",
    "domain": "q3.pieter.com",
    "category": "jogos",
    "price": "free",
    "description": "Quake 3 Arena multiplayer online no navegador.",
    "tags": ["Arena", "Multiplayer"],
    "iconData": ""
  },
  {
    "name": "RomsPure",
    "url": "https://romspure.cc",
    "domain": "romspure.cc",
    "category": "jogos",
    "price": "free",
    "description": "Catálogo de ROMs e emuladores clássicos.",
    "tags": ["ROMs", "Emuladores"],
    "iconData": ""
  },
  {
    "name": "Simpsons: Hit & Run",
    "url": "https://shar-wasm.cjoseph.workers.dev/?skipmovie",
    "domain": "shar-wasm.cjoseph.workers.dev",
    "category": "jogos",
    "price": "free",
    "description": "The Simpsons: Hit & Run via WebAssembly. Gta dos simpsons",
    "tags": ["Simpsons", "WASM"],
    "iconData": ""
  },
  {
    "name": "Skate Rust",
    "url": "https://global-terror.net",
    "domain": "global-terror.net",
    "category": "jogos",
    "price": "free",
    "description": "Port e servidor de skate/ação online.",
    "tags": ["Ação", "Skate"],
    "iconData": ""
  },
  {
    "name": "SMB Games",
    "url": "https://www.smbgames.be/",
    "domain": "smbgames.be",
    "category": "jogos",
    "price": "free",
    "description": "Jogos retrô da Nintendo emulados no browser.",
    "tags": ["Mario", "Retro"],
    "iconData": ""
  },
  {
    "name": "Subway Surfers",
    "url": "https://morrowplay.com/games/subway-surfers/",
    "domain": "morrowplay.com",
    "category": "jogos",
    "price": "free",
    "description": "O clássico jogo de corrida infinita Subway Surfers.",
    "tags": ["Runner", "Casual"],
    "iconData": ""
  },
  {
    "name": "Super Mario 64",
    "url": "https://supermario64free.github.io/",
    "domain": "supermario64free.github.io",
    "category": "jogos",
    "price": "free",
    "description": "Super Mario 64 completo jogável em HTML5.",
    "tags": ["Nintendo 64", "SM64"],
    "iconData": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz5E6vUyKBQOMut0-EWPCn4loEvK4Isu20OvuZqcmslA&s=10"
  },
  {
    "name": "Tribals.io",
    "url": "https://tribals.io",
    "domain": "tribals.io",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de sobrevivência multiplayer estilo Rust.",
    "tags": ["Sobrevivência", "Crafting"],
    "iconData": ""
  },
  {
    "name": "Unreal Tournament",
    "url": "https://ut.pieter.com",
    "domain": "ut.pieter.com",
    "category": "jogos",
    "price": "free",
    "description": "Unreal Tournament clássico rodando na web.",
    "tags": ["Arena", "FPS"],
    "iconData": ""
  },
  {
    "name": "Wasm Arcade",
    "url": "https://wasmarcade.com/Fan",
    "domain": "wasmarcade.com",
    "category": "jogos",
    "price": "free",
    "description": "Coletânea de jogos em WebAssembly.",
    "tags": ["Arcade", "WASM"],
    "iconData": ""
  },
  {
    "name": "gta (deloskiyt)",
    "url": "https://gta.deloskiyt.pl/",
    "domain": "gta.deloskiyt.pl",
    "category": "jogos",
    "price": "free",
    "description": "Port e servidor de GTA jogável diretamente pelo navegador.",
    "tags": ["gta"],
    "iconData": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8zd2iJxjfcagqJo-kCtw2fnkm86G6_ZuWMkXNGWpgqQ&s=10"
  },
  {
    "name": "bo1 zombies (kino)",
    "url": "https://vel.gg/boiz/kino",
    "domain": "vel.gg",
    "category": "jogos",
    "price": "free",
    "description": "Modo Zombies do Black Ops 1 com o mapa Kino der Toten no browser.",
    "tags": ["zombies"],
    "iconData": ""
  },
  {
    "name": "skate 3",
    "url": "https://skate.aaddpp.lol/",
    "domain": "skate.aaddpp.lol",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de skate 3D com manobras e física jogável no navegador.",
    "tags": ["skate"],
    "iconData": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTUxEffrInBgNxt6xk4DumHCBiNXifrghuduriK9yazaXkoCpwYKpsBWQEQbl8_Y0lWOh80riXZTw5ujBlJ9t5o9_xrcRzZCnyWpX8Id7osQ&s=10"
  },
  {
    "name": "fifa street 2",
    "url": "https://fifastreet2.fun/",
    "domain": "fifastreet2.fun",
    "category": "jogos",
    "price": "free",
    "description": "Clássico jogo de futebol de rua com dribles e partidas dinâmicas online.",
    "tags": ["futebol"],
    "iconData": ""
  },
  {
    "name": "dragon ball bt3",
    "url": "https://dragonballbt3.on",
    "domain": "dragonballbt3.on",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de luta em arena 3D com os personagens de Dragon Ball.",
    "tags": ["luta"],
    "iconData": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7nvxh9sRMxAGpaRPvxYBCAyM2IVcVwNVUHBMGz-fVg&s=10"
  },
  {
    "name": "4Download",
    "url": "https://4download.net",
    "domain": "4download.net",
    "category": "aplicativos",
    "price": "free",
    "description": "Portal de downloads de softwares e aplicativos.",
    "tags": ["Apps", "Softwares"],
    "iconData": ""
  },
  {
    "name": "Nuvio",
    "url": "https://nuvio.tv",
    "domain": "nuvio.tv",
    "category": "filmes",
    "price": "free",
    "description": "Site de filmes e séries em TV, Celular, PC. \nMenos no navegador",
    "tags": [],
    "iconData": ""
  },
  {
    "name": "Gta V (Five Play)",
    "url": "https://v2.fiveplay.lol/",
    "domain": "v2.fiveplay.lol",
    "category": "jogos",
    "price": "free",
    "description": "Gta V   no navegador 🌐, \n‼️ ativei a aceleração gráfica ‼️\n modo histórico 🏛 mundo 🌎 aberto",
    "tags": [],
    "iconData": ""
  },
  {
    "name": "Cheese Cube",
    "url": "https://cheese-cube.pages.dev",
    "domain": "cheese-cube.pages.dev",
    "category": "jogos",
    "price": "free",
    "description": "Mapa personalizado Cheese Cube de Zombies no navegador.",
    "tags": ["Custom Map", "Desafio"],
    "iconData": "",
    "isHidden": true
  },
  {
    "name": "GTA 5",
    "url": "https://web.archive.org/web/20261006055917/https://playgta5.com/",
    "domain": "web.archive.org",
    "category": "jogos",
    "price": "free",
    "description": "Versão de GTA 5 rodando na web via emulação.",
    "tags": ["Mundo Aberto", "3D"],
    "iconData": "",
    "isHidden": true
  },
  {
    "name": "Radiant Optimizer",
    "url": "https://radiantoptimizer.net/",
    "domain": "radiantoptimizer.net",
    "category": "jogos",
    "price": "free",
    "description": "Site de de navegador.",
    "tags": ["Otimização", "Utils"],
    "iconData": ""
  },
  {
    "name": "browser game",
    "url": "https://browsergame.online/",
    "domain": "browsergame.online",
    "category": "jogos",
    "price": "free",
    "description": "Site de jogos de navegador.",
    "tags": [],
    "iconData": ""
  },
  {
    "name": "Clumsy Bird",
    "url": "https://ellisonleao.github.io/clumsy-bird/",
    "domain": "ellisonleao.github.io",
    "category": "jogos",
    "price": "free",
    "description": "Clone open-source em HTML5 do famoso Flappy Bird.",
    "tags": [],
    "iconData": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKMask2F-YzMeg9WID24DONM9Ba9QTIKb2phoqfEYOOw&s=10",
    "opensource": true
  },
  {
    "name": "2048",
    "url": "https://gabrielecirulli.github.io/2048/",
    "domain": "gabrielecirulli.github.io",
    "category": "jogos",
    "price": "free",
    "description": "O clássico jogo de raciocínio lógico e combinação de blocos numéricos.",
    "tags": ["2048", "Puzzle", "Lógica", "Clássico"],
    "iconData": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6DErQoYQSuwHYGO-YNmKounQAgmD9zU2OJYeANxKjyg&s=10",
    "opensource": true
  },
  {
    "name": "20 Euros",
    "url": "https://jatekos101.github.io/20euros/",
    "domain": "jatekos101.github.io",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de estratégia, tipo 2048 e com moedas.",
    "tags": [],
    "iconData": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCIIgjE7qZKKmBJcbLWrT9VpIKS-d3hy1ZmRE17Y0msQ&s",
    "opensource": true
  },
  {
    "name": "Cubiks 2048 3D",
    "url": "https://kshitij-banerjee.github.io/Cubiks-2048/",
    "domain": "kshitij-banerjee.github.io",
    "category": "jogos",
    "price": "free",
    "description": "Versão 3D estilizada do jogo 2048 em um cubo interativo.",
    "tags": [],
    "iconData": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRzV3lL65p8VJo8RyB_UCdvZkQJTLsQLyhpEt9QX4H2Q&s=10",
    "opensource": true
  },
  {
    "name": "EmulatorJS",
    "url": "https://emulatorjs.org",
    "domain": "emulatorjs.org",
    "category": "jogos",
    "price": "free",
    "description": "Sistema de emulação retro em WebAssembly e JavaScript.",
    "tags": [],
    "iconData": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGfZYmygCOPdv6i6sb0h3dPWEr9Ww5fySSADKnLNL5g&s=10",
    "opensource": true
  },
  {
    "name": "VLC",
    "url": "https://www.videolan.org/vlc",
    "domain": "videolan.org",
    "category": "video",
    "price": "free",
    "description": "Reprodutor de mídia universal para múltiplos formatos de vídeo e áudio.",
    "tags": ["VLC"],
    "iconData": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-o1upE4Q7RkxCAhrAriZK6-HkkkpSgshB9XeZ9Gv-KA&s=10",
    "opensource": true
  },
  {
    "name": "OpenCut",
    "url": "https://opencut.app",
    "domain": "opencut.app",
    "category": "video",
    "price": "free",
    "description": "❗️CapCut de código aberto web 🌐\nEditor de vídeo web leve e rápido no navegador.",
    "tags": ["Edição Web", "Cortes"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "EffectCraft",
    "url": "https://getartcraft.com/apps/effectcraft",
    "domain": "getartcraft.com",
    "category": "video",
    "price": "free",
    "description": "❗️After Effects de código aberto free\nFerramenta de video online.",
    "tags": [],
    "iconData": ""
  },
  {
    "name": "FilmCraft",
    "url": "https://getartcraft.com/apps/filmcraft",
    "domain": "getartcraft.com",
    "category": "video",
    "price": "free",
    "description": "❗️Premiere de código aberto free\nFerramenta de video online.",
    "tags": [],
    "iconData": ""
  },
  {
    "name": "PhotoCraft",
    "url": "https://getartcraft.com/apps/photocraft",
    "domain": "getartcraft.com",
    "category": "design",
    "price": "free",
    "description": "❗️Photoshop de código aberto free \nFerramenta de design online.",
    "tags": [],
    "iconData": ""
  },
  {
    "name": "VectorCraft",
    "url": "https://getartcraft.com/apps/vectorcraft",
    "domain": "getartcraft.com",
    "category": "design",
    "price": "free",
    "description": "❗️Illustrator de código aberto free \nFerramenta de design online.",
    "tags": [],
    "iconData": ""
  },
  {
    "name": "LightCraft",
    "url": "https://getartcraft.com/apps/lightcraft",
    "domain": "getartcraft.com",
    "category": "design",
    "price": "free",
    "description": "❗️Lightroom de código aberto free \nFerramenta de design online.",
    "tags": [],
    "iconData": ""
  },
  {
    "name": "VoiceStudio",
    "url": "https://voicestudio.sh",
    "domain": "voicestudio.sh",
    "category": "audio",
    "price": "free",
    "description": "❗️ElevenLabs de código aberto free \nFerramenta de audio online.",
    "tags": [],
    "iconData": ""
  },
  {
    "name": "Snapzy",
    "url": "https://snapzy.app",
    "domain": "snapzy.app",
    "category": "video",
    "price": "free",
    "description": "❗️CleanShot X de código aberto free \nFerramenta de video online.",
    "tags": [],
    "iconData": ""
  },
  {
    "name": "Emupedia",
    "url": "https://emupedia.net",
    "domain": "emupedia.net",
    "category": "jogos",
    "price": "free",
    "description": "Preservação de jogos e sistemas operacionais retrô na web.\n\n\n\n https://emupedia.net/beta/emuos/\n https://emupedia.org/beta/emuos/\n https://emupedia.games/beta/emuos/\n https://emuos.net/beta/emuos/\n https://emuos.org/beta/emuos/\n https://emuos.games/beta/emuos/",
    "tags": ["Emupedia", "Retrô", "Windows 95", "Preservação"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Canva",
    "url": "https://www.canva.com",
    "domain": "canva.com",
    "category": "aplicativos",
    "price": "freemium",
    "description": "Plataforma de design gráfico simples e rápida com IA.",
    "tags": ["Artes", "Templates"],
    "iconData": ""
  },
  {
    "name": "Gratos App",
    "url": "https://gratos.app/",
    "domain": "gratos.app",
    "category": "aplicativos",
    "price": "free",
    "description": "Plataforma de aplicativos e serviços web gratuitos.",
    "tags": ["Apps", "Serviços"],
    "iconData": ""
  },
  {
    "name": "LibreCrawl",
    "url": "https://librecrawl.com",
    "domain": "librecrawl.com",
    "category": "aplicativos",
    "price": "free",
    "description": "Extrator de dados e web crawler de código aberto.",
    "tags": ["Data Mining", "Crawler"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "OpenSEO",
    "url": "https://openseo.so",
    "domain": "openseo.so",
    "category": "aplicativos",
    "price": "free",
    "description": "Ferramenta open-source para análise e otimização de SEO.",
    "tags": ["SEO", "Análise"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Photopea",
    "url": "https://www.photopea.com",
    "domain": "photopea.com",
    "category": "aplicativos",
    "price": "freemium",
    "description": "Editor de imagens avançado no navegador estilo Photoshop.",
    "tags": ["PSD", "Edição"],
    "iconData": ""
  },
  {
    "name": "Postiz",
    "url": "https://postiz.com",
    "domain": "postiz.com",
    "category": "aplicativos",
    "price": "free",
    "description": "Gerenciador e agendador open-source de redes sociais.",
    "tags": ["Social Media", "Agendamento"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Solve Calc",
    "url": "https://solvecalc.net/",
    "domain": "solvecalc.net",
    "category": "aplicativos",
    "price": "free",
    "description": "Calculadora científica e matemática avançada.",
    "tags": ["Cálculos", "Equações"],
    "iconData": ""
  },
  {
    "name": "HuraWatch",
    "url": "https://hurawatch.vip",
    "domain": "hurawatch.vip",
    "category": "filmes",
    "price": "free",
    "description": "Site para assistir filmes e séries online.",
    "tags": ["Filmes", "Séries"],
    "iconData": ""
  },
  {
    "name": "Pluto TV",
    "url": "https://pluto.tv",
    "domain": "pluto.tv",
    "category": "filmes",
    "price": "free",
    "description": "Streaming gratuito com canais ao vivo e sob demanda.",
    "tags": ["Ao Vivo", "Grátis"],
    "iconData": ""
  },
  {
    "name": "Prime Shows",
    "url": "https://primeshows.org",
    "domain": "primeshows.org",
    "category": "filmes",
    "price": "free",
    "description": "Catálogo de séries e programas de TV.",
    "tags": ["Séries", "Streaming"],
    "iconData": ""
  },
  {
    "name": "SolarMovie",
    "url": "https://solarmovieru.com/home.html",
    "domain": "solarmovieru.com",
    "category": "filmes",
    "price": "free",
    "description": "Plataforma de streaming de filmes e séries.",
    "tags": ["Cinema", "Lançamentos"],
    "iconData": ""
  },
  {
    "name": "Tubi TV",
    "url": "https://tubitv.com",
    "domain": "tubitv.com",
    "category": "filmes",
    "price": "free",
    "description": "Serviço de streaming gratuito com catálogo variado.",
    "tags": ["Filmes", "Séries"],
    "iconData": ""
  },
  {
    "name": "Vioox",
    "url": "https://vioox.vc/home",
    "domain": "vioox.vc",
    "category": "filmes",
    "price": "free",
    "description": "Assistir filmes e lançamentos online.",
    "tags": ["Streaming", "HD"],
    "iconData": ""
  },
  {
    "name": "WatchSeries",
    "url": "https://watchseries.bar/home",
    "domain": "watchseries.bar",
    "category": "filmes",
    "price": "free",
    "description": "Séries de TV e episódios completos.",
    "tags": ["Episódios", "Séries"],
    "iconData": ""
  },
  {
    "name": "ChatGPT",
    "url": "https://chatgpt.com",
    "domain": "chatgpt.com",
    "category": "ia",
    "price": "freemium",
    "description": "Inteligência artificial generativa de texto da OpenAI.",
    "tags": ["Texto", "Código"],
    "iconData": ""
  },
  {
    "name": "Claude AI",
    "url": "https://claude.ai",
    "domain": "claude.ai",
    "category": "ia",
    "price": "freemium",
    "description": "Assistente de inteligência artificial avançado da Anthropic.",
    "tags": ["Análise", "Texto longo"],
    "iconData": ""
  },
  {
    "name": "Gemini",
    "url": "https://gemini.google.com",
    "domain": "gemini.google.com",
    "category": "ia",
    "price": "freemium",
    "description": "Inteligência artificial do Google integrada à web.",
    "tags": ["Busca", "Multimodal"],
    "iconData": ""
  },
  {
    "name": "Perplexity AI",
    "url": "https://www.perplexity.ai",
    "domain": "perplexity.ai",
    "category": "ia",
    "price": "freemium",
    "description": "Buscador inteligente com inteligência artificial e citações.",
    "tags": ["Pesquisa", "Fontes"],
    "iconData": ""
  },
  {
    "name": "Poe AI",
    "url": "https://poe.com",
    "domain": "poe.com",
    "category": "ia",
    "price": "freemium",
    "description": "Plataforma de acesso a múltiplos modelos de IA e chatbots.",
    "tags": ["Multi-modelos", "Bots"],
    "iconData": ""
  },
  {
    "name": "LM Arena",
    "url": "https://lmarena.ai",
    "domain": "lmarena.ai",
    "category": "ia",
    "price": "free",
    "description": "Plataforma de comparação e testes cego entre IAs.",
    "tags": ["LLMs", "Benchmarking"],
    "iconData": ""
  },
  {
    "name": "Ollama",
    "url": "https://ollama.com",
    "domain": "ollama.com",
    "category": "ia",
    "price": "free",
    "description": "Ferramenta para executar modelos de linguagem (LLMs) localmente.",
    "tags": ["Local LLM", "Terminal"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Open WebUI",
    "url": "https://openwebui.com",
    "domain": "openwebui.com",
    "category": "ia",
    "price": "free",
    "description": "Interface gráfica para interagir com modelos de IA locais.",
    "tags": ["UI", "Chat"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Midjourney",
    "url": "https://www.midjourney.com",
    "domain": "midjourney.com",
    "category": "ia",
    "price": "pago",
    "description": "Geração de imagens fotorrealistas e arte via inteligência artificial.",
    "tags": ["Arte IA", "Imagens"],
    "iconData": ""
  },
  {
    "name": "CapCut Web",
    "url": "https://www.capcut.com/editor",
    "domain": "capcut.com",
    "category": "video",
    "price": "freemium",
    "description": "Editor de vídeo completo no navegador com IA e legendas automáticas.",
    "tags": ["Legendas", "Efeitos IA"],
    "iconData": ""
  },
  {
    "name": "Clipchamp",
    "url": "https://clipchamp.com",
    "domain": "clipchamp.com",
    "category": "video",
    "price": "freemium",
    "description": "Editor de vídeo web da Microsoft simples e intuitivo.",
    "tags": ["Edição Rápida", "Microsoft"],
    "iconData": ""
  },
  {
    "name": "Cap",
    "url": "https://cap.so",
    "domain": "cap.so",
    "category": "video",
    "price": "free",
    "description": "Alternativa open-source ao Loom para gravação de tela.",
    "tags": ["Gravação", "Loom Alternative"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "HandBrake",
    "url": "https://handbrake.fr",
    "domain": "handbrake.fr",
    "category": "video",
    "price": "free",
    "description": "Conversor e transcodificador de vídeo potente.",
    "tags": ["Conversor", "Codecs"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Kdenlive",
    "url": "https://kdenlive.org",
    "domain": "kdenlive.org",
    "category": "video",
    "price": "free",
    "description": "Editor de vídeo não-linear multifaixa open-source.",
    "tags": ["Edição", "Multifaixa"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "OBS Studio",
    "url": "https://obsproject.com",
    "domain": "obsproject.com",
    "category": "video",
    "price": "free",
    "description": "O mais popular software de gravação de tela e streaming ao vivo.",
    "tags": ["OBS Studio", "Live", "Gravação", "Streaming"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Shotcut",
    "url": "https://shotcut.org",
    "domain": "shotcut.org",
    "category": "video",
    "price": "free",
    "description": "Editor de vídeo open-source multiplataforma.",
    "tags": ["Edição", "Filtros"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Pixlr",
    "url": "https://pixlr.com",
    "domain": "pixlr.com",
    "category": "design",
    "price": "freemium",
    "description": "Editor de fotos online com IA e ferramentas de remoção de fundo.",
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
    "tags": ["Excalidraw"],
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
    "tags": ["GIMP", "Edição", "Photoshop Alt", "Camadas"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Inkscape",
    "url": "https://inkscape.org",
    "domain": "inkscape.org",
    "category": "design",
    "price": "free",
    "description": "Editor de gráficos vetoriais no formato SVG.",
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
    "tags": ["Krita"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Penpot",
    "url": "https://penpot.app",
    "domain": "penpot.app",
    "category": "design",
    "price": "free",
    "description": "Ferramenta de design de interfaces e prototipagem estilo Figma.",
    "tags": ["Penpot"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Audacity",
    "url": "https://www.audacityteam.org",
    "domain": "audacityteam.org",
    "category": "audio",
    "price": "free",
    "description": "Gravador e editor de áudio multipista profissional.",
    "tags": ["Audacity", "Áudio", "Edição", "Gravador"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "ElevenLabs",
    "url": "https://elevenlabs.io",
    "domain": "elevenlabs.io",
    "category": "audio",
    "price": "freemium",
    "description": "Geração de voz ultra-realista por IA e clonagem vocal.",
    "tags": ["Text-to-Speech", "Clonagem"],
    "iconData": ""
  },
  {
    "name": "LMMS",
    "url": "https://lmms.io",
    "domain": "lmms.io",
    "category": "audio",
    "price": "free",
    "description": "Criação de música e batidas eletrônicas.",
    "tags": ["Música", "Beats"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Appwrite",
    "url": "https://appwrite.io",
    "domain": "appwrite.io",
    "category": "dev",
    "price": "free",
    "description": "Backend-as-a-service completo para desenvolvedores web e mobile.",
    "tags": ["Backend", "BaaS"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Budibase",
    "url": "https://budibase.com",
    "domain": "budibase.com",
    "category": "dev",
    "price": "free",
    "description": "Plataforma de desenvolvimento low-code para criar ferramentas internas.",
    "tags": ["Budibase"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Godot Engine",
    "url": "https://godotengine.org",
    "domain": "godotengine.org",
    "category": "dev",
    "price": "free",
    "description": "Motor potente e leve para criação de jogos 2D e 3D.",
    "tags": ["Godot Engine"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Supabase",
    "url": "https://supabase.com",
    "domain": "supabase.com",
    "category": "dev",
    "price": "free",
    "description": "Backend open-source alternativo ao Firebase com banco Postgres.",
    "tags": ["Supabase"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "AppFlowy",
    "url": "https://appflowy.com",
    "domain": "appflowy.com",
    "category": "produtividade",
    "price": "free",
    "description": "Alternativa open-source ao Notion para gestão de conhecimento.",
    "tags": ["Notion Alt", "Notas"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Bitwarden",
    "url": "https://bitwarden.com",
    "domain": "bitwarden.com",
    "category": "produtividade",
    "price": "free",
    "description": "Gerenciador seguro de senhas com criptografia de ponta a ponta.",
    "tags": ["Bitwarden", "Senhas", "Segurança", "Criptografia"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "DeepL Translate",
    "url": "https://www.deepl.com",
    "domain": "deepl.com",
    "category": "produtividade",
    "price": "freemium",
    "description": "Tradutor de texto e documentos baseado em redes neurais de alta precisão.",
    "tags": ["Tradução", "Documentos"],
    "iconData": ""
  },
  {
    "name": "DocuSeal",
    "url": "https://docuseal.com",
    "domain": "docuseal.com",
    "category": "produtividade",
    "price": "free",
    "description": "Assinatura digital de documentos open-source.",
    "tags": ["Assinatura", "PDF"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Stirling PDF",
    "url": "https://github.com/Stirling-Tools/Stirling-PDF",
    "domain": "github.com",
    "category": "produtividade",
    "price": "free",
    "description": "Ferramenta local e completa para editar, juntar e converter arquivos PDF.",
    "tags": ["Stirling PDF"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Dokploy",
    "url": "https://dokploy.com",
    "domain": "dokploy.com",
    "category": "servidor",
    "price": "free",
    "description": "Plataforma open-source para deploy de aplicações e contêineres Docker.",
    "tags": ["Dokploy"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Home Assistant",
    "url": "https://www.home-assistant.io",
    "domain": "home-assistant.io",
    "category": "servidor",
    "price": "free",
    "description": "Central de automação residencial focada em controle local.",
    "tags": ["IoT", "Automação"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Immich",
    "url": "https://immich.app",
    "domain": "immich.app",
    "category": "servidor",
    "price": "free",
    "description": "Gerenciador de fotos e vídeos pessoal auto-hospedado.",
    "tags": ["Fotos", "Backup"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Jellyfin",
    "url": "https://jellyfin.org",
    "domain": "jellyfin.org",
    "category": "servidor",
    "price": "free",
    "description": "Servidor de mídia pessoal open-source para filmes e músicas.",
    "tags": ["Mídia", "Streaming"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "10FastFingers",
    "url": "https://10fastfingers.com",
    "domain": "10fastfingers.com",
    "category": "outros",
    "price": "free",
    "description": "Teste e treino de velocidade de digitação.",
    "tags": ["Digitação", "WPM"],
    "iconData": ""
  },
  {
    "name": "FMHY",
    "url": "https://fmhy.net",
    "domain": "fmhy.net",
    "category": "outros",
    "price": "free",
    "description": "Guia completo de links e ferramentas gratuitas da web.",
    "tags": ["Guia", "Links"],
    "iconData": ""
  },
  {
    "name": "Latent Box",
    "url": "https://latentbox.com/en",
    "domain": "latentbox.com",
    "category": "outros",
    "price": "free",
    "description": "Caixa de ferramentas e recursos criativos de IA.",
    "tags": ["Ferramentas", "Recursos"],
    "iconData": ""
  },
  {
    "name": "Quenq",
    "url": "https://quenq.com",
    "domain": "quenq.com",
    "category": "outros",
    "price": "free",
    "description": "Buscador e agregador de utilitários da web.",
    "tags": ["Busca", "Utils"],
    "iconData": ""
  },
  {
    "name": "HeliosGen",
    "url": "https://github.com/SegFault42/HeliosGen",
    "domain": "github.com",
    "category": "ia",
    "price": "free",
    "description": "Ferramenta de ia online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Meetily",
    "url": "https://github.com/Zackriya-Solutions/meetily",
    "domain": "github.com",
    "category": "produtividade",
    "price": "free",
    "description": "Ferramenta de produtividade online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Plausible Analytics",
    "url": "https://plausible.io",
    "domain": "plausible.io",
    "category": "servidor",
    "price": "free",
    "description": "Ferramenta de servidor online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "MiniMax H3",
    "url": "https://github.com/MiniMax-AI/MiniMax-H3",
    "domain": "github.com",
    "category": "ia",
    "price": "free",
    "description": "Ferramenta de ia online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Plane",
    "url": "https://plane.so",
    "domain": "plane.so",
    "category": "produtividade",
    "price": "free",
    "description": "Gerenciador de projetos open-source moderno e ágil.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "OpenBot",
    "url": "https://github.com/CopilotKit/OpenBot",
    "domain": "github.com",
    "category": "ia",
    "price": "free",
    "description": "Ferramenta de ia online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "HeyForm",
    "url": "https://heyform.net",
    "domain": "heyform.net",
    "category": "produtividade",
    "price": "free",
    "description": "Ferramenta de produtividade online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "n8n",
    "url": "https://n8n.io",
    "domain": "n8n.io",
    "category": "servidor",
    "price": "free",
    "description": "Plataforma de automação de fluxos de trabalho e integrações de API.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Twenty",
    "url": "https://twenty.com",
    "domain": "twenty.com",
    "category": "produtividade",
    "price": "free",
    "description": "CRM moderno e flexível de código aberto.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Hermes Agent",
    "url": "https://hermes-agent.nousresearch.com",
    "domain": "hermes-agent.nousresearch.com",
    "category": "ia",
    "price": "free",
    "description": "Ferramenta de ia online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Cal.diy",
    "url": "https://github.com/calcom/cal.diy",
    "domain": "github.com",
    "category": "produtividade",
    "price": "free",
    "description": "Ferramenta de produtividade online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Plunk",
    "url": "https://github.com/useplunk/plunk",
    "domain": "github.com",
    "category": "servidor",
    "price": "free",
    "description": "Ferramenta de servidor online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "LinkStack",
    "url": "https://linkstack.org",
    "domain": "linkstack.org",
    "category": "servidor",
    "price": "free",
    "description": "Ferramenta de servidor online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "ERPNext",
    "url": "https://frappe.io/erpnext",
    "domain": "frappe.io",
    "category": "produtividade",
    "price": "free",
    "description": "Ferramenta de produtividade online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Casdoor",
    "url": "https://casdoor.ai",
    "domain": "casdoor.ai",
    "category": "dev",
    "price": "free",
    "description": "Ferramenta de dev online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Paperclip",
    "url": "https://paperclip.ing",
    "domain": "paperclip.ing",
    "category": "ia",
    "price": "free",
    "description": "Ferramenta de ia online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "PocketBase",
    "url": "https://pocketbase.io",
    "domain": "pocketbase.io",
    "category": "dev",
    "price": "free",
    "description": "Backend de arquivo único em Go com banco de dados em tempo real.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "OpenCode",
    "url": "https://opencode.ai",
    "domain": "opencode.ai",
    "category": "dev",
    "price": "free",
    "description": "Ferramenta de dev online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Cue",
    "url": "https://github.com/Blueturboguy07/cue",
    "domain": "github.com",
    "category": "ia",
    "price": "free",
    "description": "Ferramenta de ia online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Morphic",
    "url": "https://morphic.sh",
    "domain": "morphic.sh",
    "category": "ia",
    "price": "free",
    "description": "Ferramenta de ia online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "OpenDesign",
    "url": "https://open-design.ai",
    "domain": "open-design.ai",
    "category": "design",
    "price": "free",
    "description": "Ferramenta de design online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Maxun",
    "url": "https://maxun.dev",
    "domain": "maxun.dev",
    "category": "dev",
    "price": "free",
    "description": "Ferramenta de dev online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Plasmic",
    "url": "https://plasmic.app",
    "domain": "plasmic.app",
    "category": "design",
    "price": "free",
    "description": "Ferramenta de design online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Anarlog",
    "url": "https://anarlog.so",
    "domain": "anarlog.so",
    "category": "produtividade",
    "price": "free",
    "description": "Ferramenta de produtividade online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "OpenWhispr",
    "url": "https://github.com/OpenWhispr/openwhispr",
    "domain": "github.com",
    "category": "audio",
    "price": "free",
    "description": "Ferramenta de audio online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Avnac",
    "url": "https://github.com/xt42io/avnac",
    "domain": "github.com",
    "category": "design",
    "price": "free",
    "description": "Ferramenta de design online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Harper",
    "url": "https://writewithharper.com",
    "domain": "writewithharper.com",
    "category": "produtividade",
    "price": "free",
    "description": "Ferramenta de produtividade online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Kan",
    "url": "https://kan.bn",
    "domain": "kan.bn",
    "category": "produtividade",
    "price": "free",
    "description": "Ferramenta de produtividade online.",
    "tags": [],
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
    "tags": ["Blender", "3D", "Modelagem", "VFX"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Darktable",
    "url": "https://www.darktable.org",
    "domain": "darktable.org",
    "category": "design",
    "price": "free",
    "description": "Ferramenta de design online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "RawTherapee",
    "url": "https://www.rawtherapee.com",
    "domain": "rawtherapee.com",
    "category": "design",
    "price": "free",
    "description": "Ferramenta de design online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "OpenShot",
    "url": "https://www.openshot.org",
    "domain": "openshot.org",
    "category": "video",
    "price": "free",
    "description": "Ferramenta de video online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Olive",
    "url": "https://www.olivevideoeditor.org",
    "domain": "olivevideoeditor.org",
    "category": "video",
    "price": "free",
    "description": "Ferramenta de video online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Natron",
    "url": "https://natrongithub.github.io",
    "domain": "natrongithub.github.io",
    "category": "video",
    "price": "free",
    "description": "Ferramenta de video online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Ardour",
    "url": "https://ardour.org",
    "domain": "ardour.org",
    "category": "audio",
    "price": "free",
    "description": "Ferramenta de audio online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "LibreOffice",
    "url": "https://www.libreoffice.org",
    "domain": "libreoffice.org",
    "category": "produtividade",
    "price": "free",
    "description": "Suíte de escritório completa alternativa ao Microsoft Office.",
    "tags": ["LibreOffice"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Nextcloud",
    "url": "https://nextcloud.com",
    "domain": "nextcloud.com",
    "category": "servidor",
    "price": "free",
    "description": "Nuvem privada e armazenamento de arquivos auto-hospedado.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Syncthing",
    "url": "https://syncthing.net",
    "domain": "syncthing.net",
    "category": "servidor",
    "price": "free",
    "description": "Ferramenta de servidor online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Uptime Kuma",
    "url": "https://github.com/louislam/uptime-kuma",
    "domain": "github.com",
    "category": "servidor",
    "price": "free",
    "description": "Ferramenta de servidor online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Mattermost",
    "url": "https://mattermost.com",
    "domain": "mattermost.com",
    "category": "produtividade",
    "price": "free",
    "description": "Ferramenta de produtividade online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Metabase",
    "url": "https://www.metabase.com",
    "domain": "metabase.com",
    "category": "dev",
    "price": "free",
    "description": "Ferramenta de dev online.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "A Dark Room",
    "url": "http://adarkroom.doublespeakgames.com",
    "domain": "adarkroom.doublespeakgames.com",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de aventura e sobrevivência baseado em texto minimalista e envolvente.",
    "tags": ["A Dark Room", "Texto", "Aventura", "Minimalista"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Hextris",
    "url": "https://hextris.io",
    "domain": "hextris.io",
    "category": "jogos",
    "price": "free",
    "description": "Jogo estilo Tetris em uma arena hexagonal acelerada.",
    "tags": ["Hextris", "Tetris", "Hexágono", "Arcade"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "0h h1",
    "url": "http://0hh1.com",
    "domain": "0hh1.com",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de puzzle lógico relaxante em grade de cores.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "FullScreen Mario",
    "url": "https://www.fullscreenmario.com",
    "domain": "fullscreenmario.com",
    "category": "jogos",
    "price": "free",
    "description": "Recriação em HTML5 do clássico Super Mario Bros.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Freeciv Web",
    "url": "https://play.freeciv.org",
    "domain": "play.freeciv.org",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de estratégia em turnos por impérios e civilizações no navegador.",
    "tags": ["Freeciv Web", "Estratégia", "Turnos", "Civilização"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "Agar.io Clone (código)",
    "url": "https://github.com/huytd/agar.io-clone",
    "domain": "github.com",
    "category": "jogos",
    "price": "free",
    "description": "Implementação open-source multiplayer do Agar.io.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "JS13K Games",
    "url": "https://js13kgames.com",
    "domain": "js13kgames.com",
    "category": "jogos",
    "price": "free",
    "description": "Competição de jogos em JavaScript com limite de 13 KB.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "itch.io (jogos HTML5)",
    "url": "https://itch.io/games/html5",
    "domain": "itch.io",
    "category": "jogos",
    "price": "free",
    "description": "Maior catálogo independente de jogos indie em HTML5.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "DOS.Zone",
    "url": "https://dos.zone",
    "domain": "dos.zone",
    "category": "jogos",
    "price": "free",
    "description": "Emulador de jogos clássicos de MS-DOS no navegador.",
    "tags": ["DOS.Zone", "MS-DOS", "Retro", "Emulador"],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "v86",
    "url": "https://copy.sh/v86/",
    "domain": "copy.sh",
    "category": "jogos",
    "price": "free",
    "description": "Emulador de PC x86 rodando sistemas operacionais direto na web.",
    "tags": [],
    "iconData": "",
    "opensource": true
  },
  {
    "name": "FIFA 11",
    "url": "https://fifa11.online/",
    "domain": "fifa11.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo clássico de futebol FIFA 11 jogável diretamente no navegador.",
    "tags": ["futebol", "esportes"],
    "iconData": ""
  },
  {
    "name": "Battle Stadium D.O.S",
    "url": "https://battlestadium.online/",
    "domain": "battlestadium.online",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Battle Stadium D.O.S.",
    "tags": ["jogos"],
    "iconData": ""
  },
  {
    "name": "Downhill Domination",
    "url": "https://downhilldomination.online/",
    "domain": "downhilldomination.online",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Downhill Domination.",
    "tags": ["jogos"],
    "iconData": ""
  },
  {
    "name": "Reactbits",
    "url": "https://reactbits.dev",
    "domain": "reactbits.dev",
    "category": "design",
    "price": "free",
    "description": "Ferramenta ou recurso de design e desenvolvimento Reactbits.",
    "tags": ["design", "ferramenta"],
    "iconData": ""
  },
  {
    "name": "Jak and daxter",
    "url": "https://jakdaxterlostfrontier.online/",
    "domain": "jakdaxterlostfrontier.online",
    "category": "jogos",
    "price": "free",
    "description": "Aventura épica e ação com Jak and daxter.",
    "tags": ["aventura", "acao"],
    "iconData": ""
  },
  {
    "name": "Crisis Core : Final Fantasy 7",
    "url": "https://crisiscorefinalfantasy7.online/",
    "domain": "crisiscorefinalfantasy7.online",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Crisis Core : Final Fantasy 7.",
    "tags": ["jogos"],
    "iconData": ""
  },
  {
    "name": "kingdom hearts : BBS",
    "url": "https://kingdomheartsbbs.online/",
    "domain": "kingdomheartsbbs.online",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online kingdom hearts : BBS.",
    "tags": ["jogos"],
    "iconData": ""
  },
  {
    "name": "Cyberszone",
    "url": "https://cyberszone.org/?utm_source.com",
    "domain": "cyberszone.org",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Cyberszone.",
    "tags": ["jogos"],
    "iconData": ""
  },
  {
    "name": "Doom",
    "url": "https://silentspacemarine.com/",
    "domain": "silentspacemarine.com",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Doom.",
    "tags": ["jogos"],
    "iconData": ""
  },
  {
    "name": "Gta 3",
    "url": "https://wasmarcade.com/gta3",
    "domain": "wasmarcade.com",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de mundo aberto e ação estilo Gta 3 no navegador.",
    "tags": ["acao", "mundo-aberto"],
    "iconData": ""
  },
  {
    "name": "Minecraft Classic",
    "url": "https://classic.minecraft.net/",
    "domain": "classic.minecraft.net",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Minecraft Classic.",
    "tags": ["jogos"],
    "iconData": "https://radiantoptimizer.games/images/games/minecraft-classic-browser-game-480.webp"
  },
  {
    "name": "Moon Zombies",
    "url": "https://vel.gg/moon",
    "domain": "vel.gg",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Moon Zombies.",
    "tags": ["jogos"],
    "iconData": ""
  },
  {
    "name": "OpenTTD Web",
    "url": "https://openttd-web.pages.dev/",
    "domain": "openttd-web.pages.dev",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online OpenTTD Web.",
    "tags": ["jogos"],
    "iconData": ""
  },
  {
    "name": "Prince of persia 1989",
    "url": "https://princejs.com/",
    "domain": "princejs.com",
    "category": "jogos",
    "price": "free",
    "description": "Aventura épica e ação com Prince of persia 1989.",
    "tags": ["aventura", "acao"],
    "iconData": ""
  },
  {
    "name": "Shell Shockers",
    "url": "https://radiantoptimizer.games/games/shell-shockers/",
    "domain": "radiantoptimizer.games",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Shell Shockers.",
    "tags": ["jogos"],
    "iconData": ""
  },
  {
    "name": "Urban Terror",
    "url": "https://ut.pieter.com/",
    "domain": "ut.pieter.com",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Urban Terror.",
    "tags": ["jogos"],
    "iconData": ""
  },
  {
    "name": "wolfenstein 3d",
    "url": "https://www.classicreload.com/wolfenstein-3d.html",
    "domain": "classicreload.com",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online wolfenstein 3d.",
    "tags": ["jogos"],
    "iconData": ""
  },
  {
    "name": "Zombs Royale",
    "url": "https://zombsroyale.io/",
    "domain": "zombsroyale.io",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Zombs Royale.",
    "tags": ["jogos"],
    "iconData": ""
  },
  {
    "name": "Play gta5",
    "url": "https://playgta5.pro/#play",
    "domain": "playgta5.pro",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de mundo aberto e ação estilo Play gta5 no navegador.",
    "tags": ["acao", "mundo-aberto"],
    "iconData": ""
  },
  {
    "name": "Gta 5 V1",
    "url": "https://v1.playgta5.pro/",
    "domain": "v1.playgta5.pro",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de mundo aberto e ação estilo Gta 5 V1 no navegador.",
    "tags": ["acao", "mundo-aberto"],
    "iconData": ""
  },
  {
    "name": "Cricket 7",
    "url": "https://cricket.playgta5.pro/",
    "domain": "cricket.playgta5.pro",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Cricket 7.",
    "tags": ["jogos"],
    "iconData": ""
  },
  {
    "name": "NFS Most Wanted",
    "url": "https://nfs.playgta5.pro/",
    "domain": "nfs.playgta5.pro",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de corrida eletrizante NFS Most Wanted.",
    "tags": ["corrida", "carros"],
    "iconData": ""
  },
  {
    "name": "Roadrash",
    "url": "https://roadrash.playgta5.pro/play.html",
    "domain": "roadrash.playgta5.pro",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Roadrash.",
    "tags": ["jogos"],
    "iconData": ""
  },
  {
    "name": "Cyberpunk 2077",
    "url": "https://cyberpunk2077.lol/",
    "domain": "cyberpunk2077.lol",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Cyberpunk 2077.",
    "tags": ["jogos"],
    "iconData": ""
  },
  {
    "name": "Minecraft",
    "url": "https://wasmarcade.com/minecraft",
    "domain": "wasmarcade.com",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Minecraft.",
    "tags": ["jogos"],
    "iconData": ""
  },
  {
    "name": "Gta",
    "url": "https://gta.rabisco.net/",
    "domain": "gta.rabisco.net",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de mundo aberto e ação estilo Gta no navegador.",
    "tags": ["acao", "mundo-aberto"],
    "iconData": ""
  },
  {
    "name": "CS",
    "url": "https://csjs.live/",
    "domain": "csjs.live",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online CS.",
    "tags": ["jogos"],
    "iconData": ""
  },
  {
    "name": "Black Ops Zombies",
    "url": "http://vel.gg/bo1z",
    "domain": "vel.gg",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Black Ops Zombies.",
    "tags": ["jogos"],
    "iconData": ""
  },
  {
    "name": "Red Alert 2",
    "url": "https://chronodivide.com/",
    "domain": "chronodivide.com",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Red Alert 2.",
    "tags": ["jogos"],
    "iconData": ""
  },
  {
    "name": "Super Mario 64 Multiplayer",
    "url": "https://olivers.tools/play/",
    "domain": "olivers.tools",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Super Mario 64 Multiplayer.",
    "tags": ["jogos"],
    "iconData": ""
  },
  {
    "name": "LEGO Island",
    "url": "https://isle.pizza/",
    "domain": "isle.pizza",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online LEGO Island.",
    "tags": ["jogos"],
    "iconData": ""
  },
  {
    "name": "Crash Bash",
    "url": "https://crashbash.app/",
    "domain": "crashbash.app",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Crash Bash.",
    "tags": ["jogos"],
    "iconData": ""
  },
  {
    "name": "bo1 zombies (kino)",
    "url": "https://vel.gg/boiz/kino",
    "domain": "vel.gg",
    "category": "jogos",
    "price": "free",
    "description": "Modo Zombies do Black Ops 1 com o mapa Kino der Toten no browser.",
    "tags": [
      "zombies"
    ],
    "iconData": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbsumUqrsrfG8DFLxmiOztfIrbnTnvfZiD1SLGMujGg&s=10"
  },
  {
    "name": "Dragon Ball BT3",
    "url": "https://dragonballbt3.online/pt.html",
    "domain": "dragonballbt3.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de luta em arena 3D com os personagens de Dragon Ball.",
    "tags": [
      "luta"
    ],
    "iconData": ""
  },
  {
    "name": "Sikip cut",
    "url": "https://skipcut.com",
    "domain": "skipcut.com",
    "category": "video",
    "price": "free",
    "description": "YouTube sem anúncios",
    "tags": [
      "video"
    ],
    "iconData": ""
  },
  {
    "name": "Calc Solve",
    "url": "https://calcsolver.com/",
    "domain": "calcsolver.com",
    "category": "jogos",
    "price": "free",
    "description": "Calculadora de jogos ative o modo de código, digite 0000",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Solve Calc",
    "url": "https://solvecalc.net/",
    "domain": "solvecalc.net",
    "category": "jogos",
    "price": "free",
    "description": "Calculadora de jogos ative o modo de código, digite 0000",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Poketube",
    "url": "https://poketube.fun/home",
    "domain": "poketube.fun",
    "category": "video",
    "price": "free",
    "description": "YouTube sem anúncios",
    "tags": [
      "video"
    ],
    "iconData": ""
  },
  {
    "name": "SKILLRY",
    "url": "https://SKILLRY.DEV",
    "domain": "SKILLRY.DEV",
    "category": "design",
    "price": "free",
    "description": "Ferramenta ou recurso de design e desenvolvimento SKILLRY.",
    "tags": [
      "design",
      "ferramenta"
    ],
    "iconData": ""
  },
  {
    "name": "GROUND 2",
    "url": "HTTPS://NFSUNDERGROUND2.SITE/",
    "domain": "NFSUNDERGROUND2.SITE",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online GROUND 2.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Dese jam",
    "url": "Https://def-jam.online/",
    "domain": "def-jam.online",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Dese jam.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Tekken 5",
    "url": "https://tekken5.online/",
    "domain": "tekken5.online",
    "category": "jogos",
    "price": "free",
    "description": "Clássico jogo de luta arcade Tekken 5.",
    "tags": [
      "luta",
      "arcade"
    ],
    "iconData": ""
  },
  {
    "name": "WWE 2011",
    "url": "https://wwe2011.online/",
    "domain": "wwe2011.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de luta e combate WWE 2011 com atletas e pancadaria.",
    "tags": [
      "luta",
      "combate"
    ],
    "iconData": ""
  },
  {
    "name": "FIFA 14",
    "url": "https://fifa14.online/",
    "domain": "fifa14.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo clássico de futebol FIFA 14 jogável diretamente no navegador.",
    "tags": [
      "futebol",
      "esportes"
    ],
    "iconData": ""
  },
  {
    "name": "FIFA Street 2",
    "url": "https://fifastreet2.fun/",
    "domain": "fifastreet2.fun",
    "category": "jogos",
    "price": "free",
    "description": "Clássico jogo de futebol de rua com dribles e partidas dinâmicas online.",
    "tags": [
      "futebol"
    ],
    "iconData": ""
  },
  {
    "name": "Dragon Ball BT2",
    "url": "https://dragonballbt2.online/",
    "domain": "dragonballbt2.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de ação e anime baseado na série Dragon Ball BT2.",
    "tags": [
      "anime",
      "luta"
    ],
    "iconData": ""
  },
  {
    "name": "Resident Evil 4",
    "url": "https://residentevil4.online/",
    "domain": "residentevil4.online",
    "category": "jogos",
    "price": "free",
    "description": "Aventura épica e ação com Resident Evil 4.",
    "tags": [
      "aventura",
      "acao"
    ],
    "iconData": ""
  },
  {
    "name": "Juegos .html",
    "url": "https://dragonballbt3.online/juegos.html",
    "domain": "dragonballbt3.online",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Juegos .html.",
    "tags": [
      "jogos"
    ],
    "iconData": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJh2Cvqyxo_YNdScLMt8nfATEUdiAJOwLpdxI7NGYRA&s=10"
  },
  {
    "name": "AI Browser Games",
    "url": "https://aibrowsergames.org/radiant-optimizer-browser-games/#collection",
    "domain": "aibrowsergames.org",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online AI Browser Games.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Radiant Optimizer",
    "url": "https://radiantoptimizer.games/",
    "domain": "radiantoptimizer.games",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Radiant Optimizer.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "FIFA 12",
    "url": "https://fifa12.online/",
    "domain": "fifa12.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo clássico de futebol FIFA 12 jogável diretamente no navegador.",
    "tags": [
      "futebol",
      "esportes"
    ],
    "iconData": ""
  },
  {
    "name": "Marvel vs Calcom 2",
    "url": "https://marvelvscapcom2.online/",
    "domain": "marvelvscapcom2.online",
    "category": "jogos",
    "price": "free",
    "description": "Clássico jogo de luta arcade Marvel vs Calcom 2.",
    "tags": [
      "luta",
      "arcade"
    ],
    "iconData": ""
  },
  {
    "name": "Midnight Club 3",
    "url": "https://midnighhtclub3.online/",
    "domain": "midnighhtclub3.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de corrida eletrizante Midnight Club 3.",
    "tags": [
      "corrida",
      "carros"
    ],
    "iconData": ""
  },
  {
    "name": "tekkendr",
    "url": "https://tekkendr.live/",
    "domain": "tekkendr.live",
    "category": "jogos",
    "price": "free",
    "description": "Clássico jogo de luta arcade tekkendr.",
    "tags": [
      "luta",
      "arcade"
    ],
    "iconData": ""
  },
  {
    "name": "PES 14",
    "url": "https://pes14.online/",
    "domain": "pes14.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo clássico de futebol PES 14 jogável diretamente no navegador.",
    "tags": [
      "futebol",
      "esportes"
    ],
    "iconData": ""
  },
  {
    "name": "Street Fighter",
    "url": "https://streetfighteranniversary.online/",
    "domain": "streetfighteranniversary.online",
    "category": "jogos",
    "price": "free",
    "description": "Clássico jogo de luta arcade Street Fighter.",
    "tags": [
      "luta",
      "arcade"
    ],
    "iconData": ""
  },
  {
    "name": "FIFA Street",
    "url": "https://fifastreet.online/",
    "domain": "fifastreet.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo clássico de futebol FIFA Street jogável diretamente no navegador.",
    "tags": [
      "futebol",
      "esportes"
    ],
    "iconData": ""
  },
  {
    "name": "Dragon Ball Z: BK3",
    "url": "https://dragonballbudokai3.online/",
    "domain": "dragonballbudokai3.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de ação e anime baseado na série Dragon Ball Z: BK3.",
    "tags": [
      "anime",
      "luta"
    ],
    "iconData": ""
  },
  {
    "name": "Naruto Shippuden : impact",
    "url": "https://narutoimpact.online/",
    "domain": "narutoimpact.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de ação e anime baseado na série Naruto Shippuden : impact.",
    "tags": [
      "anime",
      "luta"
    ],
    "iconData": ""
  },
  {
    "name": "FIFA 10",
    "url": "https://fifa10.website/",
    "domain": "fifa10.website",
    "category": "jogos",
    "price": "free",
    "description": "Jogo clássico de futebol FIFA 10 jogável diretamente no navegador.",
    "tags": [
      "futebol",
      "esportes"
    ],
    "iconData": ""
  },
  {
    "name": "Mortal Kombatst",
    "url": "https://mortalkombatsm.online/",
    "domain": "mortalkombatsm.online",
    "category": "jogos",
    "price": "free",
    "description": "Clássico jogo de luta arcade Mortal Kombatst.",
    "tags": [
      "luta",
      "arcade"
    ],
    "iconData": ""
  },
  {
    "name": "The Warriors",
    "url": "https://thewarriors.online/",
    "domain": "thewarriors.online",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online The Warriors.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "FIFA 13",
    "url": "https://fifa13.online/",
    "domain": "fifa13.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo clássico de futebol FIFA 13 jogável diretamente no navegador.",
    "tags": [
      "futebol",
      "esportes"
    ],
    "iconData": ""
  },
  {
    "name": "Trkken 4",
    "url": "https://tekken4.online/",
    "domain": "tekken4.online",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Trkken 4.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Street fighter lll",
    "url": "https://streetfighter3.online/",
    "domain": "streetfighter3.online",
    "category": "jogos",
    "price": "free",
    "description": "Clássico jogo de luta arcade Street fighter lll.",
    "tags": [
      "luta",
      "arcade"
    ],
    "iconData": ""
  },
  {
    "name": "F1 2006",
    "url": "https://f12006.online/",
    "domain": "f12006.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de corrida eletrizante F1 2006.",
    "tags": [
      "corrida",
      "carros"
    ],
    "iconData": ""
  },
  {
    "name": "Madden NFI 08",
    "url": "https://maddennfl08.online/",
    "domain": "maddennfl08.online",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Madden NFI 08.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "WWE Pain",
    "url": "https://wwepain.online/",
    "domain": "wwepain.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de luta e combate WWE Pain com atletas e pancadaria.",
    "tags": [
      "luta",
      "combate"
    ],
    "iconData": ""
  },
  {
    "name": "WWE V2010",
    "url": "https://wwe2010.online/",
    "domain": "wwe2010.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de luta e combate WWE V2010 com atletas e pancadaria.",
    "tags": [
      "luta",
      "combate"
    ],
    "iconData": ""
  },
  {
    "name": "WWE RAW",
    "url": "https://smackdownvsraw.online/",
    "domain": "smackdownvsraw.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de luta e combate WWE RAW com atletas e pancadaria.",
    "tags": [
      "luta",
      "combate"
    ],
    "iconData": ""
  },
  {
    "name": "NFI Street",
    "url": "https://nflstreet.online/",
    "domain": "nflstreet.online",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online NFI Street.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "SSX 3",
    "url": "https://ssx3.online/",
    "domain": "ssx3.online",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online SSX 3.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "NBA Street V3",
    "url": "https://nbastreet3.online/",
    "domain": "nbastreet3.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de basquete dinâmico NBA Street V3 online.",
    "tags": [
      "basquete",
      "esportes"
    ],
    "iconData": ""
  },
  {
    "name": "Virtua Tennis 2",
    "url": "https://virtuatennis2.online/",
    "domain": "virtuatennis2.online",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Virtua Tennis 2.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "NBA 2K12",
    "url": "https://nba2k12.online/",
    "domain": "nba2k12.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de basquete dinâmico NBA 2K12 online.",
    "tags": [
      "basquete",
      "esportes"
    ],
    "iconData": ""
  },
  {
    "name": "Naruto Shippuden : ultimate 5",
    "url": "https://narutoshippuden5.online/",
    "domain": "narutoshippuden5.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de ação e anime baseado na série Naruto Shippuden : ultimate 5.",
    "tags": [
      "anime",
      "luta"
    ],
    "iconData": ""
  },
  {
    "name": "UFC 2",
    "url": "https://ufc2.online/",
    "domain": "ufc2.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de luta e combate UFC 2 com atletas e pancadaria.",
    "tags": [
      "luta",
      "combate"
    ],
    "iconData": ""
  },
  {
    "name": "PES 12",
    "url": "https://pes12.online/",
    "domain": "pes12.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo clássico de futebol PES 12 jogável diretamente no navegador.",
    "tags": [
      "futebol",
      "esportes"
    ],
    "iconData": ""
  },
  {
    "name": "Crash Nitro Kart",
    "url": "https://crashnitrokart.online/",
    "domain": "crashnitrokart.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de corrida eletrizante Crash Nitro Kart.",
    "tags": [
      "corrida",
      "carros"
    ],
    "iconData": ""
  },
  {
    "name": "Tony hawk's pro Skater 3",
    "url": "https://tonyhawkpro3.online/",
    "domain": "tonyhawkpro3.online",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Tony hawk's pro Skater 3.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Spider-Man 2",
    "url": "https://spiderman2.online/",
    "domain": "spiderman2.online",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Spider-Man 2.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Moster Hunter freedom",
    "url": "https://mhfu.online/",
    "domain": "mhfu.online",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Moster Hunter freedom.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "God of War : Chains of Olympus",
    "url": "https://godofwarchains.online/",
    "domain": "godofwarchains.online",
    "category": "jogos",
    "price": "free",
    "description": "Aventura épica e ação com God of War : Chains of Olympus.",
    "tags": [
      "aventura",
      "acao"
    ],
    "iconData": ""
  },
  {
    "name": "God of War : Ghost of Sparta",
    "url": "https://godofwarsparta.online/",
    "domain": "godofwarsparta.online",
    "category": "jogos",
    "price": "free",
    "description": "Aventura épica e ação com God of War : Ghost of Sparta.",
    "tags": [
      "aventura",
      "acao"
    ],
    "iconData": ""
  },
  {
    "name": "Ratchet & clanks",
    "url": "https://ratchetclanksizematters.online/",
    "domain": "ratchetclanksizematters.online",
    "category": "jogos",
    "price": "free",
    "description": "Aventura épica e ação com Ratchet & clanks.",
    "tags": [
      "aventura",
      "acao"
    ],
    "iconData": ""
  },
  {
    "name": "Battle Stadium D.O.S",
    "url": "https://battlestadium.online/",
    "domain": "battlestadium.online",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Battle Stadium D.O.S.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Burnout 3 : Tekedown",
    "url": "https://burnout3.online/",
    "domain": "burnout3.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de corrida eletrizante Burnout 3 : Tekedown.",
    "tags": [
      "corrida",
      "carros"
    ],
    "iconData": ""
  },
  {
    "name": "Downhill Domination",
    "url": "https://downhilldomination.online/",
    "domain": "downhilldomination.online",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Downhill Domination.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Reactbits",
    "url": "https://reactbits.dev",
    "domain": "reactbits.dev",
    "category": "design",
    "price": "free",
    "description": "Ferramenta ou recurso de design e desenvolvimento Reactbits.",
    "tags": [
      "design",
      "ferramenta"
    ],
    "iconData": ""
  },
  {
    "name": "Jak and daxter",
    "url": "https://jakdaxterlostfrontier.online/",
    "domain": "jakdaxterlostfrontier.online",
    "category": "jogos",
    "price": "free",
    "description": "Aventura épica e ação com Jak and daxter.",
    "tags": [
      "aventura",
      "acao"
    ],
    "iconData": ""
  },
  {
    "name": "Crisis Core : Final Fantasy 7",
    "url": "https://crisiscorefinalfantasy7.online/",
    "domain": "crisiscorefinalfantasy7.online",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Crisis Core : Final Fantasy 7.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "kingdom hearts : BBS",
    "url": "https://kingdomheartsbbs.online/",
    "domain": "kingdomheartsbbs.online",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online kingdom hearts : BBS.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Gran Turismo 4",
    "url": "https://granturismo4.online/",
    "domain": "granturismo4.online",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de corrida eletrizante Gran Turismo 4.",
    "tags": [
      "corrida",
      "carros"
    ],
    "iconData": ""
  },
  {
    "name": "Vel",
    "url": "https://vel.gg/bo1z",
    "domain": "vel.gg",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Vel.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Cyberszone",
    "url": "https://cyberszone.org/?utm_source.com",
    "domain": "cyberszone.org",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Cyberszone.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Doom",
    "url": "https://silentspacemarine.com/",
    "domain": "silentspacemarine.com",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Doom.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Gta 3",
    "url": "https://wasmarcade.com/gta3",
    "domain": "wasmarcade.com",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de mundo aberto e ação estilo Gta 3 no navegador.",
    "tags": [
      "acao",
      "mundo-aberto"
    ],
    "iconData": ""
  },
  {
    "name": "Vibeslops",
    "url": "https://vibeslops.luckeysystems.com",
    "domain": "vibeslops.luckeysystems.com",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Vibeslops.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Minecraft Classic",
    "url": "https://classic.minecraft.net/",
    "domain": "classic.minecraft.net",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Minecraft Classic.",
    "tags": [
      "jogos"
    ],
    "iconData": "https://radiantoptimizer.games/images/games/minecraft-classic-browser-game-480.webp"
  },
  {
    "name": "Moon Zombies",
    "url": "https://vel.gg/moon",
    "domain": "vel.gg",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Moon Zombies.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "OpenTTD Web",
    "url": "https://openttd-web.pages.dev/",
    "domain": "openttd-web.pages.dev",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online OpenTTD Web.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Prince of persia 1989",
    "url": "https://princejs.com/",
    "domain": "princejs.com",
    "category": "jogos",
    "price": "free",
    "description": "Aventura épica e ação com Prince of persia 1989.",
    "tags": [
      "aventura",
      "acao"
    ],
    "iconData": ""
  },
  {
    "name": "Return to Castle",
    "url": "https://rtcw.pieter.com/",
    "domain": "rtcw.pieter.com",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Return to Castle.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Shell Shockers",
    "url": "https://radiantoptimizer.games/games/shell-shockers/",
    "domain": "radiantoptimizer.games",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Shell Shockers.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Urban Terror",
    "url": "https://ut.pieter.com/",
    "domain": "ut.pieter.com",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Urban Terror.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "wolfenstein 3d",
    "url": "https://www.classicreload.com/wolfenstein-3d.html",
    "domain": "classicreload.com",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online wolfenstein 3d.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Zombs Royale",
    "url": "https://zombsroyale.io/",
    "domain": "zombsroyale.io",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Zombs Royale.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Play gta5",
    "url": "https://playgta5.pro/#play",
    "domain": "playgta5.pro",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de mundo aberto e ação estilo Play gta5 no navegador.",
    "tags": [
      "acao",
      "mundo-aberto"
    ],
    "iconData": ""
  },
  {
    "name": "Gta 5 V1",
    "url": "https://v1.playgta5.pro/",
    "domain": "v1.playgta5.pro",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de mundo aberto e ação estilo Gta 5 V1 no navegador.",
    "tags": [
      "acao",
      "mundo-aberto"
    ],
    "iconData": ""
  },
  {
    "name": "Cricket 7",
    "url": "https://cricket.playgta5.pro/",
    "domain": "cricket.playgta5.pro",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Cricket 7.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "NFS Most Wanted",
    "url": "https://nfs.playgta5.pro/",
    "domain": "nfs.playgta5.pro",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de corrida eletrizante NFS Most Wanted.",
    "tags": [
      "corrida",
      "carros"
    ],
    "iconData": ""
  },
  {
    "name": "Roadrash",
    "url": "https://roadrash.playgta5.pro/play.html",
    "domain": "roadrash.playgta5.pro",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Roadrash.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Cyberpunk 2077",
    "url": "https://cyberpunk2077.lol/",
    "domain": "cyberpunk2077.lol",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Cyberpunk 2077.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Minecraft",
    "url": "https://wasmarcade.com/minecraft",
    "domain": "wasmarcade.com",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Minecraft.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Gta",
    "url": "https://gta.rabisco.net/",
    "domain": "gta.rabisco.net",
    "category": "jogos",
    "price": "free",
    "description": "Jogo de mundo aberto e ação estilo Gta no navegador.",
    "tags": [
      "acao",
      "mundo-aberto"
    ],
    "iconData": ""
  },
  {
    "name": "CS",
    "url": "https://csjs.live/",
    "domain": "csjs.live",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online CS.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Black Ops Zombies",
    "url": "http://vel.gg/bo1z",
    "domain": "vel.gg",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Black Ops Zombies.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Red Alert 2",
    "url": "https://chronodivide.com/",
    "domain": "chronodivide.com",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Red Alert 2.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Super Mario 64 Multiplayer",
    "url": "https://olivers.tools/play/",
    "domain": "olivers.tools",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Super Mario 64 Multiplayer.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "LEGO Island",
    "url": "https://isle.pizza/",
    "domain": "isle.pizza",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online LEGO Island.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  },
  {
    "name": "Crash Bash",
    "url": "https://crashbash.app/",
    "domain": "crashbash.app",
    "category": "jogos",
    "price": "free",
    "description": "Plataforma ou jogo online Crash Bash.",
    "tags": [
      "jogos"
    ],
    "iconData": ""
  }
];