import React from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import {
  WalletIcon,
  TrendUpIcon,
  ChartBarIcon,
  CreditCardIcon,
} from "lucide-react";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl space-y-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-emerald-50">
    <div className="bg-emerald-100 p-3 rounded-xl inline-block">
      <Icon className="h-8 w-8 text-emerald-600" />
    </div>
    <h3 className="text-xl font-bold text-slate-800">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const Landing: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mb-6">
            Simple Finance Tracking
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Effortlessly track your income, expenses, and financial health with
            our user-friendly finance tracker.
          </p>

          {/* TODO: Replace with an actual hero illustration */}
          {/* <img src="/hero-illustration.png" alt="Finance Tracking Dashboard" className="mx-auto max-w-2xl shadow-2xl rounded-2xl"/> */}

          <div className="flex justify-center space-x-4">
            <SignInButton mode="modal">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white/50 backdrop-blur-xl py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Track your finances with ease and clarity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: WalletIcon,
                title: "Income & Expense Tracking",
                description:
                  "Easily log your daily income and expenses in seconds.",
              },
              {
                icon: ChartBarIcon,
                title: "Monthly Insights",
                description:
                  "Visualize your financial trends with intuitive monthly graphs.",
              },
              {
                icon: CreditCardIcon,
                title: "Net Financial Health",
                description:
                  "Track your net income and overall money flow at a glance.",
              },
            ].map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-50/30 -skew-y-6"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Simple steps to manage your finances
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Log Transactions",
                description:
                  "Input date, amount, category, and type of transaction.",
              },
              {
                step: "2",
                title: "Visualize Data",
                description: "View monthly graphs showing income and expenses.",
              },
              {
                step: "3",
                title: "Track Progress",
                description: "Monitor net income and financial flow easily.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl text-center space-y-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* TODO: Add an illustration showing the process */}
          {/* <img src="/process-illustration.png" alt="Finance Tracking Process" className="mt-16 mx-auto max-w-4xl shadow-2xl rounded-2xl"/> */}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-32">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Mindful About Money</h3>
            <p className="text-emerald-100">
              Simplifying personal finance tracking for everyone.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Dashboard", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="hover:text-emerald-100 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {[
                {
                  name: "Privacy Policy",
                  content: `
                    1. Data Collection: We collect minimal personal information
                    2. User Data Protection: Encrypted storage and secure handling
                    3. No Third-Party Sharing: Your financial data remains private
                    4. Transparent Practices: Clear communication about data use
                  `,
                },
                {
                  name: "Terms of Service",
                  content: `
                    1. User Responsibilities: Accurate financial reporting
                    2. Service Usage: Personal finance tracking only
                    3. Account Security: Maintain confidentiality of login credentials
                    4. Limitation of Liability: Financial advice is suggestive, not definitive
                  `,
                },
                {
                  name: "Cookie Policy",
                  content: `
                    1. Essential Cookies: Used for app functionality
                    2. No Tracking Cookies: Minimal browser storage
                    3. User Consent: Transparent cookie usage
                    4. Data Privacy: No personal data stored in cookies
                  `,
                },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href="#"
                    className="hover:text-emerald-100 transition-colors"
                    title={link.content}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              {[
                { name: "Twitter", url: "https://twitter.com/tednotswarley" },
                { name: "LinkedIn", url: "https://linkedin.com/in/heysajit" },
                { name: "GitHub", url: "https://github.com/maverickOG" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-100 transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
            <p className="text-sm text-emerald-100">
              © {new Date().getFullYear()} Mindful About Money. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Auth: React.FC = () => {
  return (
    <div className="sign-in-container">
      <SignedIn>
        <Navigate to="/Dashboard" />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal" />
        <SignUpButton mode="modal" />
      </SignedOut>
    </div>
  );
};

export { Landing, Auth };
