import {
    CheckIcon,
    BanknotesIcon,
    ClipboardDocumentCheckIcon,
    ArrowDownCircleIcon,
    ArrowDownTrayIcon,
  } from "@heroicons/react/24/outline";
import { StepItem } from "@pages/home/Home";
type Props = {}

const ConferenceSteps = (props: Props) => {
    const registration_steps = [
        {
          icon: <BanknotesIcon height={16} width={16} className="text-gray-500" />,
          heading: "Initialize event",
          descrption: `If you want to pay using cash, skip this step. You can pay for the event using any of the accounts listed below: #### #### #### #### or #### #### #### ####. If you want to pay using cash you can also register, then pay on days of the actual event. Not to keep the proof of payment as it shall be needed in the steps to follow for your registration of the event. Payment can be done using either cash or bank. PRICES DEPEND ON TYPE OF CANDIDATE WHO IS APPLYING`,
        },
        {
          icon: (
            <ClipboardDocumentCheckIcon
              height={16}
              width={16}
              className="text-green-500"
            />
          ),
          heading: "online registration",
          descrption: `Candidates will be required to complete an online registration
      form on our website or via the button provided below.NOTE: if you payed using bank, you will be required to provide a proof of payment using the form provided on the register page. All information used on the registration step will be used to allocate participating areas and other substances.`,
        },
        {
          icon: <CheckIcon height={16} width={16} className="text-green-500" />,
          heading: "Attend Event",
          descrption: `You will receive further information pertaining to the event through the email you have provided to us during the registration state. Thank You. GOOD LUCK.`,
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
  )
}

export default ConferenceSteps