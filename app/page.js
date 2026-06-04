import {
  Brain,
  Check,
  Drone,
  MapPin,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import FloatingOrderButton from "@/components/FloatingOrderButton";
import Reveal from "@/components/Reveal";

const features = [
  {
    icon: Brain,
    title: "AI Route Optimization",
    description:
      "Our neural network maps Bangalore traffic, wind, and tiffin rush hour so your dosa lands hot — not hover-confused.",
  },
  {
    icon: Shield,
    title: "Thermal-Safe Delivery",
    description:
      "Patented masala-dosa pods keep crisp edges and warm sambar from drone bay to your balcony, rain or shine.",
  },
  {
    icon: Zap,
    title: "12-Minute Guarantee",
    description:
      "Order at 8:02, eat at 8:14. Miss the window? Your next dosa is on us. That's the AirDosa promise.",
  },
];

const plans = [
  {
    name: "Dosa Flyer",
    price: "₹99",
    period: "/month",
    desc: "Perfect for weekend cravings",
    features: [
      "5 drone deliveries per month",
      "Standard masala & plain dosa",
      "Live order tracking",
      "Email support",
    ],
    cta: "Start Flying",
    featured: false,
  },
  {
    name: "Dosa Prime",
    price: "₹299",
    period: "/month",
    desc: "For the true dosa devotee",
    features: [
      "Unlimited deliveries",
      "All dosa varieties + uttapam",
      "Priority drone queue",
      "24/7 WhatsApp concierge",
      "Free chutney upgrades",
    ],
    cta: "Go Prime",
    featured: true,
  },
];

export default function Home() {
  return (
    <>
      <div className="page-bg" aria-hidden="true" />

      <header className="nav">
        <a href="#" className="logo">
          <span className="logo-icon">
            <Drone size={20} strokeWidth={2.5} />
          </span>
          AirDosa
        </a>
        <ul className="nav-links">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
        </ul>
        <a href="#pricing" className="nav-cta">
          Get Started
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Now delivering in Bengaluru
          </div>
          <h1>
            Crispy Dosas.
            <br />
            <span>Sky-High Speed.</span>
          </h1>
          <p className="hero-tagline">
            India&apos;s first AI-powered instant dosa delivery — from tawa to
            terrace in minutes. No traffic. No waiting. Just dosa.
          </p>
          <div className="hero-actions">
            <a href="#pricing" className="btn-primary">
              <Sparkles size={18} />
              Order Your First Dosa
            </a>
            <a href="#features" className="btn-secondary">
              See How It Works
            </a>
          </div>
          <div className="hero-visual">
            <div className="drone-card">
              <div className="drone-card-icon">
                <Drone size={28} strokeWidth={2} />
              </div>
              <div className="drone-card-text">
                <strong>Drone AD-7 en route</strong>
                <span>Masala dosa · ETA 8 min · Koramangala</span>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <Reveal className="section-header">
            <span className="section-label">Why AirDosa</span>
            <h2>Built for the hungry &amp; the hurried</h2>
            <p>
              We combined South Indian breakfast obsession with cutting-edge
              drone tech. The result? Magic on a plate.
            </p>
          </Reveal>

          <div className="features-grid">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 120}>
                <article className="feature-card">
                  <div className="feature-icon">
                    <feature.icon size={26} strokeWidth={2} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="pricing" className="pricing-section">
          <Reveal className="section-header">
            <span className="section-label">Pricing</span>
            <h2>Pick your dosa altitude</h2>
            <p>
              Simple plans. No hidden fees. Cancel anytime — we&apos;ll still
              miss you.
            </p>
          </Reveal>

          <div className="pricing-grid">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 150}>
                <article
                  className={`pricing-card${plan.featured ? " pricing-card--featured" : ""}`}
                >
                  <h3>{plan.name}</h3>
                  <p className="price-desc">{plan.desc}</p>
                  <p className="price">
                    {plan.price}
                    <span>{plan.period}</span>
                  </p>
                  <ul className="pricing-features">
                    {plan.features.map((item) => (
                      <li key={item}>
                        <Check size={18} strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`pricing-btn ${plan.featured ? "pricing-btn--filled" : "pricing-btn--outline"}`}
                  >
                    {plan.cta}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <Reveal direction="up">
          <div className="footer-inner">
            <div className="footer-brand">
              <a href="#" className="logo">
                <span className="logo-icon">
                  <Drone size={20} strokeWidth={2.5} />
                </span>
                AirDosa
              </a>
              <p>
                AI-powered instant dosa delivery. Made with love in Bengaluru.
              </p>
            </div>
            <ul className="footer-links">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <p className="footer-bottom">
            © {new Date().getFullYear()} AirDosa Technologies Pvt. Ltd. ·{" "}
            <MapPin size={12} style={{ display: "inline", verticalAlign: "-2px" }} />{" "}
            Bengaluru, India
          </p>
        </Reveal>
      </footer>

      <FloatingOrderButton />
    </>
  );
}
