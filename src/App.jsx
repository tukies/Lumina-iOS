import './App.css'

const baseUrl = import.meta.env.BASE_URL
const media = (fileName) => `${baseUrl}media/${fileName}`
const v11Media = (fileName) => media(`v1-1/${fileName}`)
const appStoreHref = 'https://apps.apple.com/us/app/lumina-spatial-light-dj/id6760628430'
const discordInviteHref = 'https://discord.gg/g9bxRcNKTD'
const discordWidgetHref = 'https://discord.com/widget?id=1499482438865522882&theme=dark'

const metrics = [
  { value: '49', label: 'Flow patterns shaped by beat detection, fixture mapping, and music direction.' },
  { value: '5', label: 'Lighting ecosystems brought into one spatial control surface.' },
  { value: 'Live', label: 'Music analysis tracks energy, BPM, beat phase, and frequency bands.' },
  { value: 'Opt-in', label: 'iCloud sync keeps saved rooms and scenes available only when enabled.' },
]

const highlights = [
  {
    eyebrow: 'Spatial control',
    title: 'Compose the room as one scene.',
    body:
      'Place fixtures where they actually live, shape the travel of color, and balance the room before playback starts.',
  },
  {
    eyebrow: 'Flow',
    title: 'Let music move across the room.',
    body:
      'Flow adds continuous music-reactive motion with sweeps, pulses, waves, drops, and color movement mapped to your setup.',
  },
  {
    eyebrow: 'Wave Studio',
    title: 'Shape motion before it goes live.',
    body:
      'Tune color, timing, energy, and fixture response with previews that make each scene feel deliberate.',
  },
  {
    eyebrow: 'Performance Pad',
    title: 'Trigger show cues in the moment.',
    body:
      'Hits, drops, sweeps, blackouts, rhythm cues, haptics, and Live Activity controls give the room a live-show layer.',
  },
]

const releasePanels = [
  {
    eyebrow: 'Flow',
    title: 'A new public music-reactive engine.',
    body:
      'Choose from 49 spatial patterns that respond to beat detection, musical energy, fixture mapping, and cover-art-inspired palettes.',
    image: {
      src: 'v1-1/flow-mode.jpg',
      alt: 'Lumina Flow controls showing track-aware pattern and color controls.',
      width: 830,
      height: 1800,
    },
  },
  {
    eyebrow: 'Wave Studio',
    title: 'Design movement, not just color.',
    body:
      'Fine-tune speed, color, placement, timing, and energy before sending a look to the room.',
    image: {
      src: 'v1-1/wave-studio.jpg',
      alt: 'Lumina Wave Studio controls for tuning an Aurora Veil lighting effect.',
      width: 830,
      height: 1800,
    },
  },
  {
    eyebrow: 'Performance Pad',
    title: 'Live cues for drops and transitions.',
    body:
      'Trigger sweeps, slams, blackouts, or moving light objects from a touch surface built for show-style control.',
    image: {
      src: 'v1-1/performance-pad.jpg',
      alt: 'Lumina Performance Pad showing live cue controls for drops, motion, and objects.',
      width: 830,
      height: 1800,
    },
  },
]

const stories = [
  {
    eyebrow: 'Spatial stage',
    title: 'Map the room as a real stage.',
    body:
      'Lumina keeps every fixture in physical context, so effects can move through the room instead of making every light flash together.',
    points: [
      'Arrange fixtures where they actually live in the room.',
      'Preview motion across bulbs, strips, panels, and pixels.',
      'Save room presets and restore them when the setup comes back on.',
    ],
    image: {
      src: 'v1-1/spatial-lighting.jpg',
      alt: 'Lumina spatial stage showing a mapped room with lighting effects flowing across fixtures.',
      width: 830,
      height: 1800,
    },
  },
  {
    eyebrow: 'Effect library',
    title: 'Build scenes from visual effects.',
    body:
      'The effect library stays visual, so choosing the next mood feels closer to building a scene than digging through a settings list.',
    points: [
      'Browse effects visually instead of digging through controls.',
      'Mix bold performance looks with quieter ambient motion.',
      'Save and share scenes for repeat sessions.',
    ],
    image: {
      src: 'v1-1/effect-library.jpg',
      alt: 'Lumina effect library showing visual lighting effects that can be added to the stage.',
      width: 830,
      height: 1800,
    },
  },
  {
    eyebrow: 'Scenes',
    title: 'Save the looks that work.',
    body:
      'Scenes turn a tuned stage into something repeatable, shareable, and quick to recall when the room needs to shift.',
    points: [
      'Keep favorite combinations close for listening, hosting, and focus.',
      'Use visual previews instead of remembering settings by name.',
      'Export and share scenes when you want to move a look between setups.',
    ],
    image: {
      src: 'v1-1/scene-library.jpg',
      alt: 'Lumina scene library showing named visual scenes such as Stardust, Nebula, and Laser Burst.',
      width: 830,
      height: 1800,
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
      src: 'v1-1/audio-calibration.jpg',
      alt: 'Lumina audio calibration interface showing live analysis data and signal diagnostics.',
      width: 830,
      height: 1800,
    },
  },
  {
    eyebrow: 'Rooms',
    title: 'Remember the room when the setup changes.',
    body:
      'Room presets keep fixture positions, saved scenes, and layouts close, with opt-in iCloud sync for selected saved content when you choose to enable it.',
    points: [
      'Save layouts for rooms with many fixtures and pixels.',
      'Recall the active setup without rebuilding the stage.',
      'Use iCloud sync only when you want saved rooms and scenes across devices.',
    ],
    image: {
      src: 'v1-1/rooms.jpg',
      alt: 'Lumina Rooms screen showing a saved living room layout with fixture, device, and pixel counts.',
      width: 830,
      height: 1800,
    },
  },
]

const workflows = [
  {
    name: 'Map the room',
    detail: 'Build a stage that reflects the actual space, not just a list of devices.',
    image: {
      src: 'v1-1/spatial-lighting.jpg',
      alt: 'Lumina spatial control view with a room map and effect motion across fixtures.',
      width: 830,
      height: 1800,
    },
  },
  {
    name: 'Start Flow',
    detail: 'Choose a spatial pattern and let music drive movement, palettes, beat cues, and energy.',
    image: {
      src: 'v1-1/flow-mode.jpg',
      alt: 'Lumina Flow view with track-aware motion and color controls.',
      width: 830,
      height: 1800,
    },
  },
  {
    name: 'Tune the response',
    detail: 'Dial in bass, mids, highs, BPM, and thresholds until motion feels intentional.',
    image: {
      src: 'v1-1/audio-calibration.jpg',
      alt: 'Lumina audio calibration screen showing live levels and analysis controls.',
      width: 830,
      height: 1800,
    },
  },
]

const demoVideos = [
  {
    eyebrow: 'Room and iPad',
    title: 'Spatial map driving.',
    body: "The iPad shows Lumina's room map while the pixels shift through the mapped color field.",
    video: {
      src: 'chill_live.mp4',
      type: 'video/mp4',
      poster: 'chill_live-poster.jpg',
    },
  },
  {
    eyebrow: 'Handheld POV',
    title: 'Live room sweep with Lumina on iPad.',
    body: 'Full creative control.',
    video: {
      src: 'pov_live.mp4',
      type: 'video/mp4',
      poster: 'pov_live-poster.jpg',
      orientation: 'landscape',
    },
  },
  {
    eyebrow: 'Fixed room view',
    title: 'All my lights work together',
    body: 'Horizontal laser effect with rainbow gradient override.',
    video: {
      src: 'vertical_live.mp4',
      type: 'video/mp4',
      poster: 'vertical_live-poster.jpg',
      orientation: 'landscape',
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
  {
    name: 'Govee LAN',
    logo: 'govee-logo.png',
    logoWide: true,
    body: 'Add LAN-compatible Govee devices where local network control is available for the model and firmware.',
  },
]

const setupSteps = [
  'Connect supported devices across your local network.',
  'Arrange them into a room layout you can return to anytime.',
  'Choose Spatial or Flow, refine the response, and save the result as a scene.',
  'Enable iCloud sync only if you want selected saved rooms and scenes across devices.',
]

const heroSystems = [
  { label: 'WLED', logo: 'wled-logo.png' },
  { label: 'Philips Hue', logo: 'philipshue-logo.svg' },
  { label: 'Nanoleaf', logo: 'nanoleaf-logo.png', logoWide: true },
  { label: 'LIFX', logo: 'lifx-logo.svg', logoWide: true },
  { label: 'Govee LAN', logo: 'govee-logo.png', logoWide: true },
]

const consoleSignals = [
  { label: 'Version 1.1', value: 'Flow, Wave Studio, Performance Pad, rooms, and opt-in iCloud sync.' },
  { label: 'Audio tuning', value: 'Live BPM, beat phase, energy, and frequency-band response.' },
]

const proFeatures = [
  'All Spatial effects',
  'All 49 Flow patterns',
  'All Performance Pad effects',
  'Wave Studio Early Access',
  'Background audio sync',
  'Automatic audio calibration',
  'Export and share scenes',
  'Opt-in iCloud sync',
  'Gradient persistence',
]

const ambientLights = [
  { tone: 'magenta', rhythm: 'a', x: '3%', y: '12%', size: '22rem', duration: '7.4s', delay: '-1.1s' },
  { tone: 'cyan', rhythm: 'b', x: '72%', y: '18%', size: '27rem', duration: '9.2s', delay: '-4.6s' },
  { tone: 'amber', rhythm: 'c', x: '15%', y: '78%', size: '24rem', duration: '8.1s', delay: '-2.7s' },
  { tone: 'green', rhythm: 'a', x: '88%', y: '82%', size: '29rem', duration: '10.4s', delay: '-6.1s' },
  { tone: 'violet', rhythm: 'b', x: '31%', y: '38%', size: '24rem', duration: '8.8s', delay: '-3.9s' },
  { tone: 'rose', rhythm: 'c', x: '78%', y: '55%', size: '23rem', duration: '7.6s', delay: '-5.8s' },
  { tone: 'cyan', rhythm: 'a', x: '8%', y: '52%', size: '20rem', duration: '11.3s', delay: '-7.2s' },
  { tone: 'amber', rhythm: 'b', x: '92%', y: '31%', size: '22rem', duration: '9.7s', delay: '-1.6s' },
  { tone: 'magenta', rhythm: 'c', x: '48%', y: '88%', size: '22rem', duration: '12.1s', delay: '-9.4s' },
  { tone: 'green', rhythm: 'a', x: '54%', y: '7%', size: '19rem', duration: '8.6s', delay: '-4.3s' },
  { tone: 'violet', rhythm: 'b', x: '16%', y: '27%', size: '18rem', duration: '10.8s', delay: '-8.5s' },
  { tone: 'cyan', rhythm: 'c', x: '62%', y: '66%', size: '23rem', duration: '9.4s', delay: '-3.4s' },
  { tone: 'rose', rhythm: 'a', x: '27%', y: '92%', size: '18rem', duration: '11.8s', delay: '-10.2s' },
  { tone: 'amber', rhythm: 'b', x: '74%', y: '4%', size: '17rem', duration: '8.9s', delay: '-6.8s' },
]

const ambientBeams = [
  { tone: 'magenta', rhythm: 'a', x: '-16rem', y: '22%', rotate: '-18deg', duration: '14s', delay: '-2.4s' },
  { tone: 'cyan', rhythm: 'b', x: '58%', y: '36%', rotate: '22deg', duration: '17s', delay: '-10s' },
  { tone: 'amber', rhythm: 'c', x: '5%', y: '72%', rotate: '16deg', duration: '15.5s', delay: '-6.2s' },
  { tone: 'violet', rhythm: 'a', x: '56%', y: '84%', rotate: '-24deg', duration: '18s', delay: '-12.6s' },
  { tone: 'green', rhythm: 'b', x: '2%', y: '48%', rotate: '26deg', duration: '16.4s', delay: '-4.8s' },
  { tone: 'rose', rhythm: 'c', x: '54%', y: '12%', rotate: '-14deg', duration: '19s', delay: '-14.2s' },
  { tone: 'cyan', rhythm: 'a', x: '-10rem', y: '91%', rotate: '19deg', duration: '17.8s', delay: '-7.5s' },
]

function AmbientLightField() {
  return (
    <div className="ambient-light-field" aria-hidden="true">
      {ambientLights.map((light, index) => (
        <span
          className={`ambient-light ambient-light--${light.tone} ambient-light--${light.rhythm}`}
          key={`${light.tone}-${light.y}-${index}`}
          style={{
            '--light-x': light.x,
            '--light-y': light.y,
            '--light-size': light.size,
            '--light-duration': light.duration,
            '--light-delay': light.delay,
          }}
        />
      ))}
      {ambientBeams.map((beam, index) => (
        <span
          className={`ambient-beam ambient-beam--${beam.tone} ambient-beam--${beam.rhythm}`}
          key={`${beam.tone}-${beam.y}-${index}`}
          style={{
            '--beam-x': beam.x,
            '--beam-y': beam.y,
            '--beam-rotate': beam.rotate,
            '--beam-duration': beam.duration,
            '--beam-delay': beam.delay,
          }}
        />
      ))}
    </div>
  )
}

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
            <span
              className={`hero-console-system-badge${
                system.logoWide ? ' hero-console-system-badge--wide' : ''
              }${system.mark ? ' hero-console-system-badge--mark' : ''
              }`}
              key={system.label}
              role="img"
              aria-label={system.label}
            >
              {system.logo ? (
                <img
                  src={media(system.logo)}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  aria-hidden="true"
                />
              ) : (
                <span aria-hidden="true">{system.mark}</span>
              )}
            </span>
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

function DiscordCommunity() {
  return (
    <section className="community-section" id="community">
      <div className="section-shell community-layout">
        <div className="section-intro community-copy">
          <p className="section-kicker">Community</p>
          <h2 className="section-title">Build better rooms with other Lumina users.</h2>
          <p className="section-copy">
            Join the Lumina Discord to share scenes, compare Flow setups, get release notes, and
            help shape what comes next.
          </p>
          <div className="cta-row community-actions">
            <a
              className="primary-button"
              href={discordInviteHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the Discord
            </a>
          </div>
        </div>

        <div className="discord-widget-shell">
          <iframe
            src={discordWidgetHref}
            className="discord-widget"
            data-test-id="discord-widget"
            title="Lumina Discord community"
            width="350"
            height="500"
            allowtransparency="true"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          />
        </div>
      </div>
    </section>
  )
}

function App() {
  const privacyHref = `${baseUrl}privacy/index.html`

  return (
    <div className="site-shell">
      <AmbientLightField />
      <div className="global-nav-glass">
        <div className="nav-pill">
          <a className="nav-brand" href="#top" aria-label="Lumina home">
            Lumina
          </a>

          <nav className="nav-links" aria-label="Primary">
            <a href="#overview">Overview</a>
            <a href="#features">Flow</a>
            <a href="#live-demo">Live Demo</a>
            <a href="#workflows">Workflow</a>
            <a href="#systems">Systems</a>
            <a href="#community">Community</a>
            <a href={privacyHref}>Privacy</a>
          </nav>
        </div>
      </div>

      <main id="top">
        <section className="hero-section">
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="hero-kicker">
                Version 1.1 spatial lighting studio for iPhone and iPad. macOS coming soon.
              </p>
              <div className="hero-brand-lockup">
                <span className="hero-app-icon-shell" aria-hidden="true">
                  <img
                    className="hero-app-icon"
                    src={media('lumina-icon.png')}
                    alt=""
                    width="512"
                    height="512"
                  />
                </span>
                <p className="hero-brand">Lumina</p>
              </div>
              <h1 className="hero-title">Map the room. Let the music move it.</h1>
              <p className="hero-subtitle">
                Place bulbs, strips, panels, and fixtures on a live room map, then use Flow, Wave
                Studio, and Performance Pad to turn tracks into coordinated color, motion, rhythm,
                and atmosphere.
              </p>

              <div className="cta-row">
                <a className="primary-button" href="#overview">
                  Explore Lumina
                </a>
                <a
                  className="coming-soon-button"
                  href={appStoreHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Download on the App Store</span>
                </a>
              </div>

              <p className="availability-note">
                Available now on the App Store for iPhone and iPad. macOS coming soon.
              </p>

              <ul className="hero-facts" aria-label="Product highlights">
                <li>Spatial room mapping</li>
                <li>49 Flow patterns</li>
                <li>Performance Pad</li>
                <li>Local-network control</li>
              </ul>
            </div>

            <div className="hero-stage" aria-label="Lumina interface preview">
              <div className="hero-stage-frame">
                <div className="stage-halo" aria-hidden="true" />
                <div className="stage-grid" aria-hidden="true" />

                <div className="stage-copy">
                  <p>Spatial stage</p>
                  <strong>Map the room, start Flow, tune response.</strong>
                </div>

                <div className="device-stack">
                  <div className="stage-rainbow-glow" aria-hidden="true" />
                  <figure className="device-frame device-frame--primary">
                    <img
                      src={v11Media('spatial-lighting.jpg')}
                      alt="Lumina controlling a mapped room with a spatial lighting effect across fixtures."
                      width="830"
                      height="1800"
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
                Most smart-light apps stop at utility. Lumina 1.1 is built for rooms where lighting
                should feel mapped, musical, responsive, and ready to perform.
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

        <section className="release-section" id="v1-1">
          <div className="section-shell section-shell-wide">
            <div className="section-intro align-left">
              <p className="section-kicker">Version 1.1</p>
              <h2 className="section-title">Flow, Wave Studio, and live show control.</h2>
              <p className="section-copy">
                This release makes Lumina feel more like a spatial light DJ: continuous music motion,
                deeper shaping tools, and instant cues for drops, sweeps, and blackouts.
              </p>
            </div>

            <div className="release-grid">
              {releasePanels.map((panel) => (
                <article className="release-panel" key={panel.title}>
                  <figure className="release-media">
                    <img
                      src={media(panel.image.src)}
                      alt={panel.image.alt}
                      width={panel.image.width}
                      height={panel.image.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                  <div className="release-copy">
                    <p className="item-eyebrow">{panel.eyebrow}</p>
                    <h3>{panel.title}</h3>
                    <p>{panel.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="story-section" id="features">
          <div className="section-shell section-shell-wide">
            <div className="section-intro align-left">
              <p className="section-kicker">Flow</p>
              <h2 className="section-title">Built to move from layout to atmosphere without friction.</h2>
              <p className="section-copy">
                From room mapping to effect selection, Flow, scenes, and audio tuning, Lumina keeps
                the process visual and fluid so shaping the atmosphere feels quick and deliberate.
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

        <section className="demo-section" id="live-demo">
          <div className="section-shell section-shell-wide">
            <div className="section-intro">
              <p className="section-kicker">Live Demo</p>
              <h2 className="section-title">Watch the room change as the scene takes shape.</h2>
              <p className="section-copy">
                Live demos show Lumina in the room: map the space, choose the look, and tune motion
                while the lights respond in real time.
              </p>
            </div>

            <div className="demo-grid" aria-label="Lumina demo videos">
              {demoVideos.map((demo) => (
                <article className="demo-item" key={demo.title}>
                  <figure
                    className={`demo-video-frame demo-video-frame--${demo.video.orientation || 'portrait'}`}
                  >
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      poster={media(demo.video.poster)}
                      aria-label={demo.title}
                    >
                      <source src={media(demo.video.src)} type={demo.video.type} />
                    </video>
                  </figure>

                  <div className="demo-copy">
                    <p className="item-eyebrow">{demo.eyebrow}</p>
                    <h3>{demo.title}</h3>
                    <p>{demo.body}</p>
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
                      }${integration.mark ? ' integration-logo-shell--mark' : ''
                      }`}
                    >
                      {integration.logo ? (
                        <img
                          className="integration-logo"
                          src={media(integration.logo)}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          aria-hidden="true"
                        />
                      ) : (
                        <span aria-hidden="true">{integration.mark}</span>
                      )}
                    </span>
                    <h3>{integration.name}</h3>
                  </div>
                  <p>{integration.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pro-section">
          <div className="section-shell pro-layout">
            <div className="section-intro pro-copy">
              <p className="section-kicker">Lumina Pro</p>
              <h2 className="section-title">The full toolkit for larger rooms.</h2>
              <p className="section-copy">
                Unlock the complete creative set for serious smart-light setups, from the full Flow
                library and Performance Pad effects to Wave Studio Early Access and opt-in iCloud sync.
              </p>
            </div>

            <div className="pro-feature-grid" aria-label="Lumina Pro features">
              {proFeatures.map((feature) => (
                <span className="pro-feature" key={feature}>
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </section>

        <DiscordCommunity />

        <section className="closing-section">
          <div className="section-shell closing-band">
            <div className="closing-copy">
              <p className="section-kicker align-left">Privacy by design</p>
              <h2 className="section-title align-left">Local where it matters. Synced only when you choose.</h2>
              <p className="section-copy align-left">
                Audio analysis happens on device and light commands stay on your local network. Room
                layouts, scenes, gradients, and settings stay local by default, with iCloud sync only
                when you choose to enable it.
              </p>
            </div>

            <div className="cta-row closing-actions">
              <a className="primary-button" href={privacyHref}>
                Read privacy policy
              </a>
              <a
                className="coming-soon-button"
                href={appStoreHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download on the App Store</span>
              </a>
            </div>
          </div>

          <p className="trademark-note">
            WLED, Philips Hue, Nanoleaf, LIFX, and Govee names and marks belong to their respective
            owners. Lumina is not affiliated with, endorsed by, or sponsored by those companies.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
