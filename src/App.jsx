import './App.css'

const metrics = [
  { value: '17', label: 'Signature motion looks tuned for mood, tempo, and contrast.' },
  { value: '4', label: 'Major lighting ecosystems controlled from one visual workspace.' },
  { value: 'Local', label: 'Layouts, scenes, and commands stay on your network.' },
  { value: 'Live', label: 'Audio diagnostics update in real time while you tune.' },
]

const highlights = [
  {
    eyebrow: 'Spatial control',
    title: 'Compose the room as one scene.',
    body:
      'Place fixtures where they actually live, shape the travel of color, and balance the room before playback starts.',
  },
  {
    eyebrow: 'Effect library',
    title: 'Start with a look, not a settings menu.',
    body:
      'Browse visually, move quickly between bold and quiet moods, and keep the strongest looks close for repeat sessions.',
  },
  {
    eyebrow: 'Audio tuning',
    title: 'Make motion feel musical.',
    body:
      'Watch bass, mids, highs, BPM, and energy so reactive scenes feel deliberate instead of chaotic.',
  },
  {
    eyebrow: 'Local feel',
    title: 'Stay fast by staying close.',
    body:
      'Audio analysis happens on device and device control stays local, which keeps the whole experience responsive.',
  },
]

const stories = [
  {
    eyebrow: 'Spatial stage',
    title: 'Design the room as a composition.',
    body:
      'Lumina turns the room into a visual stage for placing fixtures, shaping color travel, and balancing the whole scene before playback.',
    points: [
      'Arrange fixtures where they actually live in the room.',
      'Preview color travel and balance before lights go live.',
      'Return to saved layouts whenever the setup comes back on.',
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
    title: 'Find the right atmosphere quickly.',
    body:
      'The library feels closer to a creative palette than a configuration screen, so moving from an idea to a room-filling result feels immediate.',
    points: [
      'Browse effects visually instead of digging through controls.',
      'Mix bold performance looks with quieter ambient motion.',
      'Keep favorites close for saved scenes and repeat sessions.',
    ],
    image: {
      src: 'effects-library.jpg',
      alt: 'Lumina effect library showing a set of visual effect tiles for quick scene building.',
      width: 587,
      height: 1200,
    },
  },
  {
    eyebrow: 'Audio tuning',
    title: 'Refine the response for your space.',
    body:
      'Real-time diagnostics make audio-reactive lighting feel precise, with less guesswork and more consistency across rooms, speakers, and listening levels.',
    points: [
      'Watch bass, mids, highs, BPM, and energy in real time.',
      'Match thresholds to your room and playback level.',
      'Refine responsiveness before a scene becomes a favorite.',
    ],
    image: {
      src: 'audio-calibration.jpg',
      alt: 'Lumina audio calibration interface showing live analysis data and signal diagnostics.',
      width: 1083,
      height: 1200,
    },
  },
]

const workflows = [
  {
    name: 'Map the room',
    detail: 'Build a stage that reflects the actual space, not just a list of devices.',
    image: {
      src: 'spatial-ripple.jpg',
      alt: 'Lumina spatial control view with a ripple effect centered in the room map.',
      width: 585,
      height: 1200,
    },
  },
  {
    name: 'Choose the look',
    detail: 'Move through visual presets quickly until the room feels aligned with the moment.',
    image: {
      src: 'effects-library.jpg',
      alt: 'Lumina effect library with visual presets available for quick scene building.',
      width: 587,
      height: 1200,
    },
  },
  {
    name: 'Tune the response',
    detail: 'Dial in bass, mids, highs, BPM, and thresholds until motion feels intentional.',
    image: {
      src: 'audio-calibration.jpg',
      alt: 'Lumina audio calibration screen showing live levels and analysis controls.',
      width: 1083,
      height: 1200,
    },
  },
]

const integrations = [
  {
    name: 'WLED',
    logo: 'wled-logo.png',
    body: 'Control strips, segments, and pixel-heavy installations with a workflow designed for larger setups.',
  },
  {
    name: 'Philips Hue Entertainment',
    logo: 'philipshue-logo.svg',
    body: 'Bring entertainment areas into a more expressive, performance-minded control surface.',
  },
  {
    name: 'Nanoleaf',
    logo: 'nanoleaf-logo.png',
    logoWide: true,
    body: 'Keep panel layouts in the same visual language as strips, lamps, and grouped fixtures.',
  },
  {
    name: 'LIFX',
    logo: 'lifx-logo.svg',
    logoWide: true,
    body: 'Control LAN-capable bulbs and fixtures with changes that feel instant in the room.',
  },
]

const setupSteps = [
  'Connect supported devices across your local network.',
  'Arrange them into a room layout you can return to anytime.',
  'Choose a look, refine the response, and save the result as a scene.',
  'Recall the right atmosphere for focus, hosting, or late-night listening.',
]

const heroSystems = ['WLED', 'Hue', 'Nanoleaf', 'LIFX']

const consoleSignals = [
  { label: 'Scene building', value: 'Spatial mapping, gradients, favorites, and saved looks.' },
  { label: 'Audio tuning', value: 'Live BPM, energy, and frequency-band response.' },
]

function HeroConsole() {
  return (
    <div className="hero-console">
      <div className="hero-console-body">
        <div className="hero-console-heading">
          <p>Creative control</p>
          <strong>One calm workspace for the whole room.</strong>
        </div>

        <div className="hero-console-systems" aria-label="Supported systems">
          {heroSystems.map((system) => (
            <span key={system}>{system}</span>
          ))}
        </div>

        <div className="hero-console-grid">
          {consoleSignals.map((signal) => (
            <div className="hero-console-item" key={signal.label}>
              <span>{signal.label}</span>
              <strong>{signal.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function App() {
  const baseUrl = import.meta.env.BASE_URL
  const media = (fileName) => `${baseUrl}media/${fileName}`
  const privacyHref = `${baseUrl}privacy/`

  return (
    <div className="site-shell">
      <div className="global-nav-glass">
        <div className="nav-pill">
          <a className="nav-brand" href="#top" aria-label="Lumina home">
            Lumina
          </a>

          <nav className="nav-links" aria-label="Primary">
            <a href="#overview">Overview</a>
            <a href="#features">Detail</a>
            <a href="#workflows">Workflow</a>
            <a href="#systems">Systems</a>
            <a href={privacyHref}>Privacy</a>
          </nav>
        </div>
      </div>

      <main id="top">
        <section className="hero-section">
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="hero-kicker">Spatial, audio-reactive lighting studio for iPhone, iPad, and Mac</p>
              <div className="hero-brand-lockup">
                <img
                  className="hero-app-icon"
                  src={media('lumina-icon.png')}
                  alt=""
                  width="512"
                  height="512"
                  aria-hidden="true"
                />
                <p className="hero-brand">Lumina</p>
              </div>
              <h1 className="hero-title">Light the room like it means something.</h1>
              <p className="hero-subtitle">
                Lumina brings spatial control, audio-reactive motion, and beautifully composed effects
                into one app, so your WLED, Hue, Nanoleaf, and LIFX setup feels immersive, polished,
                and fast to shape.
              </p>

              <div className="cta-row">
                <a className="primary-button" href="#overview">
                  Explore Lumina
                </a>
                <button className="coming-soon-button" type="button" aria-disabled="true">
                  <span>Coming soon</span>
                </button>
              </div>

              <ul className="hero-facts" aria-label="Product highlights">
                <li>Spatial room mapping</li>
                <li>Audio-reactive motion</li>
                <li>Saved scenes</li>
                <li>Local-network control</li>
              </ul>
            </div>

            <div className="hero-stage" aria-label="Lumina interface preview">
              <div className="hero-stage-frame">
                <div className="stage-halo" aria-hidden="true" />
                <div className="stage-grid" aria-hidden="true" />

                <div className="stage-copy">
                  <p>Spatial stage</p>
                  <strong>Map the room, choose the mood, and tune the response in one view.</strong>
                </div>

                <div className="device-stack">
                  <div className="stage-rainbow-glow" aria-hidden="true" />
                  <figure className="device-frame device-frame--primary">
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
                </div>
              </div>

              <HeroConsole />
            </div>
          </div>
        </section>

        <section className="support-section" id="overview">
          <div className="section-shell support-layout">
            <div className="section-intro support-intro">
              <p className="section-kicker">Overview</p>
              <h2 className="section-title">A lighting studio instead of a pile of presets.</h2>
              <p className="section-copy">
                Most smart-light apps stop at utility. Lumina is built for bedrooms, desks, studios,
                and social spaces where lighting should feel cinematic, responsive, and considered.
              </p>
            </div>

            <div className="metric-grid" aria-label="Product metrics">
              {metrics.map((metric) => (
                <article className="metric-item" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="section-shell">
            <div className="highlight-grid">
              {highlights.map((item) => (
                <article className="highlight-item" key={item.title}>
                  <p className="item-eyebrow">{item.eyebrow}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="story-section" id="features">
          <div className="section-shell section-shell-wide">
            <div className="section-intro align-left">
              <p className="section-kicker">Detail</p>
              <h2 className="section-title">Built to move from layout to atmosphere without friction.</h2>
              <p className="section-copy">
                From room mapping to effect selection to audio tuning, Lumina keeps the process visual
                and fluid so shaping the atmosphere feels quick, clear, and satisfying.
              </p>
            </div>

            <div className="story-list">
              {stories.map((story, index) => (
                <article className="story-band" key={story.title}>
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
                    <span className="story-index">0{index + 1}</span>
                    <p className="item-eyebrow">{story.eyebrow}</p>
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

        <section className="workflow-section" id="workflows">
          <div className="section-shell">
            <div className="section-intro">
              <p className="section-kicker">Workflow</p>
              <h2 className="section-title">See the room, choose the look, tune the response.</h2>
              <p className="section-copy">
                The core workflow stays calm and direct, so the room always feels like one
                composition instead of a stack of disconnected controls.
              </p>
            </div>

            <div className="workflow-columns">
              {workflows.map((workflow, index) => (
                <article className="workflow-column" key={workflow.name}>
                  <span className="workflow-index">0{index + 1}</span>
                  <h3>{workflow.name}</h3>
                  <p>{workflow.detail}</p>
                  <figure className="workflow-media">
                    <img
                      src={media(workflow.image.src)}
                      alt={workflow.image.alt}
                      width={workflow.image.width}
                      height={workflow.image.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="systems-section" id="systems">
          <div className="section-shell systems-layout">
            <div className="systems-copy">
              <p className="section-kicker align-left">Systems</p>
              <h2 className="section-title align-left">One control surface for the whole room.</h2>
              <p className="section-copy align-left">
                If your setup spans more than one brand, Lumina brings everything into one place so
                the room behaves like a single experience instead of a stack of separate apps.
              </p>

              <ol className="setup-list">
                {setupSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>

            <div className="integration-list">
              {integrations.map((integration) => (
                <article className="integration-row" key={integration.name}>
                  <div className="integration-brand">
                    <span
                      className={`integration-logo-shell${
                        integration.logoWide ? ' integration-logo-shell--wide' : ''
                      }`}
                    >
                      <img
                        className="integration-logo"
                        src={media(integration.logo)}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        aria-hidden="true"
                      />
                    </span>
                    <h3>{integration.name}</h3>
                  </div>
                  <p>{integration.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-section">
          <div className="section-shell closing-band">
            <div className="closing-copy">
              <p className="section-kicker align-left">Privacy by design</p>
              <h2 className="section-title align-left">Fast because it stays in the room.</h2>
              <p className="section-copy align-left">
                Layouts, scenes, gradients, and device mappings stay local. Audio analysis happens on
                device. Commands stay on your network. The result is a setup that feels faster,
                cleaner, and more private by default.
              </p>
            </div>

            <div className="cta-row closing-actions">
              <a className="primary-button" href={privacyHref}>
                Read privacy policy
              </a>
              <button className="coming-soon-button" type="button" aria-disabled="true">
                <span>Coming soon</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
