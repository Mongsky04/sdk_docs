import { SectionTitle, StepContainer, InlineCode } from '../components';
import CodeBlock from '../../shared/ui/CodeBlock';

export default function SDKInstallation() {
  const yamlCode = `dependencies:
  kgiton_sdk:
    git:
      url: https://github.com/kgiton/flutter-kgiton-sdk`;

  const dartCode = `import 'package:kgiton_sdk/kgiton_sdk.dart';`;

  return (
    <div id="sdk-installation" className="flex flex-col gap-9 w-full">
      <SectionTitle
        badge="Installation"
        title="SDK Installation Guide"
        description="This section outlines the step-by-step process for installing the KGiTON Flutter SDK in your project. It covers the necessary setup for both Android and iOS platforms, including dependency management, configuration of required permissions, and any platform-specific adjustments."
      />

      {/* Step 1 */}
      <StepContainer
        stepNumber="1"
        title="Add SDK Dependency"
        description={
          <>
            Add the KGiTON SDK dependency in your <InlineCode>pubspec.yaml</InlineCode>:
          </>
        }
      >
        <CodeBlock language="yaml" code={yamlCode} />
        
        <p className="font-roboto font-normal text-base leading-6 text-[#a0a0a0] w-full">
          This step is essential for including the SDK in your Flutter project, enabling you to start using 
          its features for Bluetooth connectivity and data handling.
        </p>

        <div className="flex gap-1 items-center flex-wrap">
          <p className="font-roboto font-normal text-base leading-6 text-[#a0a0a0]">
            Run
          </p>
          <InlineCode>flutter pub get</InlineCode>
          <p className="font-roboto font-normal text-base leading-6 text-[#a0a0a0]">
            to install the package.
          </p>
        </div>
      </StepContainer>

      {/* Step 2 */}
      <StepContainer
        stepNumber="2"
        title="Import the SDK into your Flutter project:"
        description="To begin using the KGiTON SDK in your Flutter application, you must first import it into your Dart files. This enables you to access the SDK's features and methods required for BLE scale integration. Add the import statement to any file where you plan to use the SDK functions."
      >
        <CodeBlock language="dart" code={dartCode} />

        <p className="font-roboto font-normal text-base leading-6 text-[#a0a0a0] w-full">
          Once imported, you'll be able to interact with the SDK and access its functionality, such as 
          scanning for devices, connecting to the BLE scale, and receiving weight data.
        </p>
      </StepContainer>
    </div>
  );
}
