import './App.css'

const stats = [
  { value: '17', label: 'Built-in effects' },
  { value: '36', label: 'Sequentio patterns' },
  { value: '7', label: 'Preset gradients' },
  { value: '4', label: 'Hardware ecosystems' },
]

const modeCards = [
  {
    name: 'Spatial',
    detail:
      'Build a room-sized stage with mapped fixtures, live preview, effect layering, and direct manipulation.',
  },
  {
    name: 'Auto',
    detail:
      'Let the engine interpret energy, BPM, labels, and pattern blend so the lighting follows the room in real time.',
  },
  {
    name: 'Sequentio',
    detail:
      'Drive order, timing, gradients, overlap, brightness, and motion like choreography instead of ambience.',
  },
]

const featureTiles = [
  {
    eyebrow: 'Stage',
    title: 'A lighting canvas, not a settings screen.',
    body:
      'Lumina maps fixtures into a room model, lets you drag them into place, stack effects visually, and preview the stage before it hits real hardware.',
  },
  {
    eyebrow: 'Scenes',
    title: 'Save the moment. Trigger it again instantly.',
    body:
      'The app saves scenes with effect data and thumbnails, supports drag-and-drop ordering, and builds beat-based sequences with adjustable beats per scene.',
  },
  {
    eyebrow: 'Audio',
    title: 'Microphone analysis with actual signal depth.',
    body:
      'BPM, pitch, energy, beat phase, confidence, spectral flux, spectral centroid, and band-hit events all exist in the code and all feed the motion system.',
  },
  {
    eyebrow: 'Devices',
    title: 'Designed for real rooms with real hardware.',
    body:
      'Lumina talks to WLED, Philips Hue Entertainment, Nanoleaf, and LIFX, with pairing, mapping, local-network control, and stored device configuration.',
  },
]

const stackColumns = [
  {
    title: 'Effects',
    count: '17',
    items: [
      'Rainbow Wave',
      'Breathing',
      'Ripple',
      'Sparkle',
      'Gradient Flow',
      'Fan Sweep',
      'Shutter Sweep',
      'Pinwheel',
      'Orbiting Sun',
      'Gravity Well',
      'Flash Burst',
      'Bouncing Centroid',
      'Plasma',
      'Fire',
      'Digital Rain',
      'Laser',
      'Test Grid',
    ],
  },
  {
    title: 'Patterns',
    count: '36',
    items: [
      'rand-v',
      'disco-flash',
      'pulse',
      'pulsating',
      'breathe',
      'fade-lanes',
      'on-off',
      'staccato-gate',
      'wave',
      'neon-chase',
      'twin-comet',
      'fireworks',
    ],
  },
  {
    title: 'Gradients',
    count: '7',
    items: ['Fire', 'Ocean', 'Rainbow', 'Synthwave', 'Forest', 'Sunset', 'Monochrome'],
  },
  {
    title: 'Integrations',
    count: '4',
    items: ['WLED', 'Philips Hue Entertainment', 'Nanoleaf', 'LIFX'],
  },
]

function App() {
  return (
    <div className="site-shell">
      <header className="global-nav">
        <div className="nav-inner">
          <a className="nav-brand" href="#top" aria-label="Lumina home">
            Lumina
          </a>

          <nav className="nav-links" aria-label="Primary">
            <a href="#overview">Overview</a>
            <a href="#modes">Modes</a>
            <a href="#stack">Stack</a>
            <a href="Privacy-Policy.md">Privacy</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="apple-section hero-section theme-dark">
          <div className="section-inner hero-inner">
            <p className="section-kicker on-dark">Lumina</p>
            <h1 className="hero-title">Audio-reactive lighting control for people who want more.</h1>
            <p className="hero-subtitle">
              Lumina listens, maps the room, saves scenes, sequences beats, and drives real hardware
              with the intensity of a miniature live show.
            </p>
            <div className="cta-row centered">
              <a className="apple-button apple-button-blue" href="#overview">
                Learn more
              </a>
              <a className="apple-button apple-button-outline on-dark" href="https://github.com/tukies/Lumina-iOS">
                View on GitHub
              </a>
            </div>

            <div className="product-stage" aria-hidden="true">
              <div className="stage-floor" />
              <div className="stage-panel panel-left">
                <span>Spatial stage</span>
              </div>
              <div className="stage-panel panel-center">
                <span>Beat-aware sequencing</span>
              </div>
              <div className="stage-panel panel-right">
                <span>Local-first control</span>
              </div>
            </div>
          </div>
        </section>

        <section className="apple-section theme-light" id="overview">
          <div className="section-inner intro-inner">
            <p className="section-kicker">Built from the actual app code</p>
            <h2 className="section-headline">The product story comes from the implementation, not invented marketing.</h2>
            <p className="section-body">
              The current Lumina codebase exposes stage mapping, saved rooms, scenes, sequences,
              gradients, calibration, audio intelligence, and direct integrations for multiple
              lighting ecosystems. This site follows that product surface closely.
            </p>

            <div className="stat-strip">
              {stats.map((stat) => (
                <article className="stat-item" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="apple-section theme-dark feature-hero">
          <div className="section-inner feature-hero-inner">
            <div className="hero-copy-block">
              <p className="section-kicker on-dark">Spatial</p>
              <h2 className="section-headline on-dark">Build the room like a stage.</h2>
              <p className="section-body on-dark">
                Place fixtures, preview the room, layer effects, inspect parameters, and drive a live
                canvas that treats smart lights like spatial instruments instead of isolated bulbs.
              </p>
            </div>

            <div className="device-slab" aria-hidden="true">
              <div className="slab-screen">
                <div className="slab-grid">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="apple-section theme-light tile-section">
          <div className="section-inner">
            <div className="tile-grid">
              {featureTiles.map((tile) => (
                <article className="feature-tile" key={tile.title}>
                  <p className="tile-eyebrow">{tile.eyebrow}</p>
                  <h3>{tile.title}</h3>
                  <p>{tile.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="apple-section theme-dark" id="modes">
          <div className="section-inner">
            <p className="section-kicker on-dark">Three lighting modes</p>
            <h2 className="section-headline on-dark">One app. Three ways to command the room.</h2>
            <div className="mode-grid">
              {modeCards.map((card) => (
                <article className="mode-tile" key={card.name}>
                  <h3>{card.name}</h3>
                  <p>{card.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="apple-section theme-light" id="stack">
          <div className="section-inner">
            <p className="section-kicker">Creative stack</p>
            <h2 className="section-headline">Pulled directly from the app.</h2>
            <p className="section-body">
              Effect definitions, pattern IDs, preset gradients, and supported integrations all exist
              in the Lumina implementation today.
            </p>

            <div className="stack-grid">
              {stackColumns.map((column) => (
                <article className="stack-column" key={column.title}>
                  <div className="stack-heading">
                    <h3>{column.title}</h3>
                    <span>{column.count}</span>
                  </div>
                  <ul>
                    {column.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="apple-section theme-dark closing-section">
          <div className="section-inner closing-inner">
            <p className="section-kicker on-dark">Local by design</p>
            <h2 className="section-headline on-dark">Fast in the room. Grounded in the room.</h2>
            <p className="section-body on-dark">
              Lumina stores layouts, scenes, gradients, calibration, and device mappings locally.
              Audio analysis happens on device. Lighting commands stay on your network. That keeps the
              experience immediate, tactile, and sharp.
            </p>

            <div className="cta-row centered">
              <a className="apple-button apple-button-blue" href="Privacy-Policy.md">
                Privacy policy
              </a>
              <a className="apple-button apple-button-outline on-dark" href="https://github.com/tukies/Lumina-iOS">
                Open repository
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
