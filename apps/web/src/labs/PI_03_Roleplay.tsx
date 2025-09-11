import LabLayout from '../components/LabLayout';
import ScenarioPanel from '../components/ScenarioPanel';
import ChatInterface from '../components/ChatInterface';
import { Zap } from 'lucide-react';

const PI_03_Roleplay = ({ onBack }: { onBack: () => void }) => (
  <LabLayout
    labNumber="PI-03"
    title="Roleplay Jailbreaking"
    icon={<Zap text-yellow-400 className="w-10 h-10" />} 
    onBack={onBack}
  >
    <div className="lg:col-span-1">
      <ScenarioPanel
        labId="PI_03"
        scenario={
          <>
            <p>Trick the AI using roleplay scenarios.</p>
          </>
        }
        objective="Extract the secret key"

      />
    </div>
    <div className="lg:col-span-2">
      <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50">
        <ChatInterface labId="PI_03" />
      </div>
    </div>
  </LabLayout>
);

export default PI_03_Roleplay;
