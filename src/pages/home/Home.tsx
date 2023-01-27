import { ReactElement } from "react";
import { useState } from "react";
import axios from "axios";
import { apiUrl } from "@utils/apiUrl";
import { Select } from "@chakra-ui/react";
import logo from "../../assets/icon.png";
import cog_wheel from "../../assets/cogwheel1.svg";
import cog_blue1 from "../../assets/cog_blue1.svg";
import PaymentModal from "@components/modal/PaymentModal";
import { Link } from "react-router-dom";

type Props = {};

const Home = (props: Props): ReactElement => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [csvFile, SetCsvFile] = useState<any>();
  const url = `${apiUrl}/event/register`;

  const register_user = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(url, {
        name,
        surname,
        email,
        phone,
        type,
      });
      console.log(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full min-h-screen md:bg-gradient-to-r bg-gradient-to-b from-white to-blue-300">
      <div className="relative min-h-screen flex flex-col overflow-x-hidden">
        <div className="flex flex-row w-full font-semibold items-center z-50 justify-between p-2">
          <p>CUT</p>
          <img src={logo} alt="logo icon" className="h-16 w-16" />
          <p className="bg-blue-900 text-white text-sm py-2 px-3 rounded-full">
            More Info
          </p>
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
              Register Now
            </Link>
          </div>
        </div>
      </div>
      {/* end of header */}
      <div className="w-full bg-slate-100 py-8">
        <div
          id="form-item"
          className=" bg-white md:p-8 p-4 rounded-xl shadow w-full max-w-7xl mx-auto grid grid-cols-2 md:gap-8 gap-4"
        >
          <input
            type="text"
            className="bg-slate-200 rounded p-2 col-span-1"
            placeholder="Enter name"
          />
          <input
            type="text"
            className="bg-slate-200 rounded p-2 col-span-1"
            placeholder="Enter surname"
          />

          <input
            type="text"
            className="bg-slate-200 rounded p-2 col-span-2"
            placeholder="Enter email"
          />
          <input
            type="text"
            className="bg-slate-200 rounded p-2 col-span-1"
            placeholder="Enter phone number"
          />
          <Select placeholder="Select Application Type">
            <option value="international_delegate">
              International Delegate
            </option>
            <option value="local_delegate">Local Delegate</option>
            <option value="postgraduate_students">Postgraduate Students</option>
            <option value="undergraduate_students">
              Undergraduate Students
            </option>
            <option value="cooporate_per_individual">
              Co-Operate per Individual
            </option>
            <option value="other">Other</option>
          </Select>

          <div>
            Proof Of Payment{" "}
            <input
              type="file"
              name="file"
              onChange={(e: any) => {
                SetCsvFile(e.target.files[0]);
              }}
            />
          </div>
        </div>
      </div>
      {/* <div
        onClick={register_user}
        className="flex flex-col bg-blue-900 mb-12 hover:bg-blue-800 cursor-pointer p-2 text-white rounded-lg mt-16"
      >
        <p className=" text-center">Register Now</p>
      </div> */}
    </div>
  );
};

export default Home;
