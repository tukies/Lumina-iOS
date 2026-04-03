import './App.css'

const stats = [
  { value: '17', label: 'built-in effects' },
  { value: '36', label: 'Sequentio patterns' },
  { value: '7', label: 'preset gradients' },
  { value: '4', label: 'hardware ecosystems' },
]

const modes = [
  {
    eyebrow: 'Spatial',
    title: 'Build the room like a lighting stage.',
    description:
      'Drag fixtures into place, stack effects visually, preview the canvas in real time, and turn your living room into something that feels suspiciously close to a show control rig.',
  },
  {
    eyebrow: 'Auto',
    title: 'Let the engine read the energy for you.',
    description:
      'Lumina’s music intelligence tracks BPM, beat position, energy, labels, and pattern blend so scenes and sequences can pivot with the room instead of waiting for manual babysitting.',
  },
  {
    eyebrow: 'Sequentio',
    title: 'Lock the room to rhythm, motion, and order.',
    description:
      'Pixel or light ordering, gradient overrides, tail overlap, manual BPM, sync-to-music, direction control, and deep sequencing tools make this the part where lighting turns into choreography.',
  },
]

const pillars = [
  {
    title: 'Stage-first control',
    items: [
      'Live stage canvas with fixture placement and drag-to-map room layout',
      'Effect layering, duplication, removal, preview toggle, and fixture overlay',
      'Room presets with save, apply, rename, update, and delete flows',
      'Scene thumbnails rendered from the actual engine for fast browsing',
    ],
  },
  {
    title: 'Scene and sequence system',
    items: [
      'Save the current stage as reusable scenes with effect data and thumbnails',
      'Reorder scenes with drag and drop and trigger them instantly',
      'Build beat-based scene sequences with adjustable beats per scene',
      'Loop or stop at the end depending on the moment you are trying to create',
    ],
  },
  {
    title: 'Audio-reactive core',
    items: [
      'Real-time microphone analysis for BPM, pitch, energy, beat phase, and confidence',
      'Band hit detection across bass, mid, and highs plus onset and beat events',
      'Spectral flux and spectral centroid for richer movement mapping',
      'Manual and automatic calibration, plus optional background audio mode',
    ],
  },
  {
    title: 'Hardware mapping',
    items: [
      'WLED support with strip and segment-aware fixture mapping',
      'Philips Hue Entertainment support with bridge auth and auto-imported fixtures',
      'Nanoleaf layout pairing with panel geometry brought into the stage',
      'LIFX support for direct bulb control and identity lookup',
    ],
  },
  {
    title: 'Creative motion engine',
    items: [
      'Audio-bound parameter modulation for effects, opacity, scale, radius, and rotation',
      'Custom and built-in gradients for color steering',
      'Auto effect profiles with energy ratings and vibe labels',
      'Local-first storage for rooms, scenes, gradients, calibration, and settings',
    ],
  },
]

const effects = [
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
]

const patterns = [
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
  'confetti',
  'strobe-ish',
  'cave',
  'siren-sweep',
  'prism-steps',
  'one-many',
  'fill',
  'firefly',
  'theater-chase',
  'scan-dual',
  'meteor-rain',
  'scroll-spectrum',
  'bouncing-orbs',
  'twinkle-fox',
  'random-flash',
  'melt-sparkle',
  'blade-power',
  'color-wipe-step',
  'superflux-neon-cuts',
  'meter-ladder',
  'harmonic-percussive-duel',
  'dp-beat-snake',
  'section-morph',
  'chroma-key-bloom',
]

const gradients = ['Fire', 'Ocean', 'Rainbow', 'Synthwave', 'Forest', 'Sunset', 'Monochrome']

const integrations = ['WLED', 'Philips Hue Entertainment', 'Nanoleaf', 'LIFX']

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Lumina home">
          <span className="brand-mark">L</span>
          <span className="brand-copy">
            <strong>Lumina</strong>
            <span>audio-reactive lighting control</span>
          </span>
        </a>

        <nav className="site-nav">
          <a href="#features">Features</a>
          <a href="#modes">Modes</a>
          <a href="#stack">Stack</a>
          <a href="Privacy-Policy.md">Privacy</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Built from the real Lumina iOS codebase</p>
            <h1>
              Make your lights feel
              <span> alive, loud, and absolutely locked in.</span>
            </h1>
            <p className="hero-text">
              Lumina is a modern lighting command center for people who want more than a color picker.
              It listens, reacts, maps the room, saves the moment, and drives real hardware with the
              energy of a miniature live show.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#features">
                See the feature stack
              </a>
              <a className="button button-secondary" href="https://github.com/tukies/Lumina-iOS">
                View the repo
              </a>
            </div>

            <div className="hero-note">
              Stage layout, scenes, sequences, gradients, device mappings, and audio calibration all
              show up directly in the app code. This page is built around what Lumina actually ships.
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-top">
              <span className="panel-chip">Spatial stage</span>
              <span className="panel-chip">Beat-aware sequencing</span>
              <span className="panel-chip">Local-first control</span>
            </div>

            <div className="hero-grid">
              {stats.map((stat) => (
                <article className="stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>

            <div className="signal-card">
              <p>Signal path</p>
              <ul>
                <li>Microphone analysis for BPM, pitch, energy, and band hits</li>
                <li>Effects, scenes, and sequences routed through stage-aware mapping</li>
                <li>Streaming output to WLED, Hue, Nanoleaf, and LIFX on the local network</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="section-heading">
            <p className="eyebrow">Feature spectrum</p>
            <h2>This is not “ambient lighting.” This is a full lighting workflow.</h2>
            <p>
              The Lumina app code exposes a product with stage design, effect composition, music
              reactivity, saved states, and hardware mapping all living under one roof.
            </p>
          </div>

          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <article className="pillar-card" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <ul>
                  {pillar.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="modes">
          <div className="section-heading">
            <p className="eyebrow">Three lighting engines</p>
            <h2>From room mapping to autopilot to rhythmic choreography.</h2>
          </div>

          <div className="mode-grid">
            {modes.map((mode) => (
              <article className="mode-card" key={mode.title}>
                <p>{mode.eyebrow}</p>
                <h3>{mode.title}</h3>
                <p>{mode.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section stack-section" id="stack">
          <div className="section-heading">
            <p className="eyebrow">Pulled from code</p>
            <h2>The creative stack inside Lumina is already stacked.</h2>
            <p>
              The names below come directly from the app’s implementation: effect definitions,
              Sequentio pattern IDs, gradient presets, and supported hardware types.
            </p>
          </div>

          <div className="stack-grid">
            <article className="stack-card">
              <div className="stack-card-head">
                <h3>Effects</h3>
                <span>17 total</span>
              </div>
              <div className="tag-cloud">
                {effects.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>

            <article className="stack-card">
              <div className="stack-card-head">
                <h3>Sequentio patterns</h3>
                <span>36 total</span>
              </div>
              <div className="tag-cloud">
                {patterns.map((item) => (
                  <span className="tag tag-small" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>

            <article className="stack-card">
              <div className="stack-card-head">
                <h3>Gradient presets</h3>
                <span>7 built in</span>
              </div>
              <div className="tag-cloud">
                {gradients.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>

            <article className="stack-card">
              <div className="stack-card-head">
                <h3>Integrations</h3>
                <span>Local network ready</span>
              </div>
              <div className="tag-cloud">
                {integrations.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="cta-panel">
          <div>
            <p className="eyebrow">One more thing</p>
            <h2>Lumina keeps the drama in the room, not in the cloud.</h2>
            <p>
              The app stores layouts, scenes, gradients, calibration, and device config locally, and
              uses the microphone for real-time analysis to drive lighting on your network. Fast,
              tactile, and gloriously overqualified for “just some mood lights.”
            </p>
          </div>

          <div className="cta-actions">
            <a className="button button-primary" href="Privacy-Policy.md">
              Read privacy policy
            </a>
            <a className="button button-secondary" href="https://github.com/tukies/Lumina-iOS">
              Open GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
