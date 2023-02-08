import React, { useState } from "react";
import { Select, useToast } from "@chakra-ui/react";
import { useFetch } from "@hooks/useFetch";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import slugify from "@helpers/sligify";
import { Link } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
  uploadString,
} from "firebase/storage";
import { firebaseApp } from "src/config/firebase-config";
import axios from "axios";
import { apiUrl } from "@utils/apiUrl";
import { getMessage } from "@helpers/getMessage";

type Props = {};

function Register({}: Props) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [full_name, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [title, setTitle] = useState("");
  const [nat_id, setNatId] = useState("");
  const [org_type, setOrgType] = useState("");
  const [thematic_area, setThematicArea] = useState("");
  const [presentation_type, setPresType] = useState("");
  const [delegate_type, setDelagateType] = useState("");
  const [special_needs, setSpecialNeeds] = useState("");
  const [dietary, setDietaryNeeds] = useState("");
  const [csvFile, SetCsvFile] = useState<any>();
  const [file_loading, setFileLoading] = useState(false);
  const [progress, setProgress] = useState();
  const toast = useToast();
  const [agreed, setAgreed] = useState<any>(false);

  const storage = getStorage(firebaseApp);

  const upload_video = async (e: any) => {
    const videoFile = csvFile;
    const storageRef = ref(storage, `PoPs/${Date.now()}-${videoFile.name}`);
    try {
      setFileLoading(true);
      const uploadTask = uploadBytesResumable(storageRef, videoFile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const uploadProgress: any =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(uploadProgress);
        },
        (error) => {
          console.log(error);
          setFileLoading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(
            async (downloadURL: any) => {
              try {
                const { data } = await axios.post(
                  `${apiUrl}/api/event/register`,
                  {
                    email: email,
                    name: full_name,
                    phone_number: phone,
                    proof_of_payment: downloadURL,
                    country,
                    city,
                    id_number: nat_id,
                    org_type: org_type,
                    thematic_area: thematic_area,
                    delegate_type,
                    presentation_type,
                    special_needs,
                    diet: dietary,
                  }
                );
                console.log(data);
                setFileLoading(false);
                toast({
                  title: "Registration Successful.",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                  position: "top-right",
                });
              } catch (error) {
                setFileLoading(false);
                toast({
                  title: "Registration Failed.",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                  position: "top-right",
                });
              }
            }
          );
        }
      );
    } catch (error) {
      console.log(getMessage(error));
      setFileLoading(false);
    }
  };

  const countries_url = `https://restcountries.com/v3.1/all`;
  const countries = useFetch(countries_url);

  return (
    <div className="w-full bg-slate-100 min-h-screen">
      <div className="max-w-7xl p-4 w-full mx-auto rounded">
        <div className="bg-white w-full max-w-7xl flex flex-col space-y-8 mx-auto md:p-8 p-4 h-full rounded-lg">
          <div className="flex  w-full flex-row items-center justify-between">
            <Link
              to="/"
              className="flex bg-slate-200 hover:bg-slate-100 rounded-full p-2"
            >
              <ArrowLeftIcon height={24} width={24} />
            </Link>
            <a href='/participation' className="bg-slate-200 hover:bg-slate-100 p-2 font-semibold rounded">How to participate</a>
          </div>
          <p className="text-lg font-semibold text-slate-900 text-center">
            Register Now
          </p>
          <FieldItem
            label="Email"
            value={email}
            setValue={setEmail}
            placeholder_="email"
          />
          <FieldItem
            label="Phone Number"
            value={phone}
            setValue={setPhone}
            placeholder_="Phone Number"
          />

          <FieldItem
            label="Full Name"
            value={full_name}
            setValue={setFullName}
            placeholder_="John Doe"
          />
          <FieldItem
            label="Title"
            value={title}
            is_dropdown
            select_options={[
              { value: "mr", name: "Mr" },
              { value: "mrs", name: "Mrs" },
              { value: "miss", name: "Miss" },
              { value: "ms", name: "Ms" },
              { value: "doc", name: "Dr" },
              { value: "sr", name: "Sister" },
              { value: "fr/rev", name: "Father/Reverend" },
              { value: "prof", name: "Prof" },
              { value: "hon", name: "Honorable" },
            ]}
            setValue={setTitle}
            placeholder_="Select title"
          />
          <div className="grid md:grid-cols-4 md:gap-4 gap-2 grid-cols-1 items-center">
            <div className="col-span-1 font-semibold">{"Select Country"} </div>
            <div className="md:col-span-3 col-span-1">
              <Select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="" disabled selected>
                  Select Country
                </option>
                {countries?.data
                  ?.sort((a: any, b: any) =>
                    a.name.common.localeCompare(b.name.common)
                  )
                  ?.map((option: any, index: number) => (
                    <option key={index} value={slugify(option.name.common)}>
                      {option.name.common}
                    </option>
                  ))}
              </Select>
            </div>
          </div>
          <FieldItem
            label="City"
            value={city}
            setValue={setCity}
            placeholder_="Enter city"
          />
          {/* 
          <FieldItem
            label="National Id/Passport No"
            value={nat_id}
            setValue={setNatId}
            placeholder_="national id/ passport No"
          /> */}
          <FieldItem
            label="Affiliation"
            value={org_type}
            setValue={setOrgType}
            // is_dropdown
            // select_options={[
            //   { name: "Agriculture" },
            //   { name: "Education" },
            //   { name: "Energy" },
            //   { name: "Tourism" },
            //   { name: "Finance" },
            //   { name: "Construction" },
            //   { name: "Commerce" },
            //   { name: "Health" },
            // ]}
            placeholder_="Indicate your organisation type"
          />

          <FieldItem
            label="Thematic Area"
            value={thematic_area}
            setValue={setThematicArea}
            is_dropdown
            select_options={[
              { name: "Sustainable Food Systems" },
              { name: "Creative Design Practices" },
              {
                name: "Entrepreneurship, Industrialisation, and Business Development",
              },
              {
                name: "Engineering a Sustanable future through creativity, innovation and industrilization",
              },
              { name: "Sustainable materials and Circular Production Systems" },
              {
                name: "Human and Animal Health, Ethno-medicines and Drug Discovery",
              },
              {
                name: "Biodiversity Consevation, Climate Change and Sustainable Development",
              },
            ]}
            placeholder_="Select Thematic Area"
          />
          <FieldItem
            label="Presention Type"
            value={presentation_type}
            setValue={setPresType}
            is_dropdown
            select_options={[
              { name: "Oral" },
              { name: "Poster" },
              { name: "Exhibition" },
              { name: "Online" },
            ]}
            placeholder_="Presentation type"
          />
          <FieldItem
            label="Delegate Type"
            value={delegate_type}
            setValue={setDelagateType}
            is_dropdown
            select_options={[
              { name: "Professional Academia" },
              { name: "Professional Non-Academia" },
              // { name: "Corporate" },
              { name: "Undergraduates" },
              { name: "Postgraduates" },
              { name: "Non presenter/General Attendee" },
              { name: "Exhibitor" },
            ]}
            placeholder_="Delegate type"
          />
          <FieldItem
            label="Indicate Special Needs"
            is_message
            value={special_needs}
            setValue={setSpecialNeeds}
            placeholder_="Indicate any special needs e.g wheelchair bound"
          />
          <FieldItem
            label="Indicate dietary requirements"
            is_message
            value={dietary}
            setValue={setDietaryNeeds}
            placeholder_="Indicate any special dietary requirements"
          />

          <div className="grid md:grid-cols-4 md:gap-4 gap-2 grid-cols-1 items-center">
            <div className="col-span-1 font-semibold">
              {" Proof Of Payment"}{" "}
            </div>
            <div className="md:col-span-3 col-span-1">
              <div>
                Upload proof of payment{" "}
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

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              value={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-blue-primary focus:ring-red-400"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I consent to share
              <span className="text-blue-900"> the information above</span>
            </label>
          </div>

          {agreed ? (
            <>
              {file_loading ? (
                <div className="flex self-end bg-blue-900 text-white p-2 rounded-lg cursor-pointer">
                  Uploading File ...
                </div>
              ) : (
                <div
                  onClick={upload_video}
                  className="flex self-end bg-blue-900 text-white p-2 rounded-lg cursor-pointer"
                >
                  Register
                </div>
              )}
            </>
          ) : (
            <>
            
              <div onClick={upload_video} className="flex self-end bg-gray-500 text-white p-2 rounded-lg cursor-pointer">
                Register
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

interface FieldItemProps {
  label: string;
  placeholder_?: string;
  value: any;
  setValue: any;
  optional?: boolean;
  is_dropdown?: boolean;
  select_options?: any;
  is_message?: boolean;
}

const FieldItem = ({
  label,
  value,
  setValue,
  optional,
  placeholder_,
  is_dropdown,
  select_options,
  is_message,
}: FieldItemProps) => {
  return (
    <div className="grid md:grid-cols-4 md:gap-4 gap-2 grid-cols-1 items-center">
      <div className="col-span-1 font-semibold capitalize">
        {label}{" "}
        {optional && (
          <span className="tex-slate-400 text-xs font-normal">(optional)</span>
        )}
      </div>
      <div className="md:col-span-3 col-span-1">
        {is_dropdown ? (
          <Select value={value} onChange={(e) => setValue(e.target.value)}>
            <option value="" disabled selected>
              {placeholder_}
            </option>
            {select_options?.map((option: any, index: number) => (
              <option key={index} value={slugify(option.name)}>
                {option.name}
              </option>
            ))}
          </Select>
        ) : (
          <>
            {is_message ? (
              <textarea
                rows={5}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder_}
                className="outline-none p-2 w-full border border-slate-200 rounded"
              />
            ) : (
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder_}
                className="outline-none p-2 w-full border border-slate-200 rounded"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
