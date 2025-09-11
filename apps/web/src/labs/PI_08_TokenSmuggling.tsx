import LabLayout from '../components/LabLayout';
import ScenarioPanel from '../components/ScenarioPanel';
import ChatInterface from '../components/ChatInterface';
import { Lock } from 'lucide-react';

const PI_08_TokenSmuggling = ({ onBack }: { onBack: () => void }) => (
  <LabLayout
    labNumber="PI-08"
    title="Token Smuggling"
    icon={<Lock text-red-400 className="w-10 h-10" />} 
    onBack={onBack}
  >
    <div className="lg:col-span-1">
      <ScenarioPanel
        labId="PI_08"
        scenario={
          <>
            <p>Bypass filters with encoding tricks.</p>
          </>
        }
        objective="Retrieve the protected key"

      />
    </div>
    <div className="lg:col-span-2">
      <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50">
        <ChatInterface labId="PI_08" />
      </div>
    </div>
  </LabLayout>
);

export default PI_08_TokenSmuggling;
