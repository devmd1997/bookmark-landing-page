"use client";
import { FormEvent, useState } from "react";
import CustomButton from "../common/button";
import "./callToAction.css";
import Image from "next/image";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !validateEmail(email)) {
      setError("Whoops, make sure it's an email");
    } else {
      setError("");
      console.log("Form submitted with email:", email);
    }
  };

  return (
    <form className="cta-form" onSubmit={handleSubmit} noValidate>
      <div className={`input-wrapper ${error ? "error" : ""}`}>
        <input
          name="email"
          type="email"
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && (
          <div className="error-icon">
            <Image src="/icon-error.svg" alt="Error" width={20} height={20} />
          </div>
        )}
        {error && <div className="error-message">{error}</div>}
      </div>
      <CustomButton
        text="Contact Us"
        type="button-tertirary"
        fullWidth={true}
        className="flex-1"
      />
    </form>
  );
};

export default function CallToAction() {
  return (
    <section className="cta-container">
      <div className="cta-content">
        <div className="header">
          <h1 className="text-preset-3 md:text-preset-6-semibold">
            35,000+ ALREADY JOINED
          </h1>
          <h1 className="text-preset-1 md:text-preset-2-medium">
            Stay up-to-date with what we’re doing
          </h1>
        </div>
        <EmailForm />
      </div>
    </section>
  );
}
