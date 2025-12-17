import { SectionTitle, StepContainer, InlineCode, PermissionItem } from '../components';
import { CodeBlockWithTabs } from '../../shared/ui';
import androidIconActive from '../../../assets/mingcute_android-fill(2).svg';
import androidIconInactive from '../../../assets/mingcute_android-fill(1).svg';
import appleIconActive from '../../../assets/mdi_apple(2).svg';
import appleIconInactive from '../../../assets/mdi_apple(1).svg';

export default function PlatformSetup() {
  const androidXmlCode = `<uses-permission android:name="android.permission.BLUETOOTH_SCAN" />
<uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />`;

  const iosCode = `// iOS Configuration code will be here`;

  const platformTabs = [
    {
      id: 'android',
      label: 'Android',
      language: 'xml',
      code: androidXmlCode,
      iconActive: androidIconActive,
      iconInactive: androidIconInactive
    },
    {
      id: 'ios',
      label: 'IOS',
      language: 'swift',
      code: iosCode,
      iconActive: appleIconInactive,
      iconInactive: appleIconActive
    }
  ];

  return (
    <div id="platform-setup" className="flex flex-col gap-9 w-full">
      <SectionTitle
        badge="Platform Setup (Android/iOS)"
        title="Platform-Specific Setup"
        description="To ensure seamless integration of the KGiTON SDK with your Flutter application, platform-specific setup is required for both Android and iOS. This section will guide you through the necessary steps to configure your application for both platforms, including setting the correct permissions, SDK configurations, and platform-specific settings."
      />

      {/* Step 1 */}
      <StepContainer
        stepNumber="1"
        title="Configure platform-specific settings:"
        description="To ensure proper functionality of the KGiTON SDK across different platforms, you need to configure platform-specific settings for both Android and iOS. These configurations involve updating the necessary permissions and making platform-specific adjustments to support Bluetooth Low Energy (BLE) functionality."
      >
        <div className="flex gap-1 items-center flex-wrap">
          <p className="font-roboto font-normal text-base leading-6 text-white">
            Android
          </p>
          <InlineCode>android/app/src/main/AndroidManifest.xml</InlineCode>
        </div>

        <CodeBlockWithTabs tabs={platformTabs} />
              
        <div className="flex gap-1 items-center flex-wrap">
          <p className="font-roboto font-normal text-base leading-6 text-[#a0a0a0]">
            SDK Configuration: Make sure your
          </p>
          <InlineCode>build.gradle</InlineCode>
          <p className="font-roboto font-normal text-base leading-6 text-[#a0a0a0]">
            file is configured with the correct SDK versions.
          </p>
        </div>

        <p className="font-roboto font-normal text-base leading-6 text-[#a0a0a0] w-full break-words">
          For Android, you need to add the following permissions in the AndroidManifest.xml file. 
          These permissions allow the app to scan for and connect to Bluetooth devices, and access 
          location data (which is required for Bluetooth scanning).
        </p>

        <div className="flex flex-col gap-4 w-full">
          <PermissionItem
            name="BLUETOOTH_SCAN"
            description="Allows the app to scan for nearby Bluetooth devices."
          />
          <PermissionItem
            name="BLUETOOTH_CONNECT"
            description="Allows the app to connect to Bluetooth devices."
          />
          <PermissionItem
            name="ACCESS_FINE_LOCATION"
            description="Required for location access, as Bluetooth scanning can detect nearby devices' locations."
          />
        </div>
      </StepContainer>
    </div>
  );
}
