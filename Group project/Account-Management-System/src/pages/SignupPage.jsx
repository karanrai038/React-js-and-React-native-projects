import { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { insertCustomer } from "../api/cutomer";

function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [adhar, setAdhar] = useState("");
  const mutation = useMutation((input) => insertCustomer(input), {
    onSuccess: () => {
      toast("Account created successfully");
      console.log(mutation.data);
    },
  });
  const [isOpen, setIsOpen] = useState(false);

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
  };
  const adharHandler = (e) => {
    setAdhar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    name = firstName + " " + lastName;
    const accountNumber = Math.floor(Math.random() * 1000000000);
    const data = {
      name,
      accountNumber,
      password: password,
      age: age,
      adhar: adhar,
      transaction: [],
      balance: 500,
    };
    mutation.mutate(data);
    setIsOpen(true);
  };

  return (
    <>
      <input
        type="checkbox"
        id="my-modal-3"
        className="modal-toggle"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">
              Congratulations! Your account has been opened.
            </h3>
            <p className="py-4">
              Your Account Number : {mutation.data?.accountNumber}
            </p>
            <p>please note down your account number for login</p>
          </div>
        </div>
      )}
      <form
        className="w-full mx-auto bg-gray-800 p-10 px-40 shadow shadow-xl text-gray-200  shadow"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-300 text-lg font-bold mb-2">
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-700 text-gray-300 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
              type="text"
              placeholder="Jane"
              value={firstName}
              onChange={firstNameHandler}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-300 text-lg font-bold mb-2">
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-700 text-gray-300 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
              type="text"
              placeholder="Doe"
              value={lastName}
              onChange={lastNameHandler}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-300 text-lg font-bold mb-2">
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-7 00 text-gray-300 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
              type="password"
              placeholder="******************"
              value={password}
              onChange={passwordHandler}
            />
            <p className="text-gray-600 text-lg italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-300 text-lg font-bold mb-2">
              Age
            </label>
            <input
              className="appearance-none block w-full bg-gray-700 text-gray-300 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
              type="number"
              placeholder="21"
              value={age}
              onChange={ageHandler}
            />
          </div>

          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-300 text-lg font-bold mb-2">
              Adhar
            </label>
            <input
              className="appearance-none block w-full bg-gray-700 text-gray-300 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
              type="number"
              placeholder="2121212121212121"
              size={16}
              value={adhar}
              onChange={adharHandler}
            />
          </div>

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-300 text-lg font-bold mb-2">
              City
            </label>
            <input
              className="appearance-none block w-full bg-gray-700 text-gray-300 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
              type="text"
              placeholder="Albuquerque"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-300 text-lg font-bold mb-2">
              State
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-700 border border-gray-200 text-gray-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500">
                <option>Andhra Pradesh </option>
                <option>Arunachal Pradesh </option>
                <option>Assam </option>
                <option>Bihar </option>
                <option>Chhattisgarh </option>
                <option>Goa </option>
                <option>Gujarat </option>
                <option>Haryana </option>
                <option>Himachal Pradesh </option>
                <option>Jammu and Kashmir </option>
                <option>Jharkhand </option>
                <option>Karnataka </option>
                <option>Kerala </option>
                <option>Madhya Pradesh </option>
                <option>Maharashtra </option>
                <option>Manipur </option>
                <option>Meghalaya </option>
                <option>Mizoram </option>
                <option>Nagaland </option>
                <option>Odisha </option>
                <option>Punjab </option>
                <option>Rajasthan </option>
                <option>Sikkim </option>
                <option>Tamil Nadu </option>
                <option>Telangana </option>
                <option>Tripura </option>
                <option>Uttar Pradesh </option>
                <option>Uttarakhand </option>
                <option>West Bengal</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-300">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-300 text-lg font-bold mb-2">
              Zip
            </label>
            <input
              className="appearance-none block w-full bg-gray-700 text-gray-300 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
              type="text"
              placeholder="90210"
            />
          </div>
          <button className="mx-auto mt-10 btn btn-primary btn-wide">
            Register
          </button>
        </div>
      </form>
    </>
  );
}

export default SignupPage;
