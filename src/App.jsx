import './App.css'

const metrics = [
  { value: '17', label: 'Signature effects for mood, motion, and contrast' },
  { value: '7', label: 'Curated gradients for faster scene building' },
  { value: '4', label: 'Major lighting ecosystems in one app' },
  { value: 'Local', label: 'Responsive control without sending the room to the cloud' },
]

const promiseCards = [
  {
    eyebrow: 'Visual control',
    title: 'Shape the room like a lighting designer.',
    body:
      'Place lights in space, refine their movement, and compose a setup that feels intentional from every angle.',
  },
  {
    eyebrow: 'Fast creation',
    title: 'Build looks with speed and taste.',
    body:
      'Start from gradients, ripples, sparkles, lasers, sweeps, and more instead of rebuilding the same atmosphere every time.',
  },
  {
    eyebrow: 'Audio intelligence',
    title: 'Make the room react with precision.',
    body:
      'Dial in the response to bass, mids, highs, and tempo so motion feels musical rather than random.',
  },
  {
    eyebrow: 'Local-first',
    title: 'Keep the experience immediate.',
    body:
      'Layouts, scenes, and device settings stay with you while control stays close to the room.',
  },
]

const featureStories = [
  {
    eyebrow: 'Spatial stage',
    title: 'Design the room as one composition.',
    body:
      'Lumina gives you a visual stage for arranging fixtures, shaping color, and building a look that reads beautifully in the actual space.',
    points: [
      'Arrange fixtures where they actually live in the room.',
      'Preview color travel and balance before playback.',
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
    title: 'Find the right look fast.',
    body:
      'The effect library feels closer to a creative palette than a control panel, making it easy to move from mood to result without friction.',
    points: [
      'Browse effects visually instead of hunting through menus.',
      'Mix bold performance looks with subtle ambient motion.',
      'Keep favorite looks close for repeat sessions and scenes.',
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
    title: 'Tune the response to your space.',
    body:
      'Real-time diagnostics make audio-reactive lighting feel deliberate, with less guesswork and more consistency across speakers, rooms, and listening levels.',
    points: [
      'Watch bass, mids, highs, BPM, and energy in real time.',
      'Match thresholds to your room and playback level.',
      'Refine responsiveness before a scene becomes a favorite.',
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
    title: 'Made for atmosphere with presence.',
    body:
      'From lasers to sparkles to ripples, Lumina is built for setups that should feel alive on camera and in person, from quiet ambience to full-energy moments.',
    points: [
      'Create high-contrast looks that hold up in darker rooms.',
      'Use motion that feels expressive at a desk, in a bedroom, or at a party.',
      'Move between moods quickly without breaking the flow.',
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
      'Map the room by hand with visual placement, layered motion, and direct control across the stage.',
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
      'Browse looks visually, place them into the room, and move from idea to playback without digging through settings.',
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
      'Refine bass, mids, highs, BPM, and thresholds so the room responds the way your setup actually sounds.',
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
    body: 'Control strips, segments, and pixel-heavy installations with a workflow that feels designed for bigger setups.',
  },
  {
    name: 'Philips Hue Entertainment',
    body: 'Bring Hue entertainment areas into a more expressive, performance-minded control surface.',
  },
  {
    name: 'Nanoleaf',
    body: 'Bring panel layouts into the same visual language as strips, lamps, and grouped fixtures.',
  },
  {
    name: 'LIFX',
    body: 'Control LAN-capable bulbs and fixtures with changes that feel instant in the room.',
  },
]

const workflow = [
  'Connect supported devices across your local network.',
  'Arrange them into a room layout you can return to anytime.',
  'Choose a look, refine the response, and save the result as a scene.',
  'Recall the right atmosphere for focus, hosting, or late-night listening.',
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

              <p className="section-kicker">Lighting control for rooms with taste.</p>
              <h1 className="hero-title">Make your space feel alive.</h1>
              <p className="hero-subtitle">
                Lumina brings spatial control, audio-reactive motion, and beautifully composed effects
                into one iPhone app, so your WLED, Hue, Nanoleaf, and LIFX setup feels immersive,
                polished, and effortless to use.
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
                <li>Saved scenes</li>
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
                <span className="callout-label">Designed for repeat use</span>
                <strong>Set the room once. Keep the magic.</strong>
                <p>
                  Save layouts, keep favorite scenes, and come back to a setup that already knows how
                  your space should feel.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="site-section" id="overview">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-kicker">Why Lumina</p>
              <h2 className="section-headline">For people who care how a room feels.</h2>
              <p className="section-body">
                Most smart-light apps stop at utility. Lumina is built for bedrooms, desks, studios,
                and social spaces where lighting should feel cinematic, responsive, and considered.
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
              <h2 className="section-headline">A creative workflow, not a pile of settings.</h2>
              <p className="section-body">
                From room mapping to effect selection to audio tuning, Lumina keeps the process fluid
                so shaping the atmosphere feels quick, visual, and satisfying.
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
              <h2 className="section-headline">Everything you need to shape the mood.</h2>
              <p className="section-body">
                Lumina keeps the essentials close at hand, from mapping the room to finding the right
                look to dialing in the response until the space feels exactly right.
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
              <h2 className="section-headline align-left">A smooth path from setup to atmosphere.</h2>
              <p className="section-body align-left">
                Lumina is at its best when the distance between an idea and a finished room is short.
                Set up once, refine quickly, and return to the looks you love.
              </p>
              <ol className="workflow-list">
                {workflow.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>

            <article className="panel-card">
              <p className="section-kicker align-left">Compatibility</p>
              <h2 className="section-headline align-left">One control surface for the whole room.</h2>
              <p className="section-body align-left">
                If your setup spans more than one brand, Lumina brings everything into one place so the
                room behaves like a single experience instead of a stack of separate apps.
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
              Layouts, scenes, gradients, and device mappings stay local. Audio analysis happens on
              device. Commands stay on your network. The result is a setup that feels faster, cleaner,
              and more private by default.
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
