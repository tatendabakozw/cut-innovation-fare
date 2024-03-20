import {
  CheckIcon,
  BanknotesIcon,
  ClipboardDocumentCheckIcon,
  ArrowDownCircleIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import { StepItem } from "@pages/home/Home";
type Props = {};

const ConferenceSteps = (props: Props) => {
  const registration_steps = [
    {
      icon: <BanknotesIcon height={16} width={16} className="text-gray-500" />,
      heading: "Making Payment",
      descrption: `Pay through cash deposits or bank transfer into the following accounts
      Banking details for CUT USD Account
               Account Name: Chinhoyi  University of Technology
      Bank name: CBZ Bank
      Branch: Chinhoyi
      Bank account Number:  09821460210084
      Currency: USD
      Banking details for CUT ZWL Account
      Account Name: Chinhoyi  	University of Technology
      
      
      Banking details for CUT USD Nostro
      Account Name: Chinhoyi  	University of Technology
      Bank name: ZB BANK
      Branch: Chinhoyi
      Bank account Number:  4565-386395-410
      Currency Nostro: USD
      
      
      Keep Proof of Payment for uploading under Online Registration
      Onsite payments are also acceptable using swipe or cash upon arrival 
      
      `,
    },
    {
      icon: (
        <ClipboardDocumentCheckIcon
          height={16}
          width={16}
          className="text-green-500"
        />
      ),
      heading: "Online Registration",
      descrption: `Click on Register Button, fill in all the required details and Upload Proof of Payment.
      `,
    },
 
  ];

  return (
    <div className="max-w-7xl w-full mx-auto bg-white">
      <p className="text-slate-900 font-semibold text-3xl text-center pb-16">
        How to participate
      </p>
      <ol className="relative text-gray-500 border-l border-slate-300 dark:border-gray-700 dark:text-gray-400">
        {registration_steps.map((step, index) => (
          <StepItem
            key={index}
            icon={step.icon}
            iconStyles={"bg-gray-200"}
            heading={step.heading}
            desciption={step.descrption}
          />
        ))}
      </ol>
    </div>
  );
};

export default ConferenceSteps;
