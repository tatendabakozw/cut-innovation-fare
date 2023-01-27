import React, { useState } from "react";
import { Select } from "@chakra-ui/react";
import { useFetch } from "@hooks/useFetch";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import slugify from "@helpers/sligify";
import { Link } from "react-router-dom";

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

  const countries_url = `https://restcountries.com/v3.1/all`;
  const countries = useFetch(countries_url);

  const new_c_url = `https://services.bluekai.com/rest/countries`;
  const new_resp = useFetch(new_c_url);

  console.log("new countries ------- ", new_resp);

  return (
    <div className="w-full bg-slate-100 min-h-screen">
      <div className="max-w-7xl p-4 w-full mx-auto rounded">
        <div className="bg-white w-full max-w-7xl flex flex-col space-y-8 mx-auto md:p-8 p-4 h-full rounded-lg">
          <div className="flex">
            <Link
              to="/"
              className="flex bg-slate-100 hover:bg-slate-200 rounded-full p-2"
            >
              <ArrowLeftIcon height={24} width={24} />
            </Link>
          </div>
          <p className="text-lg font-semibold text-slate-900 text-center">
            Apply Now
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
              { value: "miss", name: "Mrs" },
              { value: "doc", name: "Mrs" },
              { value: "sr", name: "Sister" },
              { value: "fr/rev", name: "Father/Reverend" },
              { value: "prof", name: "Mrs" },
              { value: "hon", name: "Honorable" },
            ]}
            setValue={setTitle}
            placeholder_="whats your title"
          />
          <div className="grid md:grid-cols-4 md:gap-4 gap-2 grid-cols-1 items-center">
            <div className="col-span-1 font-semibold">{"Select Country"} </div>
            <div className="md:col-span-3 col-span-1">
              <Select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="" disabled selected >Select Country</option>
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
            placeholder_="enter city"
          />

          <FieldItem
            label="National Id/Passport No"
            value={nat_id}
            setValue={setNatId}
            placeholder_="national id"
          />
          <FieldItem
            label="Organisation Type"
            value={org_type}
            setValue={setOrgType}
            is_dropdown
            select_options={[
              { name: "Agriculture" },
              { name: "Education" },
              { name: "Energy" },
              { name: "Tourism" },
              { name: "Finance" },
              { name: "Construction" },
              { name: "Commerce" },
              { name: "Health" },
            ]}
            placeholder_="Organisation Type"
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
              { name: "Professional" },
              { name: "Corporate" },
              { name: "Undergraduates" },
              { name: "Postgraduates" },
              { name: "Non presenter/General Attendee/Exhibiter" },
            ]}
            placeholder_="Delegate type"
          />
          <FieldItem
            label="Inidicate Special Needs"
            value={special_needs}
            setValue={setSpecialNeeds}
            placeholder_="What special needs do you needs"
          />
          <FieldItem
            label="Diet"
            value={dietary}
            setValue={setDietaryNeeds}
            placeholder_="Indicate any special dietary requirements"
          />

          <div className="grid md:grid-cols-4 md:gap-4 gap-2 grid-cols-1 items-center">
            <div className="col-span-1 font-semibold">{"Select Country"} </div>
            <div className="md:col-span-3 col-span-1">
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

          <div className="flex self-end bg-blue-900 text-white p-2 rounded-lg cursor-pointer">
            Register Now
          </div>
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
}

const FieldItem = ({
  label,
  value,
  setValue,
  optional,
  placeholder_,
  is_dropdown,
  select_options,
}: FieldItemProps) => {
  return (
    <div className="grid md:grid-cols-4 md:gap-4 gap-2 grid-cols-1 items-center">
      <div className="col-span-1 font-semibold">
        {label}{" "}
        {optional && (
          <span className="tex-slate-400 text-xs font-normal">(optional)</span>
        )}
      </div>
      <div className="md:col-span-3 col-span-1">
        {is_dropdown ? (
          <Select
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <option value="" disabled selected >{placeholder_}</option>
            {select_options?.map((option: any, index: number) => (
              <option key={index} value={slugify(option.name)}>
                {option.name}
              </option>
            ))}
          </Select>
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder_}
            className="outline-none p-2 w-full border border-slate-200 rounded"
          />
        )}
      </div>
    </div>
  );
};

export default Register;
