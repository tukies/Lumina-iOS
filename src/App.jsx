import './App.css'

const metrics = [
  { value: '17', label: 'Built-in effects ready to drop into a room' },
  { value: '7', label: 'Preset gradients for faster scene building' },
  { value: '4', label: 'Lighting ecosystems supported today' },
  { value: 'Local', label: 'Audio analysis and control stay close to the room' },
]

const promiseCards = [
  {
    eyebrow: 'Visual control',
    title: 'Map fixtures like a stage plot.',
    body:
      'Place lights in space, adjust endpoints, and see how a scene reads before you send it to the room.',
  },
  {
    eyebrow: 'Fast creation',
    title: 'Build looks from an actual effect library.',
    body:
      'Start from gradients, ripples, sparkles, lasers, sweeps, and more instead of rebuilding the same mood every session.',
  },
  {
    eyebrow: 'Audio intelligence',
    title: 'Tune response instead of hoping for good sync.',
    body:
      'Lumina exposes bass, mid, high, beat phase, BPM, and sensitivity so the room reacts with intent.',
  },
  {
    eyebrow: 'Local-first',
    title: 'Keep the experience immediate.',
    body:
      'Layouts, scenes, calibration, and device mappings live on your device while lighting commands stay on your network.',
  },
]

const featureStories = [
  {
    eyebrow: 'Spatial stage',
    title: 'Design the room visually, not bulb by bulb.',
    body:
      'Lumina gives you a spatial canvas for arranging fixtures, testing gradients, and building compositions that make sense in the actual room.',
    points: [
      'Drag fixtures into place and adjust the line of motion.',
      'Preview color travel and spatial balance before playback.',
      'Return to saved layouts instead of setting up every time.',
    ],
    image: {
      src: 'spatial-rainbow.jpg',
      alt: 'Lumina spatial stage with a rainbow gradient mapped across fixtures in a room layout.',
      width: 585,
      height: 1200,
    },
  },
  {
    eyebrow: 'Effect library',
    title: 'Move from idea to look in seconds.',
    body:
      'The built-in library makes the app feel like a creative tool, not a utility. Choose a motion style, drop it into the stage, and iterate fast.',
    points: [
      'Browse effects as visual cards, not hidden menu items.',
      'Mix bold, cinematic looks with subtle ambient motion.',
      'Keep favorite looks close for repeated sessions or scenes.',
    ],
    image: {
      src: 'effects-library.jpg',
      alt: 'Lumina effect library showing visual effect tiles such as Rainbow Wave, Breathing, Ripple, and Sparkle.',
      width: 587,
      height: 1200,
    },
    reverse: true,
  },
  {
    eyebrow: 'Audio calibration',
    title: 'See what the engine hears.',
    body:
      'Real-time diagnostics turn audio reactivity into something you can tune. That means less guesswork and more reliable response across different speakers and rooms.',
    points: [
      'Inspect live bass, mid, high, BPM, and energy values.',
      'Calibrate thresholds to match your room and playback level.',
      'Debug reaction quality before you commit to a scene.',
    ],
    image: {
      src: 'audio-calibration.jpg',
      alt: 'Lumina audio calibration screen showing real-time bass, mid, high, BPM, and signal diagnostics.',
      width: 1083,
      height: 1200,
    },
  },
  {
    eyebrow: 'Performance looks',
    title: 'Built for movement, contrast, and punch.',
    body:
      'From lasers to sparkles to ripples, Lumina is aimed at setups that should feel alive on camera and in person, whether you are building ambience or a mini light show.',
    points: [
      'Create high-contrast looks that read clearly in dark rooms.',
      'Use audio-reactive motion for parties, desks, bedrooms, or studio sessions.',
      'Switch looks quickly without leaving the main control surface.',
    ],
    image: {
      src: 'laser-mode.jpg',
      alt: 'Lumina stage view showing a laser-style lighting effect mapped across multiple fixtures.',
      width: 587,
      height: 1200,
    },
    reverse: true,
  },
]

const workflowsShowcase = [
  {
    name: 'Spatial control',
    detail:
      'Build the room by hand with mapped fixtures, visual layering, and direct manipulation across the stage.',
    image: {
      src: 'spatial-ripple.jpg',
      alt: 'Lumina spatial mode with a ripple effect centered in the room map.',
      width: 585,
      height: 1200,
    },
  },
  {
    name: 'Effect library',
    detail:
      'Browse looks visually, drop them into the stage, and move from idea to playback without digging through settings.',
    image: {
      src: 'effects-library.jpg',
      alt: 'Lumina effect library with multiple visual presets available for quick scene building.',
      width: 587,
      height: 1200,
    },
  },
  {
    name: 'Audio tuning',
    detail:
      'Inspect bass, mid, high, BPM, and thresholds so the room responds the way your speakers and space actually behave.',
    image: {
      src: 'audio-calibration.jpg',
      alt: 'Lumina audio calibration interface showing live analysis data and signal diagnostics.',
      width: 1083,
      height: 1200,
    },
  },
]

const integrations = [
  {
    name: 'WLED',
    body: 'Drive strips, segments, and pixel-heavy setups with room-aware control instead of one-off commands.',
  },
  {
    name: 'Philips Hue Entertainment',
    body: 'Work with entertainment areas when you want Hue hardware to behave more like a performance rig.',
  },
  {
    name: 'Nanoleaf',
    body: 'Bring panel layouts into the same creative workflow as strips, lamps, and fixture groups.',
  },
  {
    name: 'LIFX',
    body: 'Control LAN-capable bulbs and fixtures locally so changes feel immediate in the room.',
  },
]

const workflow = [
  'Discover and pair supported devices on your local network.',
  'Map them into a room layout and save the setup.',
  'Choose an effect, tune the response, and store the result as a scene.',
  'Recall the right scene for ambience, focus, parties, or live sessions.',
]

function App() {
  const baseUrl = import.meta.env.BASE_URL
  const media = (fileName) => `${baseUrl}media/${fileName}`
  const privacyHref = `${baseUrl}privacy/`

  return (
    <div className="site-shell">
      <header className="global-nav">
        <div className="nav-inner">
          <a className="nav-brand" href="#top" aria-label="Lumina home">
            <img src={media('lumina-icon.png')} alt="" width="32" height="32" />
            <span>Lumina</span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            <a href="#overview">Overview</a>
            <a href="#features">Features</a>
            <a href="#modes">Workflows</a>
            <a href="#integrations">Integrations</a>
            <a href={privacyHref}>Privacy</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="site-section hero-section">
          <div className="section-inner hero-layout">
            <div className="hero-copy">
              <div className="brand-pill">
                <img src={media('lumina-icon.png')} alt="" width="48" height="48" />
                <div>
                  <span>Lumina for iPhone</span>
                  <strong>Spatial, audio-reactive lighting control</strong>
                </div>
              </div>

              <p className="section-kicker">Smart lighting that feels like a live instrument.</p>
              <h1 className="hero-title">Turn your room into a reactive light show.</h1>
              <p className="hero-subtitle">
                Lumina maps your lights in space, layers bold visual effects, and listens to music in
                real time so WLED, Philips Hue Entertainment, Nanoleaf, and LIFX setups feel fast,
                immersive, and intentional.
              </p>

              <div className="cta-row">
                <a className="primary-button" href="#features">
                  Explore features
                </a>
                <a className="secondary-button" href="https://github.com/tukies/Lumina-iOS">
                  View on GitHub
                </a>
              </div>

              <ul className="proof-strip" aria-label="Product highlights">
                <li>Spatial room mapping</li>
                <li>On-device audio analysis</li>
                <li>Scene saving and room mapping</li>
                <li>Local-network lighting control</li>
              </ul>
            </div>

            <div className="hero-visual" aria-label="Lumina app preview">
              <figure className="hero-shot hero-shot-main">
                <img
                  src={media('spatial-rainbow.jpg')}
                  alt="Lumina controlling a room with a rainbow spatial effect across mapped fixtures."
                  width="585"
                  height="1200"
                  fetchPriority="high"
                  loading="eager"
                  decoding="sync"
                />
              </figure>

              <figure className="hero-shot hero-shot-top">
                <img
                  src={media('spatial-sparkle.jpg')}
                  alt="Lumina spatial view with a colorful sparkle effect active across a mapped stage."
                  width="847"
                  height="1200"
                  loading="lazy"
                  decoding="async"
                />
              </figure>

              <figure className="hero-shot hero-shot-bottom">
                <img
                  src={media('effects-library.jpg')}
                  alt="Lumina effect library with multiple lighting presets displayed as visual cards."
                  width="587"
                  height="1200"
                  loading="lazy"
                  decoding="async"
                />
              </figure>

              <aside className="hero-callout">
                <span className="callout-label">Built for real setups</span>
                <strong>Map the room once. Reuse it every session.</strong>
                <p>
                  Save scenes, reuse layouts, and tune the audio engine instead of fighting the same
                  settings every time you want the room to look right.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="site-section" id="overview">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-kicker">Why Lumina</p>
              <h2 className="section-headline">Built for people who want more than presets and a color wheel.</h2>
              <p className="section-body">
                Most smart-light apps stop at simple color changes. Lumina is designed for bedrooms,
                desks, studios, and parties where lighting should feel composed, reactive, and worth
                looking at.
              </p>
            </div>

            <div className="promise-grid">
              {promiseCards.map((card) => (
                <article className="promise-card" key={card.title}>
                  <p className="card-eyebrow">{card.eyebrow}</p>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>

            <div className="metric-strip">
              {metrics.map((metric) => (
                <article className="metric-card" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="site-section" id="features">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-kicker">Inside the app</p>
              <h2 className="section-headline">Control, creation, and tuning in one workflow.</h2>
              <p className="section-body">
                Lumina brings room mapping, effect browsing, audio calibration, and bold performance
                looks into one interface so building the right atmosphere takes less setup and less
                guesswork.
              </p>
            </div>

            <div className="story-stack">
              {featureStories.map((story) => (
                <article
                  className={`story-card${story.reverse ? ' reverse' : ''}`}
                  key={story.title}
                >
                  <figure className="story-media">
                    <img
                      src={media(story.image.src)}
                      alt={story.image.alt}
                      width={story.image.width}
                      height={story.image.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>

                  <div className="story-copy">
                    <p className="card-eyebrow">{story.eyebrow}</p>
                    <h3>{story.title}</h3>
                    <p>{story.body}</p>
                    <ul>
                      {story.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="site-section" id="modes">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-kicker">Core workflows</p>
              <h2 className="section-headline">Built for setup, creation, and tuning.</h2>
              <p className="section-body">
                The app is strongest when the essentials are fast: map the room, find the right look,
                and calibrate the response until the lighting feels right in your actual space.
              </p>
            </div>

            <div className="mode-grid">
              {workflowsShowcase.map((mode) => (
                <article className="mode-card" key={mode.name}>
                  <figure className="mode-card-media">
                    <img
                      src={media(mode.image.src)}
                      alt={mode.image.alt}
                      width={mode.image.width}
                      height={mode.image.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                  <div className="mode-card-copy">
                    <h3>{mode.name}</h3>
                    <p>{mode.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="site-section" id="integrations">
          <div className="section-inner split-layout">
            <article className="panel-card">
              <p className="section-kicker align-left">Creative workflow</p>
              <h2 className="section-headline align-left">A tighter loop from pairing to playback.</h2>
              <p className="section-body align-left">
                Lumina is strongest when it shortens the distance between an idea and a room-filling
                result. The workflow is built around setup once, tune quickly, and reuse often.
              </p>
              <ol className="workflow-list">
                {workflow.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>

            <article className="panel-card">
              <p className="section-kicker align-left">Compatibility</p>
              <h2 className="section-headline align-left">Designed for mixed ecosystems.</h2>
              <p className="section-body align-left">
                If your room uses more than one brand, Lumina brings them into one control surface so
                the lighting behaves like a single setup instead of four separate apps.
              </p>
              <div className="integration-grid">
                {integrations.map((integration) => (
                  <article className="integration-card" key={integration.name}>
                    <h3>{integration.name}</h3>
                    <p>{integration.body}</p>
                  </article>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="site-section closing-section">
          <div className="section-inner closing-card">
            <div className="closing-brand">
              <img src={media('lumina-icon.png')} alt="" width="72" height="72" />
              <div>
                <p className="section-kicker align-left">Privacy by design</p>
                <h2 className="section-headline align-left">Stays in the room.</h2>
              </div>
            </div>
            <p className="section-body align-left">
              Lumina stores layouts, scenes, gradients, calibration, and device mappings locally.
              Microphone analysis happens on device. Commands stay on your network. That keeps the app
              responsive while giving you a clearer privacy story than cloud-heavy smart-home tools.
            </p>
            <div className="cta-row">
              <a className="primary-button" href={privacyHref}>
                Read privacy policy
              </a>
              <a className="secondary-button" href="https://github.com/tukies/Lumina-iOS">
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
