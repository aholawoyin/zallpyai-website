import "./App.css";

const services = [
  {
    number: "01",
    title: "Enterprise Solutions",
    description:
      "Modular enterprise platforms covering finance, procurement, inventory, human resources and operational management.",
  },
  {
    number: "02",
    title: "Government & Regulatory Technology",
    description:
      "Digital licensing, registration, inspections, compliance monitoring and institutional workflows.",
  },
  {
    number: "03",
    title: "AI & Data Intelligence",
    description:
      "Intelligent analytics, anomaly detection, risk scoring and data-driven decision support.",
  },
  {
    number: "04",
    title: "Financial Technology",
    description:
      "Financial platforms supporting banking operations, transaction monitoring and financial workflows.",
  },
  {
    number: "05",
    title: "Technology Consulting",
    description:
      "Enterprise architecture, software engineering, system integration and digital transformation.",
  },
];

const products = [
  {
    number: "01",
    name: "ERP360",
    category: "ENTERPRISE MANAGEMENT",
    description:
      "An enterprise resource planning initiative for finance, procurement, inventory, hospitality and workforce operations.",
  },
  {
    number: "02",
    name: "Regulatory360",
    category: "REGULATORY TECHNOLOGY",
    description:
      "A platform initiative for licensing, compliance, inspections and digital institutional management.",
  },
  {
    number: "03",
    name: "BankEdge",
    category: "FINANCIAL TECHNOLOGY",
    description:
      "A banking software initiative covering customer onboarding, deposits, lending, teller operations and reporting.",
  },
  {
    number: "04",
    name: "OpenApproval",
    category: "WORKFLOW AUTOMATION",
    description:
      "A configurable workflow and approval engine designed for policies, tasks, escalation and auditability.",
  },
  {
    number: "05",
    name: "Zallpy Guard",
    category: "AI & RISK INTELLIGENCE",
    description:
      "An AI-driven fraud and risk intelligence initiative for transaction monitoring and risk-based decisions.",
  },
];

const industries = [
  "Government & Public Institutions",
  "Financial Institutions",
  "Hospitality & Services",
  "Commercial Enterprises",
  "Digital Platforms",
];

const delivery = [
  ["01", "Discover", "Understand requirements, stakeholders and business processes."],
  ["02", "Design", "Develop architecture, user experience and technical specifications."],
  ["03", "Build", "Develop, integrate and test solutions incrementally."],
  ["04", "Validate", "Conduct testing, security reviews and user acceptance."],
  ["05", "Deploy", "Prepare infrastructure, migration, training and rollout."],
  ["06", "Improve", "Provide support, monitoring and continuous enhancement."],
];

function App() {
  return (
    <div className="website" id="home">

      <nav className="navbar">
        <a href="#home" className="logo">
          <img
            src="/Horizontal_Logo_Light.png"
            alt="logo Limited"
          />
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Solutions</a>
          <a href="#products">Products</a>
          <a href="#industries">Industries</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk <span>↗️</span>
        </a>
      </nav>

      <main>

        <section className="hero">
          <div className="hero-content">

            <div className="eyebrow">
              <span className="status-dot"></span>
              ENTERPRISE TECHNOLOGY · AI · DIGITAL TRANSFORMATION
            </div>

            <h1>
              Engineering the
              <br />
              <span>Intelligent Future.</span>
            </h1>

            <p>
              We engineer intelligent digital systems that simplify
              complex operations, strengthen institutions and create
              meaningful opportunities through technology.
            </p>

            <div className="hero-actions">
              <a href="#services" className="primary-button">
                Explore Our Solutions ↗️
              </a>

              <a href="#about" className="secondary-button">
                Discover ZallpyAI →
              </a>
            </div>

            <div className="hero-bottom">
              <span>INNOVATE</span>
              <span>EMPOWER</span>
              <span>TRANSFORM</span>
            </div>

          </div>

          <div className="hero-visual">
            <div className="hero-glow"></div>
            <div className="hero-orbit orbit-one"></div>
            <div className="hero-orbit orbit-two"></div>

            <div className="hero-center">
              <img
                src="/Standalone_Z_Symbol.png"
                alt="ZallpyAI symbol"
              />
            </div>

            <div className="floating-box floating-one">
              <span>✳️</span>
              <div>
                <strong>Artificial Intelligence</strong>
                <small>Intelligence that matters</small>
              </div>
            </div>

            <div className="floating-box floating-two">
              <span>⌘</span>
              <div>
                <strong>Enterprise Technology</strong>
                <small>Built for complex operations</small>
              </div>
            </div>

            <div className="visual-caption">
              INTELLIGENT SOLUTIONS. LIMITLESS POSSIBILITIES.
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <span>ENTERPRISE PLATFORMS</span>
          <span>ARTIFICIAL INTELLIGENCE</span>
          <span>FINANCIAL TECHNOLOGY</span>
          <span>DIGITAL TRANSFORMATION</span>
        </section>

        <section className="about-section section-padding" id="about">

          <div className="section-label">01 / ABOUT ZALLPYAI</div>

          <div className="about-grid">
            <h2>
              Technology should
              <br />
              make a <span>difference.</span>
            </h2>

            <div className="about-text">
              <p>
                ZallpyAI Limited is a Nigerian enterprise technology
                and artificial intelligence company focused on
                software platforms, digital transformation and
                technology consulting.
              </p>

              <p>
                Our product development spans enterprise operations,
                regulatory management, financial systems, workflow
                automation and intelligent risk management.
              </p>

              <a href="#services" className="text-link">
                Explore what we do ↗️
              </a>
            </div>
          </div>

          <div className="purpose-grid">

            <article className="purpose-card">
              <span>OUR VISION</span>
              <h3>Empowering the future.</h3>
              <p>
                To become a globally recognised technology company
                empowering institutions, businesses and communities
                through intelligent, secure and transformative
                digital solutions.
              </p>
            </article>

            <article className="purpose-card">
              <span>OUR MISSION</span>
              <h3>Engineering progress.</h3>
              <p>
                To design, develop and deliver innovative enterprise
                software, artificial intelligence and digital
                infrastructure that simplify complex operations,
                strengthen institutional efficiency and drive
                sustainable growth.
              </p>
            </article>

          </div>
        </section>

        <section className="services-section section-padding" id="services">

          <div className="section-label">02 / OUR CAPABILITIES</div>

          <div className="section-heading">
            <h2>
              Technology built
              <br />
              around <span>your needs.</span>
            </h2>

            <p>
              Our capabilities connect enterprise software
              engineering with practical institutional
              transformation.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-top">
                  <span>{service.number}</span>
                  <span>↗️</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a href="#contact">Discuss a project ↗️</a>
              </article>
            ))}
          </div>

        </section>

        <section className="products-section section-padding" id="products">

          <div className="section-label">03 / OUR PRODUCT ECOSYSTEM</div>

          <div className="section-heading">
            <h2>
              One vision.
              <br />
              <span>Five platforms.</span>
            </h2>

            <p>
              Our product initiatives address enterprise operations,
              regulatory management, financial technology,
              workflow automation and intelligent risk management.
            </p>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <article className="product-card" key={product.number}>
                <div className="product-number">{product.number}</div>

                <span>{product.category}</span>

                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <a href="#contact">Enquire about this platform ↗️</a>
              </article>
            ))}
          </div>

          <p className="product-note">
            Product availability, deployment readiness and feature
            scope are confirmed for each engagement.
          </p>

        </section>

        <section className="industries-section section-padding" id="industries">

          <div className="section-label">04 / INDUSTRIES WE SERVE</div>

          <div className="section-heading">
            <h2>
              Technology for
              <br />
              <span>every ambition.</span>
            </h2>

            <p>
              We work with organisations and institutions seeking
              meaningful improvements through technology.
            </p>
          </div>

          <div className="industry-list">
            {industries.map((industry, index) => (
              <div className="industry-item" key={industry}>
                <span>0{index + 1}</span>
                <h3>{industry}</h3>
                <span className="industry-arrow">↗️</span>
              </div>
            ))}
          </div>

        </section>

        <section className="technology-section section-padding">

          <div className="section-label">05 / ENGINEERING & INTELLIGENCE</div>

          <div className="technology-content">
            <h2>
              Built with purpose.
              <br />
              <span>Engineered for progress.</span>
            </h2>

            <p>
              Our engineering direction combines modular enterprise
              architecture with responsible use of data and
              artificial intelligence.
            </p>

            <div className="technology-tags">
              <span>Java & Spring Boot</span>
              <span>ASP.NET Core</span>
              <span>PostgreSQL</span>
              <span>REST APIs</span>
              <span>Modern Web Interfaces</span>
              <span>Modular Architecture</span>
              <span>Artificial Intelligence</span>
              <span>Predictive Analytics</span>
            </div>
          </div>

        </section>

        <section className="delivery-section section-padding">

          <div className="section-label">06 / OUR APPROACH</div>

          <div className="section-heading">
            <h2>
              From discovery
              <br />
              to <span>operation.</span>
            </h2>

            <p>
              A structured delivery approach helps align
              stakeholders, manage scope and reduce
              implementation risk.
            </p>
          </div>

          <div className="delivery-grid">
            {delivery.map((step) => (
              <article className="delivery-card" key={step[0]}>
                <span>{step[0]}</span>
                <h3>{step[1]}</h3>
                <p>{step[2]}</p>
              </article>
            ))}
          </div>

        </section>

        <section className="values-section section-padding">

          <div className="section-label">07 / OUR VALUES</div>

          <h2>
            Innovation with
            <br />
            <span>integrity and purpose.</span>
          </h2>

          <div className="values-grid">
            {[
              "Innovation",
              "Integrity",
              "Excellence",
              "Collaboration",
              "Accountability",
              "Continuous Learning",
            ].map((value, index) => (
              <div className="value-item" key={value}>
                <span>0{index + 1}</span>
                <h3>{value}</h3>
              </div>
            ))}
          </div>

        </section>

        <section className="founder-section section-padding">

          <div className="founder-card">
            <div className="section-label">08 / LEADERSHIP</div>

            <h2>
              A vision for
              <br />
              the intelligent future.
            </h2>

            <p>
              Technology should make complex institutions simpler
              to operate, more accountable and better equipped
              to serve people.
            </p>

            <div className="founder-name">
              <strong>ADEBAYO OSUNBIYI</strong>
              <span>Founder & CEO | Managing Director</span>
            </div>
          </div>

        </section>

        <section className="contact-section section-padding" id="contact">

          <div className="section-label">09 / LET'S CONNECT</div>

          <h2>
            Let's engineer
            <br />
            <span>what comes next.</span>
          </h2>

          <p>
            Have an enterprise challenge, technology project
            or idea worth exploring? Let's discuss how we
            can work together.
          </p>

          <a href="mailto:info@zallpyai.com" className="primary-button">
            Start a Conversation ↗️
          </a>

          <div className="contact-grid">

            <div>
              <span>EMAIL</span>
              <a href="mailto:info@zallpyai.com">
                info@zallpyai.com
              </a>
            </div>

            <div>
              <span>PHONE</span>
              <a href="tel:+2348034200860">
                +234 803 420 0860
              </a>
            </div>

            <div>
              <span>OFFICE</span>
              <p>13 Oderinde Street, Challenge, Ibadan, Nigeria</p>
            </div>

            <div>
              <span>WEBSITE</span>
              <a href="https://zallpyai.com">
                zallpyai.com
              </a>
            </div>

          </div>

        </section>

      </main>

      <footer className="footer">

        <div className="footer-main">
          <a href="#home" className="footer-logo">
            <img
              src="/Horizontal_Logo_Dark.png"
              alt="ZallpyAI Limited"
            />
          </a>

          <p>Intelligent Solutions. Limitless Possibilities.</p>

          <a href="#home" className="back-top">
            Back to top ↑
          </a>
        </div>

        <div className="footer-bottom">
          <span>ZALLPYAI LIMITED · RC 7699260</span>
          <span>Ibadan, Nigeria</span>
          <span>© 2026 ZallpyAI Limited</span>
        </div>

      </footer>

    </div>
  );
}

export default App;