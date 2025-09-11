import LabLayout from '../components/LabLayout';
import ScenarioPanel from '../components/ScenarioPanel';
import ChatInterface from '../components/ChatInterface';
import { Layers } from 'lucide-react';

const PI_09_FewShotBackdoor = ({ onBack }: { onBack: () => void }) => (
  <LabLayout
    labNumber="PI-09"
    title="Few-shot Backdooring"
    icon={<Layers text-indigo-400 className="w-10 h-10" />} 
    onBack={onBack}
  >
    <div className="lg:col-span-1">
      <ScenarioPanel
        labId="PI_09"
        scenario={
          <>
            <p>Manipulate with training examples.</p>
          </>
        }
        objective="Retrieve the secret"

      />
    </div>
    <div className="lg:col-span-2">
      <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50">
        <ChatInterface labId="PI_09" />
      </div>
    </div>
  </LabLayout>
);

export default PI_09_FewShotBackdoor;
