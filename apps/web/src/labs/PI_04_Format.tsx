import LabLayout from '../components/LabLayout';
import ScenarioPanel from '../components/ScenarioPanel';
import ChatInterface from '../components/ChatInterface';
import { FileCode } from 'lucide-react';

const PI_04_Format = ({ onBack }: { onBack: () => void }) => (
  <LabLayout
    labNumber="PI-04"
    title="Format Injection"
    icon={<FileCode text-blue-400 className="w-10 h-10" />} 
    onBack={onBack}
  >
    <div className="lg:col-span-1">
      <ScenarioPanel
        labId="PI_04"
        scenario={
          <>
            <p>Manipulate output formatting.</p>
          </>
        }
        objective="Extract the secret"

      />
    </div>
    <div className="lg:col-span-2">
      <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50">
        <ChatInterface labId="PI_04" />
      </div>
    </div>
  </LabLayout>
);

export default PI_04_Format;
