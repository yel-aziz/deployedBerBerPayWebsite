import React from "react";

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-0 overflow-hidden ">
      {/* Moroccan-inspired background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 to-white"></div>

        {/* Geometric patterns inspired by Moroccan zellige tilework */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M29.75 0L0 29.75V0h29.75zm0.5 0l29.75 29.75V0H30.25zM0 30.25l29.75 29.75H0V30.25zm60 0L30.25 60H60V30.25z' fill='%231A5276' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "120px 120px",
          }}
        ></div>

        {/* Decorative Moroccan arch shapes */}
        <div className="absolute -top-32 -right-32 w-96 h-96 opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#1A5276"
              d="M44.5,-75.5C59.3,-68.1,73.8,-59.2,83.1,-46.1C92.5,-32.9,96.7,-16.5,95.7,-0.6C94.8,15.3,88.7,30.6,79.6,43.9C70.5,57.2,58.5,68.4,44.5,75.3C30.6,82.2,15.3,84.8,0.2,84.5C-14.9,84.2,-29.9,81.1,-42.6,73.7C-55.3,66.4,-65.9,54.9,-72.1,41.6C-78.3,28.4,-80.2,14.2,-78.4,0.9C-76.7,-12.3,-71.2,-24.6,-64.7,-37C-58.1,-49.4,-50.4,-61.9,-39.2,-71.1C-28,-80.3,-14,-86.3,0.2,-86.6C14.3,-86.9,28.7,-81.5,44.5,-75.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-20"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center min-h-screen">
          {/* Left Column - Content */}
          <div className="md:col-span-6 px-8 py-12 md:py-0 relative z-10">
            {/* Authentic Moroccan decorative element */}
            <div className="mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-14 h-14">
                  <svg
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <g fill="#1A5276">
                      <path
                        d="M50,0 L100,50 L50,100 L0,50 Z"
                        fillOpacity="0.2"
                      />
                      <path
                        d="M50,10 L90,50 L50,90 L10,50 Z"
                        fillOpacity="0.4"
                      />
                      <path
                        d="M50,20 L80,50 L50,80 L20,50 Z"
                        fillOpacity="0.6"
                      />
                      <path
                        d="M50,30 L70,50 L50,70 L30,50 Z"
                        fillOpacity="0.8"
                      />
                      <circle cx="50" cy="50" r="10" fillOpacity="1" />
                    </g>
                  </svg>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-primary-blue to-transparent"></div>
              </div>
            </div>

            {/* Headline & Subheadline */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-primary-blue/10 rounded-full">
                <p className="text-primary-blue font-medium text-sm">
                  Révolution Financière Marocaine
                </p>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-banking-dark">
                <span className="text-primary-blue inline">Daret </span>
                <span>
                  l'Épargne Réinventée
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
              </h1>

              <p className="text-lg text-gray-600 max-w-lg">
                <span className="font-semibold">
                  Une tradition transformée par la technologie.
                </span>{" "}
                Notre application modernise l'épargne rotative "Daret" en toute
                sécurité, permettant aux communautés marocaines de prospérer
                ensemble.
              </p>

              {/* Trust elements with culturally relevant icons */}
              <div className="grid grid-cols-2 gap-6 my-8">
                <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue/70 rounded-xl shadow-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-banking-dark">
                      Sécurité Bancaire
                    </h3>
                    <p className="text-sm text-gray-600">
                      Protection des fonds avec standards bancaires
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue/70 rounded-xl shadow-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-banking-dark">
                      Force Communautaire
                    </h3>
                    <p className="text-sm text-gray-600">
                      Unir les traditions avec la technologie
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue/70 rounded-xl shadow-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-banking-dark">
                      Sans Intérêts
                    </h3>
                    <p className="text-sm text-gray-600">
                      Conforme aux principes financiers éthiques
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue/70 rounded-xl shadow-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-banking-dark">
                      Transparence Totale
                    </h3>
                    <p className="text-sm text-gray-600">
                      Suivi en temps réel de chaque dirham
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-blue/80 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-0.5 text-center"
                >
                  Contactez-nous
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-white border-2 border-primary-blue text-primary-blue font-medium rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-0.5 text-center"
                >
                  Demander une Démo
                </a>
              </div>

              {/* Arabic Tagline with beautiful typography */}
              <div className="mt-10 border-t border-gray-200 pt-6">
                <p className="text-right font-arabic text-lg text-primary-blue">
                  دارت - قوة المجتمع في الادخار
                  <span className="text-xs text-gray-500 block mt-1">
                    La force de la communauté dans l'épargne
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Circular Flow Visualization */}
          <div className="md:col-span-6 relative h-full block">
            {/* Decorative elements */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border-8 border-dashed border-primary-blue/20 animate-spin-slow"></div>
            <div className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full bg-primary-terracotta/10"></div>
            <div className="absolute top-1/2 right-0 w-24 h-24 rounded-full bg-primary-gold/10"></div>

            {/* Improved Daret Flow Visualization */}
            <div className="flex items-center justify-center h-full py-12">
              <div className="relative w-96 h-96">
                {/* Outer rotating circle */}
                <div
                  className="absolute w-full h-full rounded-full border-2 border-primary-blue/30 animate-spin-slow"
                  style={{ animationDuration: "60s" }}
                >
                  {/* Month markers on rotating circle - positioned with exact calculations */}
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
                    const angle = index * 45 * (Math.PI / 180);
                    const radius = 48; // % of container
                    const x = 50 + radius * Math.cos(angle);
                    const y = 50 + radius * Math.sin(angle);
                    return (
                      <div
                        key={index}
                        className="absolute bg-white rounded-full shadow-md flex items-center justify-center w-8 h-8 text-xs font-medium text-primary-blue"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        {index === 0 ? "DÉBUT" : `M${index}`}
                      </div>
                    );
                  })}
                </div>

                {/* Participant nodes - with precise positioning */}
                {[
                  { angle: 0, initial: "KB", active: false, label: "Karim" },
                  { angle: 60, initial: "FZ", active: false, label: "Fatima" },
                  { angle: 120, initial: "HB", active: false, label: "Hassan" },
                  { angle: 180, initial: "SA", active: false, label: "Sara" },
                  { angle: 240, initial: "LM", active: true, label: "Leila" },
                  {
                    angle: 300,
                    initial: "YT",
                    active: false,
                    label: "Youssef",
                  },
                ].map((node, index) => {
                  const radians = node.angle * (Math.PI / 180);
                  const radius = 35; // % of container
                  const x = 50 + radius * Math.cos(radians);
                  const y = 50 + radius * Math.sin(radians);

                  return (
                    <div
                      key={index}
                      className="absolute z-20"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="bg-white p-1.5 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300">
                        <div
                          className={`w-12 h-12 ${node.active ? "bg-green-100" : "bg-primary-blue/10"
                            } rounded-full flex items-center justify-center relative`}
                        >
                          <span
                            className={`text-sm font-bold ${node.active
                                ? "text-green-600"
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

                        <div className="absolute mt-1 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 whitespace-nowrap">
                          {node.label}
                          {node.active && (
                            <span className="text-green-600 ml-1">(Actif)</span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Center element - improved with more visual meaning */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-white rounded-full shadow-xl flex items-center justify-center p-2 z-30">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-blue to-primary-blue/80 flex flex-col items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        Daret
                      </span>
                      <span className="text-white/80 mt-1">Tour 5/8</span>
                      <span className="text-xl font-bold text-white mt-1">
                        5000 <span className="text-sm">MAD</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Connection lines between participants and center */}
                <svg
                  className="absolute inset-0 w-full h-full z-10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient
                      id="centerGlow"
                      cx="50%"
                      cy="50%"
                      r="50%"
                      fx="50%"
                      fy="50%"
                    >
                      <stop offset="0%" stopColor="#1A5276" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#1A5276" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Center glow effect */}
                  <circle cx="50%" cy="50%" r="18%" fill="url(#centerGlow)" />

                  {/* Connection lines */}
                  {[0, 60, 120, 180, 240, 300].map((angle, index) => {
                    const radians = angle * (Math.PI / 180);
                    const innerRadius = 18; // % for center
                    const outerRadius = 35; // % for participants
                    const centerX = 50;
                    const centerY = 50;

                    const startX = centerX + innerRadius * Math.cos(radians);
                    const startY = centerY + innerRadius * Math.sin(radians);
                    const endX = centerX + outerRadius * Math.cos(radians);
                    const endY = centerY + outerRadius * Math.sin(radians);

                    // For the active node (index 4 = 240 degrees/Leila)
                    if (index === 4) {
                      return (
                        <g key={index}>
                          <path
                            d={`M${startX}%,${startY}% L${endX}%,${endY}%`}
                            stroke="#10B981"
                            strokeWidth="3"
                            strokeDasharray={index === 4 ? "0" : "5,5"}
                          />
                          {/* Animated dots along the active path */}
                          <circle
                            cx={`${startX + (endX - startX) * 0.25}%`}
                            cy={`${startY + (endY - startY) * 0.25}%`}
                            r="3"
                            fill="#10B981"
                            className="animate-ping"
                            style={{
                              animationDuration: "1.5s",
                              animationDelay: "0s",
                            }}
                          />
                          <circle
                            cx={`${startX + (endX - startX) * 0.5}%`}
                            cy={`${startY + (endY - startY) * 0.5}%`}
                            r="3"
                            fill="#10B981"
                            className="animate-ping"
                            style={{
                              animationDuration: "1.5s",
                              animationDelay: "0.5s",
                            }}
                          />
                          <circle
                            cx={`${startX + (endX - startX) * 0.75}%`}
                            cy={`${startY + (endY - startY) * 0.75}%`}
                            r="3"
                            fill="#10B981"
                            className="animate-ping"
                            style={{
                              animationDuration: "1.5s",
                              animationDelay: "1s",
                            }}
                          />
                        </g>
                      );
                    }

                    // For all other nodes
                    return (
                      <g key={index}>
                        <path
                          d={`M${startX}%,${startY}% L${endX}%,${endY}%`}
                          stroke="#1A5276"
                          strokeOpacity="0.3"
                          strokeWidth="1.5"
                          strokeDasharray="5,5"
                        />
                        {/* Contribution flow arrows - only for non-active participants */}
                        <circle
                          cx={`${endX - (endX - startX) * 0.3}%`}
                          cy={`${endY - (endY - startY) * 0.3}%`}
                          r="2"
                          fill="#1A5276"
                          className="animate-ping"
                          style={{
                            animationDuration: "3s",
                            animationDelay: `${index * 0.5}s`,
                            opacity: "0.6",
                          }}
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* Stats panel - improved with visual design and clarity */}
                <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-lg py-4 px-6 z-40 hidden md:flex w-full justify-between border border-gray-100 z-50">
                  <div className="text-center">
                    <div className="w-8 h-8 mx-auto bg-primary-blue/10 rounded-full flex items-center justify-center mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-primary-blue"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-500">PARTICIPANTS</p>
                    <p className="text-xl font-bold text-primary-blue">8</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-green-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-500">TOUR ACTUEL</p>
                    <p className="text-xl font-bold text-green-600">5/8</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 mx-auto bg-primary-blue/10 rounded-full flex items-center justify-center mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-primary-blue"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-xl font-bold text-primary-blue">
                      40,000<span className="text-xs ml-1">MAD</span>
                    </p>
                  </div>
                </div>

                {/* Explainer text */}
                <div className="hidden xl:block absolute -right-24 top-1/4 transform rotate-6 bg-white p-3 rounded-lg shadow-md border-l-4 border-primary-blue z-40 w-48">
                  <p className="text-xs text-gray-600">
                    <span className="font-medium text-primary-blue">
                      Comment ça marche:
                    </span>{" "}
                    Chaque membre contribue mensuellement et reçoit tour à tour
                    le montant total collecté.
                  </p>
                </div>

                {/* Additional explanatory label for active user */}
                <div className="hidden md:block absolute -left-12 top-1/2 transform -translate-y-1/2 bg-green-50 p-3 rounded-lg shadow-md border-l-4 border-green-500 z-40 w-48">
                  <p className="text-xs text-gray-600">
                    <span className="font-medium text-green-600">
                      Bénéficiaire actuel:
                    </span>{" "}
                    Leila reçoit 5000 MAD ce mois-ci du fonds commun.
                  </p>
                </div>
              </div>
            </div>

            {/* Badge for credibility */}
            <div className="absolute bottom-24 right-0 transform rotate-6 z-30">
              <div className="bg-white rounded-2xl shadow-xl p-3 border-2 border-primary-gold/50">
                <div className="flex items-center space-x-2">
                  <div className="text-primary-gold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold">Conforme aux normes</p>
                    <p className="text-xs text-gray-500">Bank Al-Maghrib</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional badge for Islamic finance */}
            <div className="absolute top-20 right-10 transform -rotate-6 z-30">
              <div className="bg-white rounded-2xl shadow-lg p-3 border-l-4 border-primary-mint">
                <div className="flex items-center space-x-2">
                  <div className="text-primary-mint">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                      <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                      <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold">Finance Islamique</p>
                    <p className="text-xs text-gray-500">Sans intérêt (Riba)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,1,321.39,56.44Z"
            fill="#f9fafb"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
