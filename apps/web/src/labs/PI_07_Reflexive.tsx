import LabLayout from '../components/LabLayout';
import ScenarioPanel from '../components/ScenarioPanel';
import ChatInterface from '../components/ChatInterface';
import { Cpu } from 'lucide-react';

const PI_07_Reflexive = ({ onBack }: { onBack: () => void }) => (
  <LabLayout
    labNumber="PI-07"
    title="Reflexive Prompting"
    icon={<Cpu text-pink-400 className="w-10 h-10" />} 
    onBack={onBack}
  >
    <div className="lg:col-span-1">
      <ScenarioPanel
        labId="PI_07"
        scenario={
          <>
            <p>Make AI reveal its instructions.</p>
          </>
        }
        objective="Get internal config"

      />
    </div>
    <div className="lg:col-span-2">
      <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50">
        <ChatInterface labId="PI_07" />
      </div>
    </div>
  </LabLayout>
);

export default PI_07_Reflexive;
