import React from "react";
import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      {/* Moroccan-inspired background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gray-50"></div>

        {/* Geometric patterns inspired by Moroccan zellige tilework */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 0L0 36v-36h36zm42 0L120 42V0H78zm-6 36L120 0v36H72zm42 42L120 120V78H114zM0 42v36l36-36H0zM36 120L0 84v36h36zM6 120v-42l42 42H6z' fill='%231A5276' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "120px 120px",
          }}
        ></div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-primary-blue/5"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-primary-blue/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header with enhanced styling */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
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
                    <polygon points="50,0 100,50 50,100 0,50" strokeWidth="1" />
                    <circle cx="50" cy="50" r="10" strokeWidth="1" />
                  </g>
                </svg>
              </div>
              <span className="px-4 py-2 bg-primary-blue/10 text-primary-blue font-semibold text-sm rounded-full">
                DARET TRADITIONNEL MODERNISÉ
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-blue">
            Le Cycle Financier{" "}
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
              L'innovation rencontre la tradition.
            </span>{" "}
            Découvrez comment notre application réinvente l'épargne rotative
            marocaine pour le monde numérique, offrant une solution financière
            collaborative sans intérêts ni frais cachés.
          </p>
        </div>

        {/* Enhanced Steps with animated indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <div className="relative">
              {/* Step indicator */}
              <div className="absolute -top-6 -left-6 w-24 h-24">
                <div className="absolute inset-0 bg-primary-blue rounded-full opacity-10 scale-50 group-hover:scale-100 transition-transform duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-blue/20 group-hover:text-primary-blue/30 transition-colors duration-300">
                    1
                  </span>
                </div>
              </div>

              {/* Top colored accent */}
              <div className="h-3 bg-gradient-to-r from-primary-blue to-primary-blue/80"></div>

              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue/20 to-primary-blue/5 rounded-2xl flex items-center justify-center mb-6 shadow-inner transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-primary-blue"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-banking-dark group-hover:text-primary-blue transition-colors duration-300">
                  Créez Votre Cercle
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Invitez famille, amis ou collègues à former votre cercle Daret
                  de confiance. Notre système vérifie les membres et sécurise le
                  groupe avec des contrats numériques.
                </p>

                {/* Stats */}
                <div className="bg-gray-50 -mx-8 px-8 py-4 mt-8 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-primary-blue">
                        98.7%
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        des groupes <br />
                        complètent leur cycle
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-primary-blue"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <div className="relative">
              {/* Step indicator */}
              <div className="absolute -top-6 -left-6 w-24 h-24">
                <div className="absolute inset-0 bg-primary-blue rounded-full opacity-10 scale-50 group-hover:scale-100 transition-transform duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-blue/20 group-hover:text-primary-blue/30 transition-colors duration-300">
                    2
                  </span>
                </div>
              </div>

              {/* Top colored accent */}
              <div className="h-3 bg-gradient-to-r from-primary-blue to-primary-blue/80"></div>

              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue/20 to-primary-blue/5 rounded-2xl flex items-center justify-center mb-6 shadow-inner transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-primary-blue"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-banking-dark group-hover:text-primary-blue transition-colors duration-300">
                  Définissez Vos Conditions
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Établissez ensemble le montant des contributions, la fréquence
                  des paiements et l'ordre de distribution. Notre application
                  s'adapte parfaitement à vos besoins spécifiques.
                </p>

                {/* Stats */}
                <div className="bg-gray-50 -mx-8 px-8 py-4 mt-8 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-primary-blue">
                        M
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        MAD en <br />
                        contributions mensuelles
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-primary-blue"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <div className="relative">
              {/* Step indicator */}
              <div className="absolute -top-6 -left-6 w-24 h-24">
                <div className="absolute inset-0 bg-primary-blue rounded-full opacity-10 scale-50 group-hover:scale-100 transition-transform duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-blue/20 group-hover:text-primary-blue/30 transition-colors duration-300">
                    3
                  </span>
                </div>
              </div>

              {/* Top colored accent */}
              <div className="h-3 bg-gradient-to-r from-primary-blue to-primary-blue/80"></div>

              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue/20 to-primary-blue/5 rounded-2xl flex items-center justify-center mb-6 shadow-inner transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-primary-blue"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                    />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-banking-dark group-hover:text-primary-blue transition-colors duration-300">
                  Bénéficiez du Collectif
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Recevez votre tour de financement sans intérêts ni frais
                  cachés. Notre système automatisé gère les paiements, les
                  rappels et la transparence pour tous les membres.
                </p>

                {/* Stats */}
                <div className="bg-gray-50 -mx-8 px-8 py-4 mt-8 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-primary-blue">
                        0%
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        d'intérêts <br />
                        et frais cachés
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-primary-blue"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature visualization - Enhanced with animation and Moroccan design elements */}
        <div className="mb-32 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full border-8 border-dashed border-primary-blue/10 animate-spin-slow"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full border-8 border-dashed border-primary-blue/10 animate-spin-slow"></div>

          <div className="rounded-3xl overflow-hidden bg-white shadow-2xl border border-gray-100 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: Enhanced Illustration */}
              <div className="bg-gradient-to-br from-primary-blue/5 to-primary-blue/10 p-12 lg:p-20 flex items-center justify-center relative overflow-hidden">
                {/* Moroccan-inspired decorative elements */}
                <div
                  className="absolute top-0 left-0 w-full h-full opacity-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231A5276' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                ></div>

                <div className="relative w-full max-w-md aspect-square">
                  {/* Enhanced rotating circles with Moroccan patterns */}
                  <div
                    className="absolute w-full h-full rounded-full border-2 border-primary-blue/30 animate-spin-slow"
                    style={{ animationDuration: "60s" }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-md"></div>
                    <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-md"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-md"></div>
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-md"></div>
                  </div>

                  <div
                    className="absolute w-3/4 h-3/4 top-1/8 left-1/8 rounded-full border-2 border-primary-blue/20 animate-spin-slow"
                    style={{
                      animationDuration: "40s",
                      top: "12.5%",
                      left: "12.5%",
                      animationDirection: "reverse",
                    }}
                  ></div>

                  {/* Central element with Morocco-inspired design */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center p-2">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-blue to-primary-blue/80 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">
                          Daret
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Member Nodes with enhanced styling */}
                  {[
                    {
                      position:
                        "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
                      initial: "KB",
                      active: false,
                    },
                    {
                      position:
                        "top-1/4 right-0 translate-x-1/2 -translate-y-1/2",
                      initial: "FZ",
                      active: false,
                    },
                    {
                      position:
                        "top-3/4 right-0 translate-x-1/2 -translate-y-1/2",
                      initial: "HB",
                      active: false,
                    },
                    {
                      position:
                        "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
                      initial: "SA",
                      active: false,
                    },
                    {
                      position:
                        "top-1/4 left-0 -translate-x-1/2 -translate-y-1/2",
                      initial: "LM",
                      active: true,
                    },
                    {
                      position:
                        "top-3/4 left-0 -translate-x-1/2 -translate-y-1/2",
                      initial: "YT",
                      active: false,
                    },
                  ].map((node, index) => (
                    <div
                      key={index}
                      className={`absolute ${node.position} z-20`}
                    >
                      <div className="bg-white p-2 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300">
                        <div
                          className={`w-12 h-12 ${node.active
                              ? "bg-banking-accent/20"
                              : "bg-primary-blue/20"
                            } rounded-full flex items-center justify-center relative`}
                        >
                          <span
                            className={`text-sm font-bold ${node.active
                                ? "text-banking-accent"
                                : "text-primary-blue"
                              }`}
                          >
                            {node.initial}
                          </span>

                          {/* Active indicator */}
                          {node.active && (
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                          )}
                        </div>

                        {/* Animation effect for the active node */}
                        {node.active && (
                          <div className="absolute inset-0 rounded-full border-2 border-banking-accent animate-ping"></div>
                        )}
                      </div>

                      {/* Connection line to center */}
                      <div className="absolute top-1/2 left-1/2 w-[calc(50%-16px)] h-0.5 bg-gradient-to-r from-transparent to-primary-blue/30 origin-left"></div>
                    </div>
                  ))}

                  {/* Money flow animation */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div
                      className="absolute top-1/4 left-0 w-4 h-4 bg-banking-accent rounded-full animate-flow-to-center opacity-70"
                      style={{ animationDuration: "3s", animationDelay: "0s" }}
                    ></div>
                    <div
                      className="absolute top-3/4 right-0 w-4 h-4 bg-banking-accent rounded-full animate-flow-to-center opacity-70"
                      style={{ animationDuration: "3s", animationDelay: "1s" }}
                    ></div>
                    <div
                      className="absolute bottom-0 left-1/2 w-4 h-4 bg-banking-accent rounded-full animate-flow-to-center opacity-70"
                      style={{ animationDuration: "3s", animationDelay: "2s" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Right: Features list - with enhanced styling and animations */}
              <div className="p-10 lg:p-16">
                <div className="inline-block px-4 py-1 bg-primary-blue/10 rounded-full mb-6">
                  <p className="text-primary-blue font-medium text-sm tracking-wide">
                    INNOVATIONS TECHNOLOGIQUES DARET
                  </p>
                </div>
                <h3 className="text-3xl font-bold mb-8 text-banking-dark">
                  Une tradition Ancienne,
                  <span className="text-primary-blue block mt-1">
                  Boostée par la Technologie
                  </span>
                </h3>

                <div className="space-y-8 mt-10">
                  {/* Enhanced feature items */}
                  {[
                    {
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                          />
                        </svg>
                      ),
                      title: "Confiance Communautaire Vérifiée",
                      description:
                        "Notre technologie de vérification d'identité et notation de fiabilité renforce la confiance traditionnelle qui est au cœur du Daret marocain.",
                    },
                    {
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      ),
                      title: "Finance Éthique Garantie",
                      description:
                        "Solution 100% conforme aux principes de la finance islamique avec zéro intérêt, frais transparents et contrats numériques conformes à la Charia.",
                    },
                    {
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      ),
                      title: "Discipline Financière Simplifiée",
                      description:
                        "Système de rappels intelligents, tableaux de bord personnalisés et notifications instantanées pour encourager une parfaite discipline d'épargne.",
                    },
                    {
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      ),
                      title: "Technologie Sécurisée Avancée",
                      description:
                        "Infrastructure blockchain pour contrats intelligents, paiements cryptés et traçabilité complète des transactions avec standards bancaires.",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-blue/20 to-primary-blue/5 rounded-xl flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                          {feature.icon}
                        </div>
                      </div>
                      <div className="ml-5">
                        <h4 className="text-xl font-bold text-banking-dark mb-2 group-hover:text-primary-blue transition-colors duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA for investors */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <a
                      href="#contact"
                      className="px-6 py-3 bg-gradient-to-r from-primary-blue to-primary-blue/80 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l9 6 9-6M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
                        />
                      </svg>
                      Contactez-nous
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials - Enhanced with visual elements */}
        <div id="testimonials" className="mb-32">
          {/* <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block mb-6">
              <div className="px-4 py-1 bg-primary-blue/10 text-primary-blue font-semibold text-sm rounded-full">
                TÉMOIGNAGES UTILISATEURS
              </div>
            </div>
            <h2 className="text-4xl font-bold text-banking-dark mb-6">
              Impact <span className="text-primary-blue">Réel</span>, Histoires
              Vécues
            </h2>
            <p className="text-lg text-gray-600">
              Des milliers de Marocains transforment leur avenir financier grâce
              à notre plateforme Daret innovante.
            </p>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
          {/* Enhanced testimonials with profile images and decorative elements */}
          {/* {[
              {
                name: "Fatima Benali",
                location: "Casablanca",
                role: "Enseignante",
                image: "FB",
                color: "primary-terracotta",
                quote:
                  "Daret m'a permis de financer les études universitaires de ma fille sans recourir à un prêt. La plateforme numérique garantit une transparence que notre Daret familial papier ne pouvait offrir.",
              },
              {
                name: "Youssef Tazi",
                location: "Rabat",
                role: "Entrepreneur",
                image: "YT",
                color: "primary-blue",
                quote:
                  "En tant qu'entrepreneur, j'ai pu investir 30 000 MAD dans mon affaire grâce à Daret. Le système de vérification d'identité et les contrats numériques ont rassuré tous les membres de notre groupe.",
              },
              {
                name: "Amina Kadiri",
                location: "Marrakech",
                role: "Commerçante",
                image: "AK",
                color: "primary-mint",
                quote:
                  "Notre famille utilise Daret depuis des générations, mais cette application a révolutionné notre pratique. Les notifications automatiques et la transparence des paiements ont éliminé tous les malentendus.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="relative group"> */}
          {/* Decorative elements */}
          {/* <div className="absolute top-0 right-0 w-20 h-20 -mt-6 -mr-6 text-gray-100 opacity-50 transform rotate-12 group-hover:rotate-45 transition-transform duration-300">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.5 9.33333C32.5 4.17334 36.6733 0 41.8333 0H46.5C51.66 0 55.8333 4.17334 55.8333 9.33333V16.1667H69.3333C75.1433 16.1667 80 21.0233 80 26.8333V51.6667C80 57.4767 75.1433 62.3333 69.3333 62.3333H55.8333V69.1667C55.8333 74.3267 51.66 78.5 46.5 78.5H41.8333C36.6733 78.5 32.5 74.3267 32.5 69.1667V62.3333H10.6667C4.85666 62.3333 0 57.4767 0 51.6667V26.8333C0 21.0233 4.85666 16.1667 10.6667 16.1667H32.5V9.33333Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transform group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center">
                      <div
                        className={`w-16 h-16 bg-${testimonial.color}/10 rounded-2xl flex items-center justify-center mr-4 shadow-inner`}
                      >
                        <span
                          className={`text-${testimonial.color} font-bold text-lg`}
                        >
                          {testimonial.image}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {testimonial.location} • {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="text-primary-gold">★★★★★</div>
                  </div>

                  <div className="relative">
                    <div className="absolute -top-6 -left-2 text-primary-blue/10 transform -scale-x-100">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <blockquote className="text-gray-600 leading-relaxed pl-5 border-l-4 border-primary-blue/20">
                      {testimonial.quote}
                    </blockquote>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4 text-green-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-green-600 font-medium">
                        Identité Vérifiée
                      </span>
                    </div>
                    <span className="text-sm text-gray-400">
                      Client depuis 2023
                    </span>
                  </div>
                </div>
              </div>
            ))} */}
          {/* </div> */}

          {/* Metrics bar for investors */}
          <div className="mt-16 bg-gradient-to-r from-primary-blue to-primary-blue/80 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mt-32 -mr-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -mb-32 -ml-32"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-8 text-white/90 text-center">
                Impact Croissant de Daret au Maroc
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    metric: "0+",
                    label: "Utilisateurs Actifs",
                    growth: "+126% cette année",
                  },
                  {
                    metric: "0 MAD",
                    label: "Fonds Circulant",
                    growth: "+88% cette année",
                  },
                  {
                    metric: "0+",
                    label: "Groupes Daret",
                    growth: "+105% cette année",
                  },
                  {
                    metric: "0%",
                    label: "Taux de Complétion",
                    growth: "Performance Exceptionnelle",
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold mb-1">{item.metric}</div>
                    <div className="text-white/80 mb-2">{item.label}</div>
                    <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs backdrop-blur-sm">
                      {item.growth}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ - Enhanced with modern styling and interactive elements */}
        <div className="relative mb-20">
          {/* Decorative elements */}
          <div className="absolute -top-10 right-10 w-32 h-32 rounded-full bg-primary-blue/5"></div>
          <div className="absolute -bottom-10 left-10 w-32 h-32 rounded-full bg-primary-blue/5"></div>

          <div className="bg-white rounded-3xl p-10 lg:p-16 shadow-xl border border-gray-100 relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-block mb-6">
                <div className="px-4 py-1 bg-primary-blue/10 text-primary-blue font-semibold text-sm rounded-full">
                  QUESTIONS FRÉQUENTES
                </div>
              </div>
              <h2 className="text-4xl font-bold text-banking-dark mb-6">
                Tout Ce Que Vous Devez Savoir Sur{" "}
                <span className="text-primary-blue">Daret</span>
              </h2>
              <p className="text-lg text-gray-600">
                Notre approche moderne du système traditionnel marocain
                d'épargne rotative, expliquée en détail.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {/* Enhanced FAQ items with interactive hover */}
              {[
                {
                  question: "Qu'est-ce que Daret et comment ça fonctionne ?",
                  answer:
                    "Daret est un système d'épargne rotative traditionnel marocain où un groupe de personnes contribue régulièrement à un pot commun, chaque membre recevant la totalité du montant collecté à tour de rôle. Notre application numérise et sécurise ce processus tout en préservant son essence communautaire.",
                },
                {
                  question:
                    "Daret est-il conforme aux principes de la finance islamique ?",
                  answer:
                    "Absolument. Daret est 100% conforme à la Charia car il n'implique aucun intérêt (riba) et repose sur l'entraide communautaire. Notre plateforme a été validée par des experts en finance islamique et intègre des contrats numériques conformes à ces principes.",
                },
                {
                  question:
                    "Comment l'application sécurise-t-elle mon argent ?",
                  answer:
                    "Notre application utilise un système de paiement sécurisé au standard bancaire, une vérification d'identité à plusieurs niveaux, des contrats numériques légalement contraignants, et une transparence totale des transactions grâce à une technologie bien adaptée.",
                },
                {
                  question:
                    "Combien de personnes peuvent rejoindre un groupe Daret ?",
                  answer:
                    "Notre plateforme supporte des groupes de 2 à 9 membres. La taille idéale se situe entre 4 et 6 personnes pour maintenir une cohésion de groupe tout en permettant des cycles de rotation raisonnables.",
                },
                {
                  question:
                    "Comment l'ordre de réception des fonds est-il déterminé ?",
                  answer:
                    "L'application offre trois options : tirage au sort automatique, priorité basée sur les besoins (vote du groupe), ou ordre prédéterminé fixé au démarrage. Chaque méthode est entièrement transparente et documentée pour tous les membres.",
                },
                {
                  question:
                    "Que se passe-t-il si un membre cesse de contribuer ?",
                  answer:
                    "Notre système comprend des protections comme les dépôts de garantie, l'historique de fiabilité, et des contrats exécutoires. Dans le cas improbable d'un défaut de paiement, notre fonds de garantie protège les autres membres, et notre équipe juridique prend en charge le recouvrement.",
                },
              ].map((faq, index) => (
                <div key={index} className="group">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-primary-blue/10 flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                        <span className="font-bold text-sm">{index + 1}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-banking-dark mb-3 group-hover:text-primary-blue transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional questions CTA */}
            <div className="mt-16 text-center">
              <p className="text-gray-600 mb-6">
                Vous avez d'autres questions sur Daret? Notre équipe est là pour
                vous aider.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-blue to-primary-blue/80 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>
                Contactez-nous
              </a>
            </div>
          </div>
        </div>

        {/* Investment opportunity section - Added specifically for investors */}
        <div
          id="investment"
          className="rounded-3xl bg-gradient-to-r from-primary-blue to-primary-blue/80 text-white p-10 lg:p-16 shadow-xl relative overflow-hidden mb-10"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -mt-24 -mr-24"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border-2 border-dashed border-white/20"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Investissez dans l'Avenir de la Finance Communautaire
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Rejoignez-nous dans la modernisation d'une tradition financière
              millénaire, avec un marché potentiel de 20 millions d'utilisateurs
              au Maroc et au-delà.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { metric: "0%", label: "ROI Annuel", icon: "chart-up" },
                {
                  metric: "0M MAD",
                  label: "Levée de fonds ciblée",
                  icon: "money",
                },
                { metric: "2026", label: "Expansion MENA", icon: "globe" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                >
                  <div className="text-3xl font-bold mb-1">{item.metric}</div>
                  <div className="text-white/80">{item.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#investor-deck"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-blue font-bold rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                />
              </svg>
              Télécharger notre Deck Investisseur
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
