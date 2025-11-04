"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { CreditCard, HelpCircle, Package, Quote, Rocket, Shield, Star, TrendingUp, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="wavyBackground"
      cardStyle="layered-gradient"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Xeven Solutions"
          button={{
            text: "Start Free Trial",
            href: "https://app.xeven.com"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Transform Your Business with Intelligent SaaS Solutions"
          description="Streamline operations, boost productivity, and accelerate growth with our comprehensive suite of cloud-based tools designed for modern enterprises."
          tag="Next-Gen Platform"
          tagIcon={Zap}
          buttons={[
            {
              text: "Start Free Trial",
              href: "https://app.xeven.com"
            },
            {
              text: "Watch Demo",
              href: "demo"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Xeven Solutions dashboard interface"
          frameStyle="browser"
        />
      </div>
      
      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Xeven"
          description={[
            "We're pioneering the future of business automation with cutting-edge SaaS solutions that empower organizations to achieve unprecedented efficiency.",
            "Our platform combines artificial intelligence, advanced analytics, and seamless integrations to create a unified ecosystem for modern enterprises."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "company"
            }
          ]}
          showBorder={true}
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardOne
          title="Powerful Features"
          description="Discover the comprehensive suite of tools that make Xeven Solutions the preferred choice for forward-thinking businesses."
          tag="Platform Features"
          tagIcon={Star}
          features={[
            {
              title: "Advanced Analytics",
              description: "Real-time insights and predictive analytics to drive data-driven decision making across your organization.",
              imageSrc: "https://images.pexels.com/photos/936135/pexels-photo-936135.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Analytics dashboard"
            },
            {
              title: "Workflow Automation",
              description: "Automate repetitive tasks and streamline complex processes with our intelligent automation engine.",
              imageSrc: "https://images.pexels.com/photos/1188751/pexels-photo-1188751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Workflow automation interface"
            },
            {
              title: "Seamless Integrations",
              description: "Connect with 500+ popular tools and platforms through our robust API and pre-built integrations.",
              imageSrc: "https://images.pexels.com/photos/6755065/pexels-photo-6755065.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Integration connections"
            },
            {
              title: "Enterprise Security",
              description: "Bank-level security with end-to-end encryption, SOC 2 compliance, and advanced threat protection.",
              imageSrc: "https://images.pexels.com/photos/5475786/pexels-photo-5475786.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Security protection shield"
            }
          ]}
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardOne
          title="Our Solutions"
          description="Explore our comprehensive product suite designed to meet every aspect of your business needs."
          tag="Products"
          tagIcon={Package}
          products={[
            {
              id: "dashboard-pro",
              name: "Dashboard Pro",
              price: "From $49/mo",
              imageSrc: "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Dashboard Pro interface"
            },
            {
              id: "analytics-suite",
              name: "Analytics Suite",
              price: "From $79/mo",
              imageSrc: "https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Analytics Suite reports"
            },
            {
              id: "team-workspace",
              name: "Team Workspace",
              price: "From $29/mo",
              imageSrc: "https://images.pexels.com/photos/7550450/pexels-photo-7550450.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Team collaboration workspace"
            }
          ]}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your business needs with flexible pricing that scales with your growth."
          tag="Pricing Plans"
          tagIcon={CreditCard}
          plans={[
            {
              id: "starter",
              price: "$29/mo",
              name: "Starter Plan",
              buttons: [
                {
                  text: "Get Started",
                  href: "https://app.xeven.com/signup"
                },
                {
                  text: "Contact Sales",
                  href: "contact"
                }
              ],
              features: [
                "Up to 5 team members",
                "50GB storage",
                "Basic integrations",
                "Email support",
                "Standard analytics"
              ]
            },
            {
              id: "business",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$79/mo",
              name: "Business Plan",
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "https://app.xeven.com/trial"
                },
                {
                  text: "Schedule Demo",
                  href: "demo"
                }
              ],
              features: [
                "Up to 25 team members",
                "500GB storage",
                "Advanced integrations",
                "Priority support",
                "Advanced analytics",
                "Workflow automation"
              ]
            },
            {
              id: "enterprise",
              price: "$199/mo",
              name: "Enterprise Plan",
              buttons: [
                {
                  text: "Contact Sales",
                  href: "contact"
                },
                {
                  text: "Custom Demo",
                  href: "enterprise-demo"
                }
              ],
              features: [
                "Unlimited team members",
                "Unlimited storage",
                "All integrations",
                "24/7 dedicated support",
                "Custom analytics",
                "Advanced automation",
                "White-label options"
              ]
            }
          ]}
        />
      </div>
      
      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Trusted by Industry Leaders"
          description="Join thousands of companies that rely on Xeven Solutions to power their digital transformation."
          tag="Success Metrics"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "50K+",
              description: "Active Users Worldwide"
            },
            {
              id: "2",
              value: "99.9%",
              description: "System Uptime Guarantee"
            },
            {
              id: "3",
              value: "500+",
              description: "Integrations Available"
            },
            {
              id: "4",
              value: "24/7",
              description: "Expert Support Coverage"
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Leadership"
          description="The visionary team driving innovation and excellence at Xeven Solutions."
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "CEO & Founder",
              imageSrc: "https://images.pexels.com/photos/8871904/pexels-photo-8871904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Chen, CEO"
            },
            {
              id: "2",
              name: "Michael Rodriguez",
              role: "CTO",
              imageSrc: "https://images.pexels.com/photos/3861963/pexels-photo-3861963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Rodriguez, CTO"
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Discover how Xeven Solutions transforms businesses across industries with real testimonials from our valued clients."
          tag="Customer Stories"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "Emily Watson",
              role: "VP of Operations, TechFlow Inc",
              testimonial: "Xeven Solutions transformed our workflow efficiency by 300%. The automation features saved us countless hours and significantly improved our bottom line.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Watson testimonial"
            },
            {
              id: "2",
              name: "David Kim",
              role: "Founder, StartupLab",
              testimonial: "The analytics dashboard gave us insights we never knew we needed. Our decision-making process is now data-driven and incredibly effective.",
              imageSrc: "https://images.pexels.com/photos/3755824/pexels-photo-3755824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim testimonial"
            },
            {
              id: "3",
              name: "Lisa Thompson",
              role: "CEO, InnovateCorp",
              testimonial: "Implementation was seamless, and the support team is exceptional. Xeven Solutions exceeded all our expectations for a SaaS platform.",
              imageSrc: "https://images.pexels.com/photos/5686105/pexels-photo-5686105.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Thompson testimonial"
            },
            {
              id: "4",
              name: "James Parker",
              role: "Product Manager, CloudTech",
              testimonial: "The integration capabilities are outstanding. We connected all our tools effortlessly and created a unified workflow ecosystem.",
              imageSrc: "https://images.pexels.com/photos/7414011/pexels-photo-7414011.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Parker testimonial"
            },
            {
              id: "5",
              name: "Rachel Green",
              role: "Director, GrowthCo",
              testimonial: "ROI was visible within the first month. The platform's intelligence and automation capabilities are truly game-changing.",
              imageSrc: "https://images.pexels.com/photos/5989942/pexels-photo-5989942.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Rachel Green testimonial"
            },
            {
              id: "6",
              name: "Mark Stevens",
              role: "Founder, ScaleUp Solutions",
              testimonial: "Xeven Solutions scaled perfectly with our growth. From startup to enterprise, the platform adapted to our changing needs flawlessly.",
              imageSrc: "https://images.pexels.com/photos/7414112/pexels-photo-7414112.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mark Stevens testimonial"
            }
          ]}
        />
      </div>
      
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Giants"
          description="Join the ranks of leading companies that trust Xeven Solutions to power their digital infrastructure."
          tag="Partners"
          tagIcon={Shield}
          logos={[
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4744755/pexels-photo-4744755.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={30}
          showCard={true}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about Xeven Solutions platform, pricing, and implementation."
          tag="Help Center"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What is Xeven Solutions?",
              content: "Xeven Solutions is a comprehensive SaaS platform that combines analytics, automation, and integrations to streamline business operations and accelerate growth for modern enterprises."
            },
            {
              id: "2",
              title: "How quickly can I get started?",
              content: "You can start using Xeven Solutions immediately with our free trial. Full implementation typically takes 24-48 hours with our guided onboarding process."
            },
            {
              id: "3",
              title: "What integrations do you support?",
              content: "We support 500+ integrations including popular tools like Salesforce, HubSpot, Slack, Microsoft 365, Google Workspace, and many more through our robust API."
            },
            {
              id: "4",
              title: "Is my data secure?",
              content: "Absolutely. We maintain SOC 2 compliance, use end-to-end encryption, and implement bank-level security measures to protect your data at all times."
            },
            {
              id: "5",
              title: "Can I customize the platform?",
              content: "Yes, Xeven Solutions offers extensive customization options including custom workflows, branded interfaces, and API access for advanced integrations."
            },
            {
              id: "6",
              title: "What support do you provide?",
              content: "We offer comprehensive support including 24/7 chat support, dedicated account managers for enterprise clients, extensive documentation, and video training resources."
            }
          ]}
          animationType="smooth"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Ready to Transform Your Business?"
          description="Join thousands of companies already using Xeven Solutions. Start your free trial today and experience the future of business automation."
          tagIcon={Rocket}
          inputPlaceholder="Enter your business email"
          buttonText="Start Free Trial"
          termsText="By starting your trial, you agree to our Terms of Service and Privacy Policy. No credit card required."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "Integrations", href: "integrations" },
                { label: "API", href: "api" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About", href: "about" },
                { label: "Careers", href: "careers" },
                { label: "Contact", href: "contact" },
                { label: "Blog", href: "blog" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Help Center", href: "help" },
                { label: "Documentation", href: "docs" },
                { label: "Status", href: "status" },
                { label: "Security", href: "security" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}