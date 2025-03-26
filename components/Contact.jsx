"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import AppDownload from "./StickyButton";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredContact: "email",
    purpose: "question", // new field for contact purpose
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate form submission
    //handle emailjs
    try {
      emailjs.init("5BmaNVe1TAbrq1oW8");

      const result = await emailjs.send(
        "service_d8152aj", // Email service ID from EmailJS
        "template_zwn3e7t", // Email template ID from EmailJS
        {
          name: formData.name,
          email: formData.email,
          phone: "+212 " + formData.phone,
          message: formData.message,
        }
      );

      if (result.status === 200) {
        setFormStatus({
          submitted: true,
          error: false,
          message:
            "Merci pour votre message ! Notre équipe vous contactera dans les plus brefs délais.",
        });

        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          preferredContact: "email",
          purpose: "question",
        });
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      setFormStatus({
        submitted: true,
        error: true,
        message: "Une erreur s'est produite. Veuillez réessayer plus tard.",
      });
    }

    // end emailjs
    // setFormStatus({
    //   submitted: true,
    //   error: false,
    //   message: "Merci pour votre message ! Notre équipe vous contactera dans les plus brefs délais.",
    // });

    // In a real implementation, you would send the form data to your server here
    console.log("Form submitted:", formData);

    // Reset form after successful submission
    // setFormData({
    //   name: "",
    //   email: "",
    //   phone: "",
    //   message: "",
    //   preferredContact: "email",
    //   purpose: "question",
    // });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Moroccan-inspired background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-banking-light"></div>

        {/* Geometric patterns inspired by Moroccan zellige tilework */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231A5276' fill-opacity='0.15'%3E%3Cpath d='M24 30.5V50h11.25V30.5H24zm0-11V30h11.25V19.5H24zM35.75 30.5V50H47V30.5H35.75zm0-11V30H47V19.5H35.75zM13 50V19.5h10.75v-11H13V8h-3v11H0v30.5h10v11h36v-11H57V50H13zm23.75 11H24v-7.75h12.75V61zM10 50H0v-7.75h10V50zm0-11.25H0v-11h10v11zm47 11.25V50H46.75v-7.75H57zm0-11.25V30H46.75v-11H57z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        ></div>

        {/* Decorative circles */}
        <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-primary-blue/5"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-primary-blue/5"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced section header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center space-x-4">
              {/* Enhanced decorative element */}
              <div className="w-12 h-12 relative">
                <div className="absolute inset-0 bg-primary-blue/10 rounded-lg rotate-45"></div>
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full relative z-10"
                >
                  <g fill="none" stroke="#1A5276">
                    <polygon
                      points="50,15 65,35 85,50 65,65 50,85 35,65 15,50 35,35"
                      strokeWidth="2"
                    />
                    <circle cx="50" cy="50" r="10" strokeWidth="1" />
                  </g>
                </svg>
              </div>
              <span className="px-4 py-2 bg-primary-blue/10 text-primary-blue font-semibold text-sm rounded-full">
                PARLONS DE VOTRE AVENIR FINANCIER
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-primary-blue/80">
            Commencez Votre Parcours{" "}
            <span className="relative inline-block">
              Daret
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="6"
                viewBox="0 0 200 6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,3 C50,0 150,0 200,3"
                  stroke="#1A5276"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="text-lg text-gray-600 mt-6">
            <span className="font-semibold">
              Prêt à transformer votre façon d'épargner?
            </span>{" "}
            Notre équipe d'experts est disponible pour répondre à vos questions
            et vous guider dans la création ou la gestion de votre groupe Daret.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Enhanced Contact Form */}
          <div className="lg:col-span-3 bg-white p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary-blue/5 rounded-full"></div>
            <div className="absolute -bottom-16 -left-16 w-48 h-48 border-4 border-dashed border-primary-blue/10 rounded-full"></div>

            {/* Moroccan-inspired decorative pattern */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-blue via-primary-terracotta to-primary-blue"></div>

            {formStatus.submitted ? (
              <div className="text-center py-16 relative z-10">
                <div
                  className={`w-20 h-20 mx-auto ${
                    formStatus.error ? "bg-red-100" : "bg-green-100"
                  } rounded-full flex items-center justify-center mb-6 shadow-inner`}
                >
                  {!formStatus.error ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </div>
                {!formStatus.error && (
                  <h3 className="text-2xl font-bold text-banking-dark mb-3">
                    Merci pour votre message!
                  </h3>
                )}
                <p className="text-gray-600 text-lg max-w-md mx-auto">
                  {formStatus.message}
                </p>
                <button
                  onClick={() =>
                    setFormStatus({
                      submitted: false,
                      error: false,
                      message: "",
                    })
                  }
                  className="mt-8 px-8 py-3 bg-gradient-to-r from-primary-blue to-primary-blue/80 text-white rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-banking-dark mb-2">
                    Comment pouvons-nous vous aider?
                  </h3>
                  <p className="text-gray-600">
                    Partagez vos questions ou besoins et nous reviendrons vers
                    vous rapidement
                  </p>
                </div>

                {/* Purpose selection - New field */}
                {/* <div className="mb-8">
                  <p className="block text-sm font-medium text-gray-700 mb-3">
                    Raison de votre contact
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { id: "question", label: "Question générale" },
                      { id: "create", label: "Créer un groupe" },
                      { id: "join", label: "Rejoindre un groupe" },
                      { id: "technical", label: "Support technique" },
                      { id: "partnership", label: "Partenariat" },
                      { id: "other", label: "Autre" }
                    ].map((purpose) => (
                      <label 
                        key={purpose.id}
                        className={`flex items-center justify-center p-3 border ${
                          formData.purpose === purpose.id 
                            ? "border-primary-blue bg-primary-blue/10" 
                            : "border-gray-200 hover:border-gray-300"
                        } rounded-xl cursor-pointer transition-colors duration-200`}
                      >
                        <input 
                          type="radio" 
                          name="purpose" 
                          value={purpose.id}
                          checked={formData.purpose === purpose.id}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className={`text-sm font-medium ${
                          formData.purpose === purpose.id 
                            ? "text-primary-blue" 
                            : "text-gray-700"
                        }`}>
                          {purpose.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div> */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nom Complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue outline-none transition bg-gray-50 placeholder-gray-400"
                      placeholder="Votre nom et prénom"
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue outline-none transition bg-gray-50 placeholder-gray-400"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Numéro de téléphone (Optionnel)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <span className="text-gray-500">+212</span>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-16 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue outline-none transition bg-gray-50 placeholder-gray-400"
                      placeholder="6XX-XXXXXX"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue outline-none transition bg-gray-50 placeholder-gray-400"
                    placeholder="Partagez-nous vos besoins ou questions..."
                  ></textarea>
                </div>

                {/* <div className="mb-8">
                  <p className="block text-sm font-medium text-gray-700 mb-2">
                    Méthode de contact préférée
                  </p>
                  <div className="flex space-x-6">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === "email"}
                        onChange={handleChange}
                        className="form-radio text-primary-blue focus:ring-primary-blue h-5 w-5"
                      />
                      <span className="ml-2 text-gray-700">Email</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === "phone"}
                        onChange={handleChange}
                        className="form-radio text-primary-blue focus:ring-primary-blue h-5 w-5"
                      />
                      <span className="ml-2 text-gray-700">Téléphone</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="whatsapp"
                        checked={formData.preferredContact === "whatsapp"}
                        onChange={handleChange}
                        className="form-radio text-primary-blue focus:ring-primary-blue h-5 w-5"
                      />
                      <span className="ml-2 text-gray-700">WhatsApp</span>
                    </label>
                  </div>
                </div> */}

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="mb-4 sm:mb-0">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        Vos informations sont sécurisées et ne seront jamais
                        partagées
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-blue/80 text-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-0.5 font-medium"
                  >
                    Envoyer le message
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Enhanced Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main contact card with map background */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <div className="h-40 bg-primary-blue relative">
                {/* Stylized map background */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'url(\'data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fill-opacity="1" fill-rule="evenodd"/%3E%3C/svg%3E\')',
                    backgroundSize: "24px 24px",
                  }}
                ></div>

                {/* Map pin */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary-blue"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6">
                <h3 className="font-bold text-xl text-banking-dark mb-4 text-center">
                  Notre Bureau Principal
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start border-b border-gray-100 pb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-blue/10 rounded-full flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary-blue"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-banking-dark">Adresse</h4>
                      <p className="text-gray-600 mt-1">
                        Technopark
                        <br />
                        Bd Dammam, Casablanca
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start border-b border-gray-100 pb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-blue/10 rounded-full flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary-blue"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-banking-dark">Email</h4>
                      <a
                        href="mailto:contact@berberpay.com"
                        className="text-primary-blue hover:underline mt-1 inline-block"
                      >
                        contact@berberpay.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-blue/10 rounded-full flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary-blue"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-banking-dark">
                        Téléphone
                      </h4>
                      <div className="space-y-1 mt-1">
                        <a
                          href="tel:+212602534811"
                          className="text-primary-blue hover:underline inline-block"
                        >
                          +212 602 534 811
                        </a>
                        <p className="text-xs text-gray-500">
                          Du lundi au vendredi, de 9h à 18h
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat support */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-banking-dark">
                      Support Chat en Direct
                    </h3>
                    <p className="text-sm text-gray-600">
                      Réponse en quelques minutes
                    </p>
                  </div>
                </div>
                <div className="bg-green-100 px-2 py-1 rounded text-xs font-medium text-green-600">
                  En ligne
                </div>
              </div>
              <button className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition duration-300 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Démarrer une conversation
              </button>
            </div>
            {/* Arabic support with enhanced styling */}
            <div className="bg-gradient-to-br from-primary-blue/5 to-primary-blue/10 p-6 rounded-2xl shadow-lg relative overflow-hidden">
              {/* Decorative element - Moroccan pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231A5276' fill-opacity='0.8' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>

              <div className="flex items-center justify-between mb-4 relative z-10">
                <h3 className="font-medium text-banking-dark flex items-center">
                  <span className="mr-2">Support en Arabe</span>
                  <div className="inline-block px-2 py-0.5 bg-primary-blue/10 text-primary-blue text-xs rounded-full">
                    Disponible 24/7
                  </div>
                </h3>
                <div className="w-8 h-8">
                  <svg
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <polygon
                      points="50,15 65,35 85,50 65,65 50,85 35,65 15,50 35,35"
                      fill="none"
                      stroke="#1A5276"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3 relative z-10">
                Notre équipe propose un support complet en arabe pour votre
                confort
              </p>
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-primary-blue/10 relative z-10">
                <p className="font-arabic text-right text-base text-primary-blue font-medium leading-relaxed">
                  فريقنا متاح للإجابة على أسئلتكم باللغة العربية. لا تترددوا في
                  التواصل معنا
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Notre équipe est disponible pour répondre à vos questions en
                  arabe. N'hésitez pas à nous contacter.
                </p>
              </div>
            </div>

            {/* Social Media Contact */}
            {/* <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="font-medium text-banking-dark mb-4">Retrouvez-nous aussi sur</h3>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { name: "Facebook", icon: "M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z", color: "#4267B2" },
                  { name: "Twitter", icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z", color: "#1DA1F2" },
                  { name: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z", color: "#E1306C" },
                  { name: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", color: "#0077B5" }
                ].map((social, index) => (
                  <a 
                    href="#" 
                    key={index} 
                    className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill={social.color} 
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* Hours & Availability */}
        {/* <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"> */}
        {/* Decorative element */}
        {/* <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-blue/5 rounded-full -ml-32 -mb-32"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-banking-dark mb-2">Heures d'Ouverture & Disponibilité</h3>
              <p className="text-gray-600">Notre équipe est disponible pour vous aider pendant les heures suivantes</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}
        {/* Office Hours */}
        {/* <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-banking-dark mb-2">Bureau Physique</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lundi - Vendredi</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Samedi</span>
                    <span className="font-medium">9:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dimanche</span>
                    <span className="font-medium text-red-500">Fermé</span>
                  </div>
                </div>
              </div> */}

        {/* Phone Support */}
        {/* <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-banking-dark mb-2">Support Téléphonique</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lundi - Vendredi</span>
                    <span className="font-medium">8:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Samedi</span>
                    <span className="font-medium">9:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dimanche</span>
                    <span className="font-medium">10:00 - 15:00</span>
                  </div>
                </div>
              </div> */}

        {/* Online Chat */}
        {/* <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-banking-dark mb-2">Chat en Ligne</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lundi - Dimanche</span>
                    <span className="font-medium text-green-600">24/7</span>
                  </div>
                  <div className="bg-green-100 rounded-lg p-2 mt-2">
                    <p className="text-sm text-green-700">Support automatisé 24/7, agents disponibles aux heures de bureau</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* FAQ Teaser - Contact Related */}
        {/* <div className="mt-16 bg-gradient-to-br from-primary-blue/5 to-primary-blue/10 rounded-2xl p-8 lg:p-10 relative overflow-hidden"> */}
        {/* Decorative elements */}
        {/* <div className="absolute top-0 right-0 w-32 h-32 opacity-50 transform rotate-45">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path fill="#1A5276" d="M44.5,-75.5C59.3,-68.1,73.8,-59.2,83.1,-46.1C92.5,-32.9,96.7,-16.5,95.7,-0.6C94.8,15.3,88.7,30.6,79.6,43.9C70.5,57.2,58.5,68.4,44.5,75.3C30.6,82.2,15.3,84.8,0.2,84.5C-14.9,84.2,-29.9,81.1,-42.6,73.7C-55.3,66.4,-65.9,54.9,-72.1,41.6C-78.3,28.4,-80.2,14.2,-78.4,0.9C-76.7,-12.3,-71.2,-24.6,-64.7,-37C-58.1,-49.4,-50.4,-61.9,-39.2,-71.1C-28,-80.3,-14,-86.3,0.2,-86.6C14.3,-86.9,28.7,-81.5,44.5,-75.5Z" transform="translate(50 50)" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-banking-dark mb-4">Questions Fréquentes sur le Contact</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Trouvez rapidement des réponses aux questions les plus posées sur notre processus de contact
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: "Quel est le délai de réponse typique ?",
                  answer: "Nous répondons généralement aux emails dans les 24 heures ouvrables. Pour les demandes urgentes, le chat en direct ou l'appel téléphonique sont recommandés pour une réponse immédiate."
                },
                {
                  question: "Puis-je prendre rendez-vous pour une consultation ?",
                  answer: "Oui, vous pouvez demander un rendez-vous spécifique dans le formulaire de contact. Un membre de notre équipe vous contactera pour confirmer l'horaire selon les disponibilités."
                },
                {
                  question: "Comment puis-je recevoir une assistance en arabe ?",
                  answer: "Tous nos canaux de support sont disponibles en arabe. Il vous suffit de préciser votre préférence linguistique dans votre message ou de sélectionner l'option arabe au début d'un appel."
                },
                {
                  question: "Peut-on obtenir une démonstration de l'application ?",
                  answer: "Absolument ! Sélectionnez 'Demande de démo' comme motif de contact, et notre équipe organisera une démonstration personnalisée de l'application Daret."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="font-bold text-banking-dark mb-2">{faq.question}</h4>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <a href="#faq" className="inline-flex items-center text-primary-blue hover:text-primary-blue/80 font-medium transition duration-300">
                Voir toutes les FAQ
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div> */}

        {/* CTA Banner */}
        <div className="mt-20 bg-primary-blue rounded-2xl shadow-xl overflow-hidden relative">
          {/* Decorative patterns */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: "20px 20px",
            }}
          ></div>
          <AppDownload variant="card" />
        </div>
      </div>
    </section>
  );
}
