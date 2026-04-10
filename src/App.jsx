import { useRef } from 'react'
import LiquidGlass from 'liquid-glass-react'
import './App.css'

const metrics = [
  { value: '17', label: 'signature effects shaped for atmosphere, motion, and contrast' },
  { value: '4', label: 'major lighting ecosystems controlled in one coherent surface' },
  { value: 'Local', label: 'on-network control that stays fast, private, and room-aware' },
]

const highlights = [
  {
    eyebrow: 'Spatial control',
    title: 'Design the room like a composition.',
    body:
      'Place fixtures where they actually live, preview how light travels, and balance the whole scene before playback begins.',
    image: {
      src: 'spatial-ripple.jpg',
      alt: 'Lumina room map with a ripple effect spreading across the fixture layout.',
      width: 585,
      height: 1200,
    },
  },
  {
    eyebrow: 'Effect library',
    title: 'Move from idea to atmosphere fast.',
    body:
      'Browse looks visually, not as a pile of toggles, then bring the right motion into the room without losing the thread.',
    image: {
      src: 'effects-library.jpg',
      alt: 'Lumina effect library showing visual presets for scene design.',
      width: 587,
      height: 1200,
    },
  },
  {
    eyebrow: 'Audio tuning',
    title: 'Keep the response musical.',
    body:
      'Watch bass, mids, highs, BPM, and energy in real time so reactive scenes feel precise instead of noisy.',
    image: {
      src: 'audio-calibration.jpg',
      alt: 'Lumina audio calibration interface with live sound analysis and thresholds.',
      width: 1083,
      height: 1200,
    },
  },
]

const systems = [
  {
    name: 'WLED',
    body: 'Pixel-heavy strips and segmented layouts for larger, more expressive installs.',
  },
  {
    name: 'Philips Hue Entertainment',
    body: 'Entertainment areas that behave like part of the same stage instead of a separate app.',
  },
  {
    name: 'Nanoleaf',
    body: 'Panel-based fixtures kept in the same visual language as strips, bars, and lamps.',
  },
  {
    name: 'LIFX',
    body: 'LAN-capable bulbs and fixtures with changes that feel immediate in the room.',
  },
]

const setupSteps = [
  'Connect supported devices on the local network.',
  'Arrange them into a room layout worth returning to.',
  'Choose a look, tune the motion, and save the scene.',
  'Recall the right atmosphere for focus, hosting, or late-night listening.',
]

function GlassSurface({
  children,
  className = '',
  cornerRadius = 28,
  padding = '0px',
  blurAmount = 0.12,
  displacementScale = 78,
  saturation = 138,
  aberrationIntensity = 1.8,
  elasticity = 0.18,
  mode = 'polar',
  style,
  ...props
}) {
  const mergedClassName = className ? `glass-surface ${className}` : 'glass-surface'

  return (
    <LiquidGlass
      className={mergedClassName}
      cornerRadius={cornerRadius}
      padding={padding}
      blurAmount={blurAmount}
      displacementScale={displacementScale}
      saturation={saturation}
      aberrationIntensity={aberrationIntensity}
      elasticity={elasticity}
      mode={mode}
      style={style}
      {...props}
    >
      {children}
    </LiquidGlass>
  )
}

function App() {
  const heroRef = useRef(null)
  const baseUrl = import.meta.env.BASE_URL
  const media = (fileName) => `${baseUrl}media/${fileName}`
  const privacyHref = `${baseUrl}privacy/`

  return (
    <div className="site-shell">
      <header className="global-nav">
        <GlassSurface
          className="nav-glass"
          cornerRadius={999}
          padding="14px 18px"
          blurAmount={0.08}
          displacementScale={64}
          saturation={128}
          elasticity={0.12}
          mode="standard"
        >
          <div className="nav-inner">
            <a className="nav-brand" href="#top" aria-label="Lumina home">
              Lumina
            </a>

            <nav className="nav-links" aria-label="Primary">
              <a href="#overview">Overview</a>
              <a href="#features">Features</a>
              <a href="#systems">Systems</a>
              <a href="#privacy">Privacy</a>
              <a href={privacyHref}>Policy</a>
            </nav>
          </div>
        </GlassSurface>
      </header>

      <main id="top">
        <section className="hero-section" ref={heroRef}>
          <div className="hero-background" aria-hidden="true">
            <div className="hero-orb hero-orb-a" />
            <div className="hero-orb hero-orb-b" />
            <div className="hero-grid" />
          </div>

          <div className="hero-layout">
            <div className="hero-copy">
              <p className="hero-kicker">Spatial, audio-reactive lighting control for iPhone, iPad, and Mac</p>
              <h1 className="hero-brandmark">Lumina</h1>
              <p className="hero-title">Light the room like it was designed, not configured.</p>
              <p className="hero-subtitle">
                Lumina turns WLED, Hue, Nanoleaf, and LIFX into one cinematic control surface,
                combining spatial mapping, expressive effects, and room-aware audio motion in a UI
                that feels deliberate from the first touch.
              </p>

              <div className="cta-row">
                <a className="primary-button" href="#features">
                  See the workflow
                </a>
                <a className="secondary-button" href="https://github.com/tukies/Lumina-iOS">
                  View on GitHub
                </a>
              </div>

              <div className="hero-note">
                Built for spaces where lighting is part of the atmosphere, not background utility.
              </div>
            </div>

            <div className="hero-visual">
              <GlassSurface
                className="hero-device-shell"
                cornerRadius={42}
                padding="20px"
                blurAmount={0.1}
                displacementScale={88}
                saturation={148}
                elasticity={0.22}
                mouseContainer={heroRef}
                mode="shader"
              >
                <figure className="hero-device">
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
              </GlassSurface>

              <GlassSurface
                className="hero-floating hero-floating-top"
                cornerRadius={26}
                padding="18px 20px"
                blurAmount={0.085}
                displacementScale={70}
                saturation={126}
                elasticity={0.16}
                mouseContainer={heroRef}
              >
                <p>Scene Depth</p>
                <strong>Spatial mapping, gradients, and saved looks in one live canvas.</strong>
              </GlassSurface>

              <GlassSurface
                className="hero-floating hero-floating-bottom"
                cornerRadius={26}
                padding="18px 20px"
                blurAmount={0.09}
                displacementScale={72}
                saturation={130}
                elasticity={0.2}
                mouseContainer={heroRef}
              >
                <p>Audio Response</p>
                <strong>Reactive motion tuned to bass, mids, highs, BPM, and energy.</strong>
              </GlassSurface>
            </div>
          </div>
        </section>

        <section className="proof-section" id="overview">
          <div className="section-frame">
            <div className="section-heading">
              <p className="section-kicker">Why Lumina</p>
              <h2 className="section-title">A cleaner control surface for rooms that deserve intention.</h2>
            </div>

            <GlassSurface
              className="metrics-glass"
              cornerRadius={34}
              padding="10px"
              blurAmount={0.075}
              displacementScale={60}
              saturation={122}
              elasticity={0.1}
              mode="prominent"
            >
              <div className="metric-rail">
                {metrics.map((metric) => (
                  <article className="metric-item" key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </article>
                ))}
              </div>
            </GlassSurface>
          </div>
        </section>

        <section className="story-section" id="features">
          <div className="section-frame section-frame-wide">
            <div className="section-heading section-heading-split">
              <div>
                <p className="section-kicker">Workflow</p>
                <h2 className="section-title">A creative flow, not a maze of controls.</h2>
              </div>
              <p className="section-copy">
                Each part of the app exists to help you shape atmosphere quickly: map the space,
                choose the motion, refine the response, save the result.
              </p>
            </div>

            <div className="story-list">
              {highlights.map((item, index) => (
                <article className="story-band" key={item.title}>
                  <div className="story-copy-block">
                    <span className="story-index">0{index + 1}</span>
                    <p className="item-eyebrow">{item.eyebrow}</p>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>

                  <GlassSurface
                    className="story-media-glass"
                    cornerRadius={34}
                    padding="18px"
                    blurAmount={0.09}
                    displacementScale={74}
                    saturation={136}
                    elasticity={0.18}
                    mode="shader"
                  >
                    <figure className="story-media">
                      <img
                        src={media(item.image.src)}
                        alt={item.image.alt}
                        width={item.image.width}
                        height={item.image.height}
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  </GlassSurface>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="systems-section" id="systems">
          <div className="section-frame systems-layout">
            <div className="systems-copy">
              <p className="section-kicker">Systems</p>
              <h2 className="section-title">One stage for the whole room.</h2>
              <p className="section-copy">
                If your setup spans more than one brand, Lumina makes it feel like one experience
                instead of a stack of separate control apps.
              </p>

              <ol className="setup-list">
                {setupSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>

            <div className="integration-list">
              {systems.map((system) => (
                <div className="integration-row" key={system.name}>
                  <h3>{system.name}</h3>
                  <p>{system.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="privacy-section" id="privacy">
          <div className="section-frame">
            <GlassSurface
              className="privacy-glass"
              cornerRadius={40}
              padding="28px"
              blurAmount={0.1}
              displacementScale={82}
              saturation={130}
              elasticity={0.2}
              mode="shader"
            >
              <div className="privacy-band">
                <div className="privacy-copy">
                  <p className="section-kicker">Privacy by design</p>
                  <h2 className="section-title">Stays in the room.</h2>
                  <p className="section-copy">
                    Layouts, scenes, gradients, and device mappings stay local. Audio analysis happens
                    on device. Commands stay on your network. The result is faster, cleaner, and more
                    private by default.
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
            </GlassSurface>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
