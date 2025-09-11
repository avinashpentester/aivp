import { useState } from 'react';
import { AlertTriangle, Database, Cpu, Zap, ChevronDown, ChevronUp, Construction } from 'lucide-react';

type Props = { setCurrentView: (v: string) => void };

const ExploreLabsPage = ({ setCurrentView }: Props) => {
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({});

  const labConfig: Record<string, { icon: React.ReactNode; color: string; status: 'active' | 'construction'; labs: {id:string; name:string}[] }> = {
    'Phase 1: Prompt Injection': {
      icon: <AlertTriangle className="w-5 h-5" />,
      color: 'from-red-500 to-orange-500',
      status: 'active',
      labs: [
        { id: 'PI_01', name: 'PI-01: Direct Prompt Injection' },
        { id: 'PI_02', name: 'PI-02: Indirect Prompt Injection' },
        { id: 'PI_03', name: 'PI-03: Roleplay Jailbreaking' },
        { id: 'PI_04', name: 'PI-04: Format Injection' },
        { id: 'PI_05', name: 'PI-05: Structured Field Injection' },
        { id: 'PI_06', name: 'PI-06: Function Parameter Injection' },
        { id: 'PI_07', name: 'PI-07: Reflexive Prompting' },
        { id: 'PI_08', name: 'PI-08: Token Smuggling' },
        { id: 'PI_09', name: 'PI-09: Few-shot Backdooring' },
        { id: 'PI_10', name: 'PI-10: Chain Injection' },
      ],
    },
    'Phase 2: Data Extraction & Privacy': {
      icon: <Database className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      status: 'construction',
      labs: [],
    },
    'Phase 3: Model Manipulation': {
      icon: <Cpu className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
      status: 'construction',
      labs: [],
    },
    'Phase 4: Advanced Multi-Modal Attacks': {
      icon: <Zap className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500',
      status: 'construction',
      labs: [],
    },
  };

  const togglePhase = (phase: string) => {
    if (labConfig[phase].status === 'active') {
      setExpandedPhases((prev) => ({ ...prev, [phase]: !prev[phase] }));
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Explore Security Labs
      </h1>

      <div className="mb-8 p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
        <p className="text-yellow-400 text-sm flex items-center">
          <AlertTriangle className="w-4 h-4 mr-2" />
          Make sure your FastAPI backend is running on port 8000 before starting labs.
        </p>
      </div>

      <div className="space-y-6">
        {Object.entries(labConfig).map(([phase, config]) => (
          <div
            key={phase}
            className={`rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-lg border ${
              config.status === 'construction' ? 'border-gray-700/30 opacity-60' : 'border-gray-700/50'
            }`}
          >
            <button
              onClick={() => togglePhase(phase)}
              disabled={config.status === 'construction'}
              className={`w-full px-6 py-5 flex items-center justify-between text-left ${
                config.status === 'active' ? 'hover:bg-gray-800/30 cursor-pointer' : 'cursor-not-allowed'
              } transition-colors`}
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`p-2 rounded-lg bg-gradient-to-r ${config.color} ${
                    config.status === 'construction' ? 'opacity-50' : 'opacity-80'
                  }`}
                >
                  {config.icon}
                </div>
                <h3 className="text-xl font-semibold">{phase}</h3>
                {config.status === 'construction' && (
                  <span className="flex items-center text-sm text-yellow-400 bg-yellow-900/20 px-3 py-1 rounded-full">
                    <Construction className="w-4 h-4 mr-1" />
                    Under Construction
                  </span>
                )}
                {config.status === 'active' && (
                  <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                    {config.labs.length} labs
                  </span>
                )}
              </div>
              {config.status === 'active' && (expandedPhases[phase] ? <ChevronUp /> : <ChevronDown />)}
            </button>

            {config.status === 'active' && expandedPhases[phase] && (
              <div className="px-6 pb-6 space-y-3">
                {config.labs.map((lab) => (
                  <div
                    key={lab.id}
                    className="p-4 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-cyan-600/50 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{lab.name}</h4>
                      <button
                        onClick={() => setCurrentView(`lab_${lab.id}`)}
                        className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg text-sm hover:from-cyan-500 hover:to-purple-500 transition-all flex items-center"
                      >
                        <Zap className="w-4 h-4 mr-2" />
                        Launch Lab
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreLabsPage;
