import { ArrowRight, Shield, Target, Globe, Bot, Database, Code } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          AI Vulnerabilities Playground
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Master the art of AI security through hands-on exploitation and defense
        </p>
      </div>

      <div className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-purple-900/20 to-cyan-900/20 backdrop-blur-lg border border-cyan-800/30">
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          <Target className="w-8 h-8 mr-3 text-cyan-400" />
          Our Mission
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          AIVP is designed to equip security professionals, researchers, and developers with practical knowledge of AI/LLM vulnerabilities.
          Through interactive labs, we simulate real-world attack scenarios that demonstrate how AI systems can be compromised and, more importantly,
          how to defend against these threats.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Each lab represents a distinct vulnerability class found in production AI systems. By understanding these attack vectors,
          you'll develop the critical thinking needed to build more secure AI applications and conduct effective security assessments.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <Shield className="w-8 h-8 mr-3 text-purple-400" />
          Building an AI-Ready Red Team Mindset
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">Adversarial Thinking</h3>
            <p className="text-gray-300 text-sm">
              Learn to think like an attacker targeting AI systems. Understand how seemingly innocent inputs can be crafted
              to bypass security controls and extract sensitive information.
            </p>
          </div>

          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Chain Attack Strategies</h3>
            <p className="text-gray-300 text-sm">
              Master the art of chaining multiple vulnerabilities together. Real-world AI compromises often involve
              combining different attack techniques to achieve maximum impact.
            </p>
          </div>

          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Defense Evasion</h3>
            <p className="text-gray-300 text-sm">
              Discover techniques for bypassing AI safety mechanisms, content filters, and security guardrails
              that are commonly deployed in production environments.
            </p>
          </div>

          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
            <h3 className="text-xl font-semibold mb-3 text-orange-400">Impact Assessment</h3>
            <p className="text-gray-300 text-sm">
              Learn to evaluate the real business impact of AI vulnerabilities, from data exfiltration
              to model manipulation and unauthorized system control.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <Globe className="w-8 h-8 mr-3 text-green-400" />
          Real-World Applications
        </h2>

        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl border border-red-800/30">
            <h3 className="text-xl font-semibold mb-3 text-orange-400 flex items-center">
              <Bot className="w-5 h-5 mr-2" />
              Customer Service Chatbots
            </h3>
            <p className="text-gray-300 text-sm">
              Test chatbots for information disclosure vulnerabilities. Ensure they don't leak PII, internal processes,
              or system configurations when faced with adversarial prompts.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl border border-blue-800/30">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400 flex items-center">
              <Database className="w-5 h-5 mr-2" />
              RAG Systems & Knowledge Bases
            </h3>
            <p className="text-gray-300 text-sm">
              Assess retrieval-augmented generation systems for injection attacks that could manipulate search results,
              poison knowledge bases, or extract unauthorized information.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-800/30">
            <h3 className="text-xl font-semibold mb-3 text-purple-400 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              Code Generation Tools
            </h3>
            <p className="text-gray-300 text-sm">
              Evaluate AI coding assistants for vulnerabilities that could lead to generation of malicious code,
              exposure of proprietary algorithms, or bypass of security policies.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center p-8 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl border border-cyan-600/50">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-gray-300 mb-6">
          Begin with Phase 1 labs to understand fundamental prompt injection techniques,
          then progress through increasingly sophisticated attack scenarios.
        </p>
        <a href="#explore" className="inline-flex px-8 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg font-medium hover:from-cyan-500 hover:to-purple-500 transition-all transform hover:scale-105 items-center">
          Explore Labs
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
