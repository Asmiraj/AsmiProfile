
import "./App.css";

const email = "asmirajj01@gmail.com";

const linkedinLink =
  "https://www.linkedin.com/in/asmi-raj-54454226a/";

const figmaCoffeeLink =
  "https://www.figma.com/proto/AcddcX2kAxXP6tdYwbz0JR/Untitled?node-id=2-715&p=f&t=ekYXxEZqg12939Bx-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1";

const figmaSecondLink =
  "https://www.figma.com/proto/qVHBOuPlYySS9CsyvqD3hk/Untitled?node-id=0-1&t=czKMbTBsIJBOf57V-1";

const robloxLink =
  "https://www.roblox.com/games/135732495292427/";

const robloxPracticeLink =
  "https://www.roblox.com/games/94192978841437/";

const tokenWiseLink =
  "https://tokenwise-don-t-burn-your-tokens.ai.studio/";

const justUiLink = "https://just-ui-ashen.vercel.app/";

// Gmail compose window with the To field filled in.
const composeTarget = `https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=${encodeURIComponent(
  email
)}`;

// If the visitor isn't signed in, let Google ask them to sign in first.
const gmailComposeUrl = `https://accounts.google.com/AccountChooser?service=mail&continue=${encodeURIComponent(
  composeTarget
)}`;

const mailtoUrl = `mailto:${email}`;

function openEmail(e) {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  // On mobile, allow the normal mailto link to open the mail app.
  if (isMobile) return;

  // On desktop, open Gmail compose in a new tab.
  e.preventDefault();

  const win = window.open(gmailComposeUrl, "_blank");

  if (win) {
    win.opener = null;
  } else {
    // Fall back to the visitor's default email app if pop-ups are blocked.
    window.location.href = mailtoUrl;
  }
}

function EmailLink({ className, children }) {
  return (
    <a className={className} href={mailtoUrl} onClick={openEmail}>
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Go to homepage">
        <span className="brand-mark">a</span>
        <span>Asmi Raj</span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <EmailLink className="header-contact">Say hi</EmailLink>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="hello-pill">
          <span className="wave">👋</span> Hi, I'm Asmi
        </p>

        <h1>
          <span className="line line-ink">I build apps,</span>
          <span className="line line-pink">design screens</span>
          <span className="line line-mint">&amp; make games.</span>
        </h1>

        <p className="hero-description">
          I'm an application developer who loves turning half-baked ideas into
          things people can actually click, play, and enjoy. This is my corner
          of the internet, so have a look around.
        </p>

        <div className="hero-actions">
          <a className="button button-blue" href="#work">
            See what I've made
          </a>
          <a className="button button-ghost" href="#about">
            Meet me
          </a>
        </div>
      </div>

      <div className="hero-art" aria-hidden="true">
        <div className="art-frame">
          <div className="frame-bar">
            <i />
            <i />
            <i />
            <span>coffee-shop-ui</span>
          </div>

          <div className="frame-body">
            <div className="mock-hero" />
            <div className="mock-row">
              <div className="mock-card c1" />
              <div className="mock-card c2" />
              <div className="mock-card c3" />
            </div>
            <div className="mock-line" />
            <div className="mock-line short" />
          </div>

          <div className="cursor">
            <svg width="22" height="22" viewBox="0 0 24 24">
              <path d="M3 2l17 8-7.5 2.2L10 20z" />
            </svg>
            <span>asmi</span>
          </div>
        </div>

        <div className="hud">
          <p className="hud-title">Arena Showdown</p>

          <div className="hud-row">
            <span>You</span>
            <div className="bar">
              <b style={{ width: "82%" }} />
            </div>
          </div>

          <div className="hud-row">
            <span>Foe</span>
            <div className="bar bar-foe">
              <b style={{ width: "46%" }} />
            </div>
          </div>

          <p className="hud-ko">Round 1. Fight!</p>
        </div>

        <div className="sticker sticker-yellow">
          code
          <br />
          + design
          <br />
          + play
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  tone,
  category,
  status,
  title,
  description,
  tags,
  note,
  actions,
  wide,
}) {
  return (
    <article className={`project-card tone-${tone}${wide ? " wide" : ""}`}>
      <div className="project-top">
        <span className="project-category">{category}</span>
        {status && <span className="status-chip">{status}</span>}
      </div>

      <h3>{title}</h3>
      <p className="project-description">{description}</p>

      {note && <p className="repo-note">{note}</p>}

      <div className="tag-list">
        {tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className="project-actions">
        {actions.map((action) =>
          action.email ? (
            <EmailLink className="project-link" key={action.text}>
              {action.text}
            </EmailLink>
          ) : action.href ? (
            <a
              className={`project-link${action.alt ? " alt" : ""}`}
              href={action.href}
              key={action.text}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              {action.text}
            </a>
          ) : (
            <span className="project-link is-disabled" key={action.text}>
              {action.text}
            </span>
          )
        )}
      </div>
    </article>
  );
}


function Projects() {
  return (
    <section className="projects-section section-shell" id="work">
      <div className="section-heading">
        <h2>Stuff I've been building lately.</h2>
        <p className="section-description">
          Some apps, some interfaces, some games. Whatever got me curious that
          week.
        </p>
      </div>

      <div className="project-grid">
        <ProjectCard
          wide
          tone="blue"
          category="Development"
          status="🔒 Private repo"
          title="ContextDesk AI"
          description="An AI-powered business chat assistant concept that helps digital agencies answer questions, qualify leads, and give customers a smoother experience."
          note="The code lives in a private GitHub repo, guarding its secrets like a dragon guards gold. 😉 Email me for access (nicely, please) and you can take the app for a spin on your end."
          tags={[
            "React + TypeScript + Vite",
            "Node.js + Express",
            "SQLite",
            "Redis",
            "Ollama",
            "...?",
          ]}
          actions={[{ text: "Email me for access", email: true }]}
        />

        <ProjectCard
          tone="pink"
          category="Web development"
          status="Live website"
          title="Just UI"
          description="An animated portfolio landing page for an imaginary author, built with React, Vite, GSAP, Framer Motion, and hls.js. An exploration of motion, visual storytelling, and interactive web design."
          tags={[
            "React",
            "Vite",
            "GSAP",
            "Framer Motion",
            "hls.js",
            "Animation",
          ]}
          actions={[
            {
              text: "Visit Just UI",
              href: "https://just-ui-ashen.vercel.app/",
            },
          ]}
        />

        <ProjectCard
          tone="mint"
          category="AI tools"
          status="Try it out"
          title="TokenWise"
          description="Write what you mean. We'll engineer the prompt. Stop burning tokens on rambly prompts and multi-turn clarifications. TokenWise structures your natural request into high-density, model-specific instructions for ChatGPT, Claude, Gemini, and custom models."
          tags={[
            "AI",
            "LLMs",
            "Token Optimization",
          ]}
          actions={[
            {
              text: "Try TokenWise",
              href: "https://tokenwise-don-t-burn-your-tokens.ai.studio/", 
            },
          ]}
        />
      </div>
    </section>
  );
}


function FeatureSection({
  id,
  tone,
  flip,
  badge,
  badgeClass,
  title,
  text,
  tags,
  note,
  image,
  alt,
  caption,
  ariaLabel,
  href,
  cta,
}) {
  const imageBlock = (
    <a
      className="feature-image-wrap"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
    >
      <img src={image} alt={alt} />
      <span className="image-caption">{caption}</span>
    </a>
  );

  const copyBlock = (
    <div className="feature-copy">
      <span className={`badge ${badgeClass}`}>{badge}</span>
      <h2>{title}</h2>
      <p>{text}</p>

      <div className="tag-list">
        {tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      {note && <p className="work-in-progress">{note}</p>}

      <a
        className="button button-ink"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {cta}
      </a>
    </div>
  );

  return (
    <section
      className={`feature-section feature-${tone}${flip ? " flip" : ""}`}
      id={id}
    >
      {flip ? (
        <>
          {imageBlock}
          {copyBlock}
        </>
      ) : (
        <>
          {copyBlock}
          {imageBlock}
        </>
      )}
    </section>
  );
}

function FeaturedWork() {
  return (
    <section
      className="featured-work section-shell"
      aria-label="Featured projects"
    >
      <div className="featured-intro">
        <h2>
          Roblox?
          <span className="beginner-note">
            {" "}
            (Still finding my feet here — be kind, I'm learning as I go 😅)
          </span>
        </h2>
        <p>
          Just me turning random ideas into playable worlds. Come see what I've been cooking up.
        </p>
      </div>

        <FeatureSection
        id="roblox-game"
        tone="mint"
        badge="🚧 Under development"
        badgeClass="badge-build"
        title="Your little virtual arena, just for fun."
        text="Arena Showdown is a laid-back virtual arena made purely for fun. Wander around, jump on the trampoline, and enjoy yourself. No pressure, no rules, just good vibes."
        tags={["Roblox Studio", "Game Design", "Virtual Worlds"]}
        note={
          <>
            Still under development, so think of it as a walk around the
            workshop. Got feedback? Please <EmailLink>email me</EmailLink>, I'd
            love to hear it!
          </>
        }
        image="/roblox_2.png"
        alt="Preview of my Arena Showdown Roblox game"
        caption="Come hang out in the arena"
        ariaLabel="Open Arena Showdown on Roblox"
        href={robloxLink}
        cta="Play it on Roblox"
      />

      {/*<FeatureSection
        id="coffee-design"
        tone="orange"
        badge="UI design only, not a live site"
        badgeClass="badge-ui"
        title="A little coffee, a lot of good design."
        text="A coffee shop UI concept I designed in Figma, with a warm look, friendly layouts, and a flow that feels natural to click through. It's a design prototype, so you can explore every screen without anything to install or sign up for."
        tags={["Figma", "UI Design", "Prototyping"]}
        image="/coffee.png"
        alt="Preview of my coffee shop UI design"
        caption="Click to explore the design"
        ariaLabel="Open the coffee shop Figma design"
        href={figmaCoffeeLink}
        cta="Open the Figma prototype"
      />

      <FeatureSection
        id="figma-design"
        tone="pink"
        flip
        badge="UI design only, not a live site"
        badgeClass="badge-ui alt"
        title="Another interface, another flow."
        text="A second UI concept I designed and prototyped in Figma. Click through the screens to see how it flows. It's a design prototype, so there's nothing to install or sign up for."
        tags={["Figma", "UI Design", "Prototyping"]}
        image="/figma.png"
        alt="Preview of my second Figma UI design"
        caption="Click through the screens"
        ariaLabel="Open the second Figma design"
        href={figmaSecondLink}
        cta="Open the Figma prototype"
      />
      
      <FeatureSection
        id="roblox-practice"
        tone="yellow"
        flip
        badge="🎯 Practice mode"
        badgeClass="badge-practice"
        title="Warm up before the real fight."
        text="The practice version of Arena Showdown. No rivals, no pressure, just you and a training dummy so you can get the hang of the moves while the next version is on its way."
        tags={["Roblox Studio", "Game Design", "Combat Mechanics"]}
        note="Hit the dummy as much as you like. The next version is coming soon."
        image="/roblox_image.png"
        alt="Preview of the Arena Showdown practice version on Roblox"
        caption="Go hit the dummy"
        ariaLabel="Open the Arena Showdown practice version on Roblox"
        href={robloxPracticeLink}
        cta="Practice on Roblox"
      />*/}
    </section>
  );
}

function Experience() {
  return (
    <section className="experience-section section-shell" id="experience">
      <div className="section-heading">
        <h2>Where I've been working.</h2>
        <p className="section-description">
          A short tour of the places that shaped how I build.
        </p>
      </div>

      <div className="timeline">
        <article className="exp-card exp-current">
          <span className="exp-status">
            <i className="live-dot" /> Current
          </span>
          <h3>Application Developer</h3>
          <p className="exp-company">Schneider Electric</p>
          <p className="exp-text">
            Building and shipping applications as part of the team, and
            learning how software works at real-world scale.
          </p>
        </article>

        <article className="exp-card exp-past">
          <span className="exp-status">Previous</span>
          <h3>Software Intern</h3>
          <p className="exp-company">Comavia Systems Technologies Pvt. Ltd.</p>
          <p className="exp-text">
            A three-month internship where I got hands-on with debugging,
            software testing, and modifying software designs, while collaborating
            with others and picking up real development practices.
          </p>

          <div className="tag-list">
            <span className="tag">Debugging</span>
            <span className="tag">Testing</span>
            <span className="tag">Design changes</span>
          </div>
        </article>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section section-shell" id="about">
      <div className="about-heading">
        <h2>Developer by day, tinkerer the rest of the time.</h2>
      </div>

      <div className="about-copy">
        <p>
          I'm an application developer with a B.Tech in Computer Science and
          Information Technology from Reva University. I love coding, solving
          puzzles, and figuring out how all the pieces of a digital product fit
          together.
        </p>

        <p>
          Outside of apps, I play around with UI design and game development. My
          favourite part is the experiment: try something new, break it, fix it,
          and end up with something people can actually use.
        </p>

        <div className="about-facts">
          <div className="fact fact-blue">
            <strong>Development</strong>
            <span>Building useful things</span>
          </div>

          <div className="fact fact-pink">
            <strong>Design</strong>
            <span>Making ideas feel right</span>
          </div>

          <div className="fact fact-mint">
            <strong>Games</strong>
            <span>Always trying something new</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section section-shell" id="contact">
      <h2>Got an idea? Let's make it real.</h2>
      <p>
        Have a project, a freelance opportunity, or just want to chat about
        something you're building? I'd love to hear from you.
      </p>

      <div className="contact-actions">
        <EmailLink className="button button-yellow">Email me</EmailLink>

        <a
          className="button button-white"
          href={linkedinLink}
          target="_blank"
          rel="noreferrer"
        >
          Find me on LinkedIn
        </a>
      </div>

      <EmailLink className="contact-email">{email}</EmailLink>

      <span className="contact-small-note">
        Good conversations lead to great things.
      </span>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand footer-brand" href="#home">
        <span className="brand-mark">a</span>
        <span>Asmi Raj</span>
      </a>

      <p>Made with curiosity and a lot of coffee ☕</p>

      <div style={{ display: "flex", gap: "18px" }}>
        <EmailLink className="back-to-top">Email me</EmailLink>
        <a href="#home" className="back-to-top">
          Back to top
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="portfolio">
      <Header />

      <main>
        <Hero />
        <Projects />
        <FeaturedWork />
        <Experience />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
