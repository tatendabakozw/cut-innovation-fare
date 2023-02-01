import { ReactElement, useRef } from "react";
import {
  CheckIcon,
  BanknotesIcon,
  ClipboardDocumentCheckIcon,
  ArrowDownCircleIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import logo from "../../assets/icon.png";
import cog_wheel from "../../assets/cogwheel1.svg";
import cog_blue1 from "../../assets/cog_blue1.svg";
import { Link } from "react-router-dom";
import slugify from "@helpers/sligify";

type Props = {};

const Home = (props: Props): ReactElement => {
  const ref = useRef<any>(null);
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

  const handleScroll = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  const price_tiers = [
  
    {
      name: "Postgraduate student",
      price: 200,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    },
    {
      name: "Undergraduate Student",
      price: 200,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    },
    {
      name: "Professional",
      price: 200,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    },
    {
      name: "Cooperate",
      price: 200,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    },
    {
      name: "Non presenter",
      price: 200,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    },
  ];

  return (
    <div className=" w-full h-full min-h-screen md:bg-gradient-to-r bg-gradient-to-b from-white to-blue-300">
      <div className="relative min-h-screen flex flex-col overflow-x-hidden">
        <div onClick={handleScroll} className="absolute md:bottom-10 bottom-5 cursor-pointer md:right-10 right-5 p-2 animate-bounce bg-blue-900 text-white rounded-full ">
          <ArrowDownCircleIcon height={28} width={28} />
        </div>
        <div className="flex flex-row w-full font-semibold items-center z-50 justify-between p-2">
          <span className="flex flex-row items-center md:space-x-4 space-x-2">
          <img src={logo} alt="logo icon" className="md:h-24 h-16 md:w-24 w-16" />
          <p>Chinhoyi University</p>
          </span>
          

          <Link
            to="/register"
            className="bg-blue-900 text-white text-sm py-2 px-3 rounded-full"
          >
            Apply Now
          </Link>
        </div>
        <div className="absolute md:h-96 h-40 md:w-96 w-40 rounded-full md:-top-20 -top-10 md:-right-20 -right-10 z-0">
          <img src={cog_wheel} alt="" className="" />
        </div>
        <div className="absolute  rounded-full md:h-[600px] h-[400px] md:w-[600px] w-[400px] top-0 my-auto z-0 mx-0 bottom-0 md:-left-40 -left-40">
          <img src={cog_blue1} alt="" className="" />
        </div>
        <div className="flex z-40 flex-col items-center h-full flex-1 content-center justify-center w-full max-w-7xl pt-4 mx-auto">
          <p className="text-sm text-slate-500 pb-8">
            {" "}
            Date: February 12-17 2023{" "}
          </p>
          <p className="text-5xl text-center text-slate-900 font-bold">
            The Fifth Chinhoyi University of Technology International Conference
          </p>
          <p className="text-sm text-slate-500 text-center font-semibold py-8">
            Innovation, Industrialisation Growth and Sustainable Development
          </p>
          <div className="flex flex-row bg-white md:text-md text-sm items-center rounded-full py-1 pr-1 md:space-x-5 space-x-2  pl-3">
            <p>Click here for registration</p>
            <Link
              to="/register"
              className="bg-blue-900 text-white cursor-pointer hover:bg-blue-800 rounded-full text-center px-3 py-1 text-sm"
            >
              Apply Now
            </Link>
          </div>
        <Link to="/null-1.pdf" download target="_blank" className="flex text-slate-900 space-x-4 flex-row items-center font-semibold py-16">
          <p>More Info</p>
          <ArrowDownTrayIcon height={20} width={20} />
        </Link>
        </div>
      </div>
   

      <div ref={ref}  className="w-full bg-white py-16 px-4">
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
      </div>

      <div className="w-full bg-white px-2 py-16">
        <div className="max-w-7xl w-full mx-auto">
          <p className="text-slate-900 font-semibold text-3xl text-center pb-16">
            Conference Fees
          </p>
          {/* <div className="grid md:grid-cols-4 grid-cols-1 md:gap-8 gap-4">
            {price_tiers.map((item, index) => (
              <div className="flex space-y-2 bg-slate-50 rounded-lg flex-col p-4">
                <p className="text-slate-900 capitalize font-semibold text-xl">
                  {item.name}
                </p>
                <p className="text-slate-500 text-sm">{item.description}</p>
                <p className="pt-4 text-slate-900 text-3xl font-bold">
                  ${item.price}
                </p>
                <Link
                  to={`/register?delegate=${slugify(item.name)}`}
                  className="text-white text-center font-semibold bg-blue-900 rounded-lg p-2 w-full"
                >
                  Register Now
                </Link>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

interface StepItemProps {
  icon: any;
  heading: string;
  desciption: string;
  iconStyles?: string;
}

const StepItem = (props: StepItemProps) => {
  return (
    <li className="mb-10 ml-6">
      <span
        className={`${props.iconStyles} absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white`}
      >
        {props.icon}
      </span>
      <h3 className="font-medium leading-tight capitalize text-slate-900">
        {props.heading}
      </h3>
      <p className="text-sm">{props.desciption}</p>
    </li>
  );
};

export default Home;
