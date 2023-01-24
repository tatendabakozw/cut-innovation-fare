import { ReactElement } from "react";
import { useState } from "react";
import picc from "../../assets/header-illustration.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import { apiUrl } from "@utils/apiUrl";
import { Select } from "@chakra-ui/react";

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
    <div className="w-full bg-slate-200 px-2 h-full min-h-screen grid items-center justify-center">
      <header
        id="header"
        className="header flex min-h-screen justify-center items-center content-center"
      >
        <div className="max-w-7xl mx-auto w-full container">
          <div className="grid md:grid-cols-12 grid-cols-6 px-2">
            <div className="col-span-6">
              <div className="max-w-5xl">
                <h1 className="md:text-6xl text-3xl font-semibold">
                  The Fifth, <span>Chinhoyi University of Technology </span>
                  <span className="text-orange-500 underline underline-offset-5 button-stroke">
                    International Conference
                  </span>
                </h1>
                <p className="text-lg pb-8 text-slate-600 pt-4">
                  Paymanent platforms. Deposit at ZB Bako Account Number #### #### #### #### then upload the proof of payment using the form below. Thank you
                </p>
                {/* <div className="flex w-full">
                  <Link
                    to="#form-item"
                    className="bg-blue-900 capitalize text-white text-xl px-4 py-1 rounded-full"
                  >
                    Sign up for free
                  </Link>
                </div> */}
              </div>{" "}
              {/* end of text-container */}
            </div>{" "}
            {/* end of col */}
            <div className="col-span-6">
              <div className="image-container">
                <img className="img-fluid" src={picc} alt="alternative" />
              </div>{" "}
              {/* end of image-container */}
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </header>{" "}
      {/* end of header */}
      <div
        id="form-item"
        className=" bg-white md:p-8 p-4 rounded-xl shadow w-full grid grid-cols-2 md:gap-8 gap-4"
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
          <option value="international_delegate">International Delegate</option>
          <option value="local_delegate">Local Delegate</option>
          <option value="postgraduate_students">Postgraduate Students</option>
          <option value="undergraduate_students">Undergraduate Students</option>
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
      <div
        onClick={register_user}
        className="flex flex-col bg-blue-900 mb-12 hover:bg-blue-800 cursor-pointer p-2 text-white rounded-lg mt-16"
      >
        <p className=" text-center">Register Now</p>
      </div>
    </div>
  );
};

export default Home;
