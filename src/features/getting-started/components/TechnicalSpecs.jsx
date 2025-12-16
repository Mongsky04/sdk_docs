import { SectionTitle } from '../components';
import RequirementsTable from '../../shared/ui/RequirementsTable';

export default function TechnicalSpecs() {
  return (
    <div id="technical-specs" className="flex flex-col gap-9 w-full">
      <SectionTitle
        badge="System Requirements"
        title="Technical Specifications and Usage Tips"
        description="This section provides the technical specifications of the KGiTON Flutter SDK, including supported Flutter versions & platform requirements"
      />

      <RequirementsTable />
    </div>
  );
}
