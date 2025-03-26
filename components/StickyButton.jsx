"use client";

import { useState } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/supabase/client";

// Create a reusable AppDownloadForm component
export function AppDownloadForm({ isOpen, onClose, formTitle }) {
  const supabase = createClient();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await supabase
      .from("user")
      .insert([
        {
          name: formData.fullName,
          email: formData.email,
          number: formData.phone,
        },
      ])
      .select();

    // Show thank you message
    setIsSubmitted(true);

    // Optional: Reset form data
    setFormData({
      fullName: "",
      email: "",
      phone: "",
    });

    // Optional: Close the form after a delay
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90%] sm:max-w-[500px] p-0 overflow-hidden rounded-xl">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
          >
            <X className="h-5 w-5" />
          </button>

          {!isSubmitted ? (
            <div className="p-6">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  Inscrivez-vous à notre liste d'attente
                </DialogTitle>
                <DialogDescription className="text-base mt-2">
                  Partagez vos informations et soyez les premiers à être
                  informés lorsque l'application sera prête
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nom Complet</Label>
                  <Input
                    id="fullName"
                    placeholder="Votre nom et prénom"
                    className="w-full"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre.email@exemple.com"
                    className="w-full"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Numéro de téléphone (Optionnel)</Label>
                  <div className="flex">
                    <div className="bg-gray-50 border border-r-0 rounded-l-md px-3 flex items-center text-gray-500">
                      +212
                    </div>
                    <Input
                      id="phone"
                      placeholder="6XX-XXXXXX"
                      className="rounded-l-none w-full"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
                  <div className="bg-green-50 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <span>
                    Vos informations sont sécurisées et ne seront jamais
                    partagées
                  </span>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-primary-blue hover:bg-primary-blue/90 text-white py-6"
                  >
                    S'inscrire maintenant
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="p-6 flex flex-col items-center justify-center text-center py-12">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <DialogTitle className="text-2xl font-bold text-center">
                Merci pour votre inscription!
              </DialogTitle>
              <DialogDescription className="text-base mt-4 max-w-md">
                Merci pour votre inscription ! Vous faites désormais partie de
                notre liste d'attente et serez informé(e) en avant-première
              </DialogDescription>
              <Button
                className="mt-6 bg-primary-blue hover:bg-primary-blue/90 text-white"
                onClick={onClose}
              >
                Fermer
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Main component that can be used in various places
export default function AppDownload({ variant = "banner" }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const openForm = (store) => {
    setFormTitle(store);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  // Banner variant (fixed at bottom)
  if (variant === "banner") {
    return (
      <>
        <div className="fixed bottom-0 left-0 right-0 z-40 py-3 px-4 bg-white border-t shadow-lg">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {/* <Download className="h-5 w-5 text-primary-blue" /> */}
                <p className="font-medium text-center">
                  Obtenez l'application Daret pour vivre la meilleure expérience
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => openForm("App Store")}
                  className="flex items-center justify-center gap-2 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path d="M19.665,16.811c-0.287,0.664-0.627,1.275-1.021,1.837c-0.537,0.767-0.978,1.297-1.316,1.592 c-0.525,0.482-1.089,0.73-1.692,0.744c-0.432,0-0.954-0.123-1.562-0.373c-0.61-0.249-1.17-0.371-1.683-0.371 c-0.537,0-1.113,0.122-1.73,0.371c-0.616,0.25-1.114,0.381-1.495,0.393c-0.577,0.025-1.154-0.229-1.729-0.764 c-0.367-0.32-0.826-0.87-1.377-1.648c-0.59-0.829-1.075-1.794-1.455-2.891c-0.407-1.187-0.611-2.335-0.611-3.447 c0-1.273,0.275-2.372,0.826-3.292c0.434-0.74,1.01-1.323,1.73-1.751C7.271,6.782,8.051,6.563,8.89,6.549 c0.46,0,1.063,0.142,1.81,0.422s1.227,0.422,1.436,0.422c0.158,0,0.689-0.167,1.593-0.498c0.853-0.307,1.573-0.434,2.163-0.384 c1.6,0.129,2.801,0.759,3.6,1.895c-1.43,0.867-2.137,2.08-2.123,3.637c0.012,1.213,0.453,2.222,1.317,3.023 c0.392,0.372,0.829,0.659,1.315,0.863C19.895,16.236,19.783,16.529,19.665,16.811L19.665,16.811z M15.998,2.38 c0,0.95-0.348,1.838-1.039,2.659c-0.836,0.976-1.846,1.541-2.941,1.452c-0.014-0.114-0.021-0.234-0.021-0.36 c0-0.913,0.396-1.889,1.103-2.688c0.352-0.404,0.8-0.741,1.343-1.009c0.542-0.264,1.054-0.41,1.536-0.435 C15.992,2.127,15.998,2.254,15.998,2.38L15.998,2.38z" />
                  </svg>
                  <span>App Store</span>
                </button>

                <button
                  onClick={() => openForm("Google Play")}
                  className="flex items-center justify-center gap-2 bg-primary-blue text-white px-5 py-2 rounded-lg hover:bg-primary-blue/90 transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                  <span>Google Play</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <AppDownloadForm
          isOpen={isFormOpen}
          onClose={closeForm}
          formTitle={formTitle}
        />
      </>
    );
  } else if (variant === "card") {
    return (
      <>
        <div className="lg:flex items-center">
          <div className="lg:w-2/3 p-10 lg:p-16 relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Prêt à rejoindre la révolution financière Daret ?
            </h3>
            <p className="text-white/80 text-lg mb-8">
              Créez ou rejoignez un groupe Daret dès aujourd'hui et découvrez
              une nouvelle façon d'épargner collectivement.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="px-8 py-4 bg-white text-primary-blue font-bold rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center"
                onClick={(e) => {
                  e.preventDefault();
                  openForm("None");
                }}
              >
                Télécharger l'application
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border border-white/30 font-medium rounded-xl shadow-lg hover:bg-white/30 transition duration-300 text-center"
              >
                Nous contacter
              </a>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/3 relative h-full">
            <div className="absolute inset-0 overflow-hidden">
              {/* Stylized app image or illustration could go here */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">Daret</div>
                  <div className="text-sm font-light">L'épargne réinventée</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AppDownloadForm
          isOpen={isFormOpen}
          onClose={closeForm}
          formTitle={formTitle}
        />
      </>
    );
  }
  return (
    <>
      <div className="space-y-3 mt-6">
        <h4 className="text-sm font-medium text-white/80">
          Téléchargez notre application
        </h4>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              openForm("App Store");
            }}
            className="flex items-center bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 rounded-xl py-2 px-4 transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="currentColor"
            >
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            <div className="text-left">
              <div className="text-xs">Télécharger sur</div>
              <div className="text-sm font-medium">App Store</div>
            </div>
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              openForm("Google Play");
            }}
            className="flex items-center bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 rounded-xl py-2 px-4 transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
            </svg>
            <div className="text-left">
              <div className="text-xs">Disponible sur</div>
              <div className="text-sm font-medium">Google Play</div>
            </div>
          </a>
        </div>
      </div>

      <AppDownloadForm
        isOpen={isFormOpen}
        onClose={closeForm}
        formTitle={formTitle}
      />
    </>
  );
}
