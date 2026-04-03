import './App.css'

const metrics = [
  { value: '17', label: 'Signature effects for mood, motion, and contrast' },
  { value: '7', label: 'Curated gradients for faster scene building' },
  { value: '4', label: 'Major lighting ecosystems in one app' },
  { value: 'Local', label: 'Responsive control without sending the room to the cloud' },
]

const highlights = [
  {
    eyebrow: 'Spatial control',
    title: 'Compose the whole room at once.',
    body:
      'Place fixtures where they actually live, shape movement visually, and build a setup that feels coherent from every angle.',
  },
  {
    eyebrow: 'Scene building',
    title: 'Move from mood to result quickly.',
    body:
      'Start with bold effects and curated gradients, then refine the room until the atmosphere feels exactly right.',
  },
  {
    eyebrow: 'Audio response',
    title: 'Keep the motion musical.',
    body:
      'Tune how the room reacts to bass, mids, highs, and tempo so the energy feels deliberate instead of chaotic.',
  },
  {
    eyebrow: 'Local feel',
    title: 'Stay fast by staying close.',
    body:
      'Layouts, scenes, and device settings stay with you while the control loop remains on your local network.',
  },
]

const stories = [
  {
    eyebrow: 'Spatial stage',
    title: 'Design the space as one composition.',
    body:
      'Lumina turns the room into a visual stage for arranging fixtures, shaping color travel, and balancing the whole scene before playback.',
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
    title: 'Find the right look fast.',
    body:
      'The library feels closer to a creative palette than a settings menu, making it easy to move from an idea to a room-filling atmosphere.',
    points: [
      'Browse effects visually instead of digging through controls.',
      'Mix bold performance looks with quiet ambient motion.',
      'Keep favorites close for repeat sessions and saved scenes.',
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
    title: 'Refine the response to your space.',
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
    name: 'Spatial control',
    detail:
      'Map the room with visual placement, layered motion, and direct control across the stage.',
    image: {
      src: 'spatial-ripple.jpg',
      alt: 'Lumina spatial control view with a ripple effect centered in the room map.',
      width: 585,
      height: 1200,
    },
  },
  {
    name: 'Effect library',
    detail:
      'Browse looks visually, place them into the room, and move from idea to playback without friction.',
    image: {
      src: 'effects-library.jpg',
      alt: 'Lumina effect library with visual presets available for quick scene building.',
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
      alt: 'Lumina audio calibration screen showing live levels and analysis controls.',
      width: 1083,
      height: 1200,
    },
  },
]

const integrations = [
  {
    name: 'WLED',
    body: 'Control strips, segments, and pixel-heavy installations with a workflow designed for larger setups.',
  },
  {
    name: 'Philips Hue Entertainment',
    body: 'Bring Hue entertainment areas into a more expressive, performance-minded control surface.',
  },
  {
    name: 'Nanoleaf',
    body: 'Keep panel layouts in the same visual language as strips, lamps, and grouped fixtures.',
  },
  {
    name: 'LIFX',
    body: 'Control LAN-capable bulbs and fixtures with changes that feel instant in the room.',
  },
]

const setupSteps = [
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
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-background" aria-hidden="true" />

          <div className="hero-content">
            <div className="hero-copy">
              <p className="hero-brandmark">Lumina</p>
              <p className="hero-label">Spatial, audio-reactive lighting control for iPhone</p>
              <h1 className="hero-title">Light the room like it means something.</h1>
              <p className="hero-subtitle">
                Lumina brings spatial control, audio-reactive motion, and beautifully composed effects
                into one iPhone app, so your WLED, Hue, Nanoleaf, and LIFX setup feels immersive,
                polished, and effortless to use.
              </p>

              <div className="cta-row">
                <a className="primary-button" href="#overview">
                  Explore Lumina
                </a>
                <a className="secondary-button" href="https://github.com/tukies/Lumina-iOS">
                  View on GitHub
                </a>
              </div>

              <ul className="hero-facts" aria-label="Product highlights">
                <li>Spatial room mapping</li>
                <li>Audio-reactive motion</li>
                <li>Saved scenes</li>
                <li>Local-network control</li>
              </ul>
            </div>

            <figure className="hero-figure">
              <img
                src={media('spatial-rainbow.jpg')}
                alt="Lumina controlling a room with a rainbow spatial effect across mapped fixtures."
                width="585"
                height="1200"
                fetchPriority="high"
                loading="eager"
                decoding="sync"
              />
              <figcaption>Spatial stage, scene-ready control, and live audio response in one view.</figcaption>
            </figure>
          </div>
        </section>

        <section className="support-section" id="overview">
          <div className="section-frame">
            <div className="section-intro">
              <p className="section-kicker">Why Lumina</p>
              <h2 className="section-title">For spaces that deserve more than presets.</h2>
              <p className="section-copy">
                Most smart-light apps stop at utility. Lumina is built for bedrooms, desks, studios,
                and social spaces where lighting should feel cinematic, responsive, and considered.
              </p>
            </div>

            <div className="metric-rail">
              {metrics.map((metric) => (
                <article className="metric-item" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>

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
          <div className="section-frame section-frame-wide">
            <div className="section-intro align-left">
              <p className="section-kicker">Detail</p>
              <h2 className="section-title">A creative workflow, not a pile of settings.</h2>
              <p className="section-copy">
                From room mapping to effect selection to audio tuning, Lumina keeps the process fluid
                so shaping the atmosphere feels quick, visual, and satisfying.
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
          <div className="section-frame">
            <div className="section-intro">
              <p className="section-kicker">Workflow</p>
              <h2 className="section-title">Everything you need to shape the mood.</h2>
              <p className="section-copy">
                Lumina keeps the essentials close at hand, from mapping the room to finding the right
                look to dialing in the response until the space feels exactly right.
              </p>
            </div>

            <div className="workflow-columns">
              {workflows.map((workflow) => (
                <article className="workflow-column" key={workflow.name}>
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
          <div className="section-frame systems-layout">
            <div className="systems-copy">
              <p className="section-kicker align-left">Systems</p>
              <h2 className="section-title align-left">One control surface for the whole room.</h2>
              <p className="section-copy align-left">
                If your setup spans more than one brand, Lumina brings everything into one place so the
                room behaves like a single experience instead of a stack of separate apps.
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
                  <h3>{integration.name}</h3>
                  <p>{integration.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-section">
          <div className="closing-band">
            <div className="closing-copy">
              <p className="section-kicker align-left">Privacy by design</p>
              <h2 className="section-title align-left">Stays in the room.</h2>
              <p className="section-copy align-left">
                Layouts, scenes, gradients, and device mappings stay local. Audio analysis happens on
                device. Commands stay on your network. The result is a setup that feels faster,
                cleaner, and more private by default.
              </p>
            </div>

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
