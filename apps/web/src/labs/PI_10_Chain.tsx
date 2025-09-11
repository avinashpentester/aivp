import LabLayout from '../components/LabLayout';
import ScenarioPanel from '../components/ScenarioPanel';
import ChatInterface from '../components/ChatInterface';
import { Link } from 'lucide-react';

const PI_10_Chain = ({ onBack }: { onBack: () => void }) => (
  <LabLayout
    labNumber="PI-10"
    title="Chain Injection"
    icon={<Link text-teal-400 className="w-10 h-10" />} 
    onBack={onBack}
  >
    <div className="lg:col-span-1">
      <ScenarioPanel
        labId="PI_10"
        scenario={
          <>
            <p>Attack multi-agent systems.</p>
          </>
        }
        objective="Extract from chain"

      />
    </div>
    <div className="lg:col-span-2">
      <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50">
        <ChatInterface labId="PI_10" />
      </div>
    </div>
  </LabLayout>
);

export default PI_10_Chain;
