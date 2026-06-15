"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import Link from "next/link";
import { getTemplate, getCategoryName, getSubcategoryName } from "@/data/site";
import { Icon } from "@/components/Icons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useSearchParams } from "next/navigation";

// Add-ons configuration
const ADDONS_CONFIG = [
  {
    id: "maintenance",
    title: "Website maintenance",
    description: "Content updates, speed fixes, security monitoring & backups every month",
    icon: "building", // fallback icon
    monthlyPrice: 150,
    yearlyPrice: 1200,
    savings: 600,
  },
];

// Public browser-side keys. Configure these in the deployment environment.
const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY;

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

// Helper function to upload image file to ImgBB client-side
const uploadToImgBB = async (file) => {
  if (!IMGBB_API_KEY) {
    throw new Error("Image upload is not configured");
  }

  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  if (data.success) {
    return data.data.url; // Direct image URL
  } else {
    throw new Error(data.error?.message || "Upload failed");
  }
};

// Helper to load Razorpay checkout script dynamically on the client
const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (typeof window !== "undefined" && window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export default function LaunchPage() {
  return (
    <Suspense fallback={
      <>
        <Header />
        <div style={{ background: "#fbfaf7", color: "var(--text-1)", minHeight: "calc(100dvh - 78px)", padding: "24px 16px", display: "grid", placeItems: "center" }}>
          <p style={{ color: "var(--text-3)", fontSize: "1rem", fontWeight: 500 }}>Loading details...</p>
        </div>
        <Footer />
      </>
    }>
      <LaunchContent />
    </Suspense>
  );
}

function LaunchContent() {
  const searchParams = useSearchParams();
  // Read template from search params safely
  const templateId = searchParams.get("template") || "clinic-doctor-clinic-classic";
  const template = getTemplate(templateId);

  // Customization parameters from preview page
  const customAccent = searchParams.get("accent") || template?.accent || "";
  const customFont = searchParams.get("font") || template?.font || "";
  const customCorner = searchParams.get("corner") || "Round";
  const customLanguage = searchParams.get("language") || "English";

  const customThemeColors = {
    bg: searchParams.get("themeBg") || template?.theme?.bg || "",
    soft: searchParams.get("themeSoft") || template?.theme?.soft || "",
    secondary: searchParams.get("themeSecondary") || template?.theme?.panel || "",
    panel: searchParams.get("themePanel") || template?.theme?.panel || "",
    ink: searchParams.get("themeInk") || template?.theme?.ink || "",
    muted: searchParams.get("themeMuted") || template?.theme?.muted || "",
  };

  const customThemeQuery = `themeBg=${encodeURIComponent(customThemeColors.bg)}&themeSoft=${encodeURIComponent(customThemeColors.soft)}&themeSecondary=${encodeURIComponent(customThemeColors.secondary)}&themePanel=${encodeURIComponent(customThemeColors.panel)}&themeInk=${encodeURIComponent(customThemeColors.ink)}&themeMuted=${encodeURIComponent(customThemeColors.muted)}`;
  const customPreviewQuery = `accent=${encodeURIComponent(customAccent)}&font=${encodeURIComponent(customFont)}&corner=${encodeURIComponent(customCorner)}&language=${encodeURIComponent(customLanguage)}&${customThemeQuery}`;
  const iframeSrc = `/template-preview/${template?.id}?view=canvas&${customPreviewQuery}`;
  const templatePreviewUrl =
    typeof window !== "undefined" ? `${window.location.origin}${iframeSrc}` : iframeSrc;

  // States
  const [step, setStep] = useState(2); // Start at step 2 (Details) since template is already selected
  const [businessName, setBusinessName] = useState("");
  const [yourName, setYourName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [details, setDetails] = useState("");

  // Razorpay States
  const [razorpayPaymentId, setRazorpayPaymentId] = useState("");
  const [razorpayOrderId, setRazorpayOrderId] = useState("");
  const [isPaying, setIsPaying] = useState(false);

  // Upload States
  const [logoName, setLogoName] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [isUploadingLogo, setIsUploadingLogo] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const [imagesList, setImagesList] = useState([]);
  const [imagesUrls, setImagesUrls] = useState([]);
  const [isUploadingImages, setIsUploadingImages] = useState(false);

  const [screenshotUrl, setScreenshotUrl] = useState("");
  const [isCapturingScreenshot, setIsCapturingScreenshot] = useState(false);
  const [templateScreenshotUrl, setTemplateScreenshotUrl] = useState("");
  const [isCapturingTemplate, setIsCapturingTemplate] = useState(false);
  
  const isCapturing = isCapturingScreenshot || isCapturingTemplate;

  // Selected Add-ons state
  // Format: { [addonId]: { selected: boolean, billing: 'monthly' | 'yearly' } }
  const [addons, setAddons] = useState({
    maintenance: { selected: true, billing: "monthly" },
  });

  const [loaded, setLoaded] = useState(false);

  // Helper to clear localStorage
  const clearLaunchData = () => {
    if (typeof window === "undefined") return;
    try {
      localStorage.removeItem("launch_step");
      localStorage.removeItem("launch_businessName");
      localStorage.removeItem("launch_yourName");
      localStorage.removeItem("launch_phone");
      localStorage.removeItem("launch_email");
      localStorage.removeItem("launch_address");
      localStorage.removeItem("launch_details");
      localStorage.removeItem("launch_logoName");
      localStorage.removeItem("launch_logoUrl");
      localStorage.removeItem("launch_imagesList");
      localStorage.removeItem("launch_imagesUrls");
      localStorage.removeItem("launch_addons");
      localStorage.removeItem("launch_templateId");
      
      sessionStorage.removeItem("launch_session_active");
    } catch (e) {
      console.error("Error clearing localStorage:", e);
    }
  };

  // Helper to reset states
  const resetFormStates = () => {
    setStep(2);
    setBusinessName("");
    setYourName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setDetails("");
    setLogoName("");
    setLogoUrl("");
    setLogoError(false);
    setImagesList([]);
    setImagesUrls([]);
    setScreenshotUrl("");
    setIsCapturingScreenshot(false);
    setTemplateScreenshotUrl("");
    setIsCapturingTemplate(false);
    setRazorpayPaymentId("");
    setRazorpayOrderId("");
    setIsPaying(false);
    setAddons({
      maintenance: { selected: true, billing: "monthly" },
    });
  };

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const currentQueryTemplate = templateId;
      const savedTemplateId = localStorage.getItem("launch_templateId");
      const isSessionActive = sessionStorage.getItem("launch_session_active") === "true";

      if (savedTemplateId && currentQueryTemplate !== savedTemplateId) {
        // Different template selected! Clear all states and store new template ID
        clearLaunchData();
        localStorage.setItem("launch_templateId", currentQueryTemplate);
        sessionStorage.setItem("launch_session_active", "true");
        setStep(2); // Start fresh at step 2
      } else {
        // Same template. 
        if (currentQueryTemplate) {
          localStorage.setItem("launch_templateId", currentQueryTemplate);
        }
        
        // Load details
        const savedBusiness = localStorage.getItem("launch_businessName");
        if (savedBusiness) setBusinessName(savedBusiness);

        const savedYourName = localStorage.getItem("launch_yourName");
        if (savedYourName) setYourName(savedYourName);

        const savedPhone = localStorage.getItem("launch_phone");
        if (savedPhone) setPhone(savedPhone);

        const savedEmail = localStorage.getItem("launch_email");
        if (savedEmail) setEmail(savedEmail);

        const savedAddress = localStorage.getItem("launch_address");
        if (savedAddress) setAddress(savedAddress);

        const savedDetails = localStorage.getItem("launch_details");
        if (savedDetails) setDetails(savedDetails);

        const savedLogoName = localStorage.getItem("launch_logoName");
        if (savedLogoName) setLogoName(savedLogoName);

        const savedLogoUrl = localStorage.getItem("launch_logoUrl");
        if (savedLogoUrl) setLogoUrl(savedLogoUrl);

        const savedImages = localStorage.getItem("launch_imagesList");
        if (savedImages) setImagesList(JSON.parse(savedImages));

        const savedImagesUrls = localStorage.getItem("launch_imagesUrls");
        if (savedImagesUrls) setImagesUrls(JSON.parse(savedImagesUrls));

        const savedAddons = localStorage.getItem("launch_addons");
        if (savedAddons) setAddons(JSON.parse(savedAddons));

        // Restore step if they are in an active session (e.g. refreshed the page)
        if (isSessionActive) {
          const savedStep = localStorage.getItem("launch_step");
          if (savedStep) setStep(Number(savedStep));
        } else {
          // Fresh visit to /launch. Reset step to 2 and mark session active
          setStep(2);
          sessionStorage.setItem("launch_session_active", "true");
        }
      }
    } catch (e) {
      console.error("Failed to load from localStorage:", e);
    }
    setLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle runtime template change (when query param changes without unmounting)
  useEffect(() => {
    if (!loaded) return;
    const savedTemplateId = localStorage.getItem("launch_templateId");
    if (templateId && savedTemplateId && templateId !== savedTemplateId) {
      clearLaunchData();
      resetFormStates();
      localStorage.setItem("launch_templateId", templateId);
    } else if (templateId) {
      localStorage.setItem("launch_templateId", templateId);
    }
  }, [templateId, loaded]);

  // Cleanup on navigating away from the page
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") {
        const path = window.location.pathname;
        if (path !== "/launch" && path !== "/launch/") {
          clearLaunchData();
        }
      }
    };
  }, []);

  // Capture receipt screenshot and template screenshot dynamically on step 4
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (step === 4 && (!screenshotUrl || !templateScreenshotUrl) && !isCapturingScreenshot && !isCapturingTemplate) {
      const timer = setTimeout(async () => {
        const html2canvas = (await import("html2canvas")).default;

        const getBlobFromCanvas = (canvas) => {
          return new Promise((resolve) => {
            canvas.toBlob(resolve, "image/png");
          });
        };

        // Set capturing states immediately to prevent click conflicts
        if (!screenshotUrl) setIsCapturingScreenshot(true);
        if (!templateScreenshotUrl) setIsCapturingTemplate(true);

        // 1. Capture Receipt page screenshot
        if (!screenshotUrl) {
          try {
            const element = document.querySelector(".launch-container") || document.body;
            const canvas = await html2canvas(element, {
              useCORS: true,
              scale: 1.2,
              backgroundColor: "#fcfbfa"
            });
            const blob = await getBlobFromCanvas(canvas);
            if (blob) {
              const file = new File([blob], `receipt_${Date.now()}.png`, { type: "image/png" });
              const url = await uploadToImgBB(file);
              setScreenshotUrl(url);
            }
          } catch (e) {
            console.error("Failed to capture receipt screenshot:", e);
          } finally {
            setIsCapturingScreenshot(false);
          }
        }

        // 2. Capture Full Template screenshot from iframe
        if (!templateScreenshotUrl) {
          try {
            const iframe = document.getElementById("template-preview-iframe");
            if (iframe) {
              // Wait for iframe document load to complete
              await new Promise((resolve) => {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                if (iframeDoc && iframeDoc.readyState === "complete") {
                  resolve();
                } else {
                  iframe.onload = () => resolve();
                }
              });

              const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
              const fullHeight = iframeDoc.documentElement.scrollHeight || iframeDoc.body.scrollHeight || 3000;
              iframe.style.height = `${fullHeight}px`;

              // Wait briefly for layout resize to settle
              await new Promise((r) => setTimeout(r, 600));

              const canvas = await html2canvas(iframeDoc.body, {
                useCORS: true,
                scale: 0.8,
                backgroundColor: "#ffffff"
              });

              const blob = await getBlobFromCanvas(canvas);
              if (blob) {
                const file = new File([blob], `template_full_${Date.now()}.png`, { type: "image/png" });
                const url = await uploadToImgBB(file);
                setTemplateScreenshotUrl(url);
              }
            }
          } catch (e) {
            console.error("Failed to capture template screenshot:", e);
          } finally {
            setIsCapturingTemplate(false);
          }
        }
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [step, screenshotUrl, templateScreenshotUrl, isCapturingScreenshot, isCapturingTemplate]);

  // Sync to localStorage
  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("launch_step", String(step));
  }, [step, loaded]);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("launch_businessName", businessName);
  }, [businessName, loaded]);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("launch_yourName", yourName);
  }, [yourName, loaded]);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("launch_phone", phone);
  }, [phone, loaded]);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("launch_email", email);
  }, [email, loaded]);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("launch_address", address);
  }, [address, loaded]);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("launch_details", details);
  }, [details, loaded]);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("launch_logoName", logoName);
  }, [logoName, loaded]);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("launch_logoUrl", logoUrl);
  }, [logoUrl, loaded]);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("launch_imagesList", JSON.stringify(imagesList));
  }, [imagesList, loaded]);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("launch_imagesUrls", JSON.stringify(imagesUrls));
  }, [imagesUrls, loaded]);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("launch_addons", JSON.stringify(addons));
  }, [addons, loaded]);

  // Toggle addon selection
  const toggleAddon = (id) => {
    setAddons((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        selected: !prev[id].selected,
      },
    }));
  };

  // Toggle addon billing plan
  const setAddonBilling = (id, billing) => {
    setAddons((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        selected: true, // Auto-select when choosing billing
        billing,
      },
    }));
  };

  // Total calculations
  const templatePriceNum = 2499; // template cost base

  const addonsTotal = useMemo(() => {
    return ADDONS_CONFIG.reduce((acc, cur) => {
      const state = addons[cur.id];
      if (state.selected) {
        return acc + (state.billing === "monthly" ? cur.monthlyPrice : cur.yearlyPrice);
      }
      return acc;
    }, 0);
  }, [addons]);

  const grandTotal = templatePriceNum + addonsTotal;

  // Destructure customThemeColors properties to satisfy React hooks eslint rules
  const { bg, soft, secondary, panel, ink, muted } = customThemeColors;

  // WhatsApp link generator
  const whatsappHref = useMemo(() => {
    const activeAddonsText = ADDONS_CONFIG.filter((a) => addons[a.id].selected)
      .map((a) => `- ${a.title} (${addons[a.id].billing === "monthly" ? "Monthly" : "Yearly"})`)
      .join("\n");

    const themeColorsText = Object.entries({ bg, soft, secondary, panel, ink, muted })
      .filter(([_, val]) => val)
      .map(([key, val]) => `${key}: ${val}`)
      .join(", ") || customAccent;

    const lines = [
      "Hi Web Launchy Fire, I want to start a website.",
      template ? `Selected Template: ${template.name}` : "",
      "--- BUSINESS DETAILS ---",
      businessName ? `Business: ${businessName}` : "",
      yourName ? `Name: ${yourName}` : "",
      phone ? `Phone/WhatsApp: ${phone}` : "",
      email ? `Email: ${email}` : "",
      address ? `Address: ${address}` : "",
      details ? `Services/Details: ${details}` : "",
      logoUrl ? `Logo Link: ${logoUrl}` : (logoName ? `Logo: ${logoName}` : ""),
      imagesUrls.length > 0 ? `Images Links: ${imagesUrls.join(", ")}` : (imagesList.length > 0 ? `Images: ${imagesList.join(", ")}` : ""),
      
      template ? "--- DESIGN SPECIFICATIONS ---" : "",
      template ? `Category: ${getCategoryName(template.category)}` : "",
      template ? `Business Type: ${getSubcategoryName(template.category, template.subcategory)}` : "",
      template ? `Theme Colors: ${themeColorsText}` : "",
      template ? `Corners: ${customCorner}` : "",
      template ? `Font: ${customFont}` : "",
      template ? `Language: ${customLanguage}` : "",
      templateScreenshotUrl ? `Template Snapshot: ${templateScreenshotUrl}` : "",
      template ? `Template Preview: ${templatePreviewUrl}` : "",
      screenshotUrl ? `Page Screenshot: ${screenshotUrl}` : "",

      activeAddonsText ? `--- ADD-ONS ---\n${activeAddonsText}` : "",
      `Total Amount: ₹${grandTotal.toLocaleString("en-IN")}`,
      razorpayPaymentId ? `\n--- PAYMENT DETAILS ---` : "",
      razorpayPaymentId ? `Razorpay Payment ID: ${razorpayPaymentId}` : "",
      razorpayOrderId ? `Razorpay Order ID: ${razorpayOrderId}` : "",
      razorpayPaymentId ? `Status: Paid Successfully ✓` : "",
    ].filter(Boolean);

    return `https://wa.me/919832020388?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [
    template, businessName, yourName, phone, email, address, details,
    logoName, logoUrl, imagesList, imagesUrls, addons, grandTotal,
    screenshotUrl, templateScreenshotUrl,
    customAccent, customFont, customCorner, customLanguage,
    bg, soft, secondary, panel, ink, muted, templatePreviewUrl,
    razorpayPaymentId, razorpayOrderId
  ]);

  // Web3Forms submit handler
  const submitToWeb3Forms = async (paymentId = "", orderId = "") => {
    if (!WEB3FORMS_ACCESS_KEY) {
      console.warn("Web3Forms Access Key is not configured. Skipping Web3Forms submission.");
      return;
    }

    const themeColorsText = Object.entries({ bg, soft, secondary, panel, ink, muted })
      .filter(([_, val]) => val)
      .map(([key, val]) => `${key}: ${val}`)
      .join(", ") || customAccent;

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New Website Launch Order: ${businessName || "No Name"}`,
      template: template?.name || "None",
      businessName: businessName || "",
      yourName: yourName || "",
      phone: phone || "",
      email: email || "",
      address: address || "",
      details: details || "",
      logoUrl: logoUrl || "Not uploaded",
      imagesUrls: imagesUrls.length > 0 ? imagesUrls.join(", ") : "None uploaded",
      
      // Hidden Auto-selected specs
      category: template ? getCategoryName(template.category) : "",
      businessType: template ? getSubcategoryName(template.category, template.subcategory) : "",
      themeColors: themeColorsText,
      cornerStyle: customCorner,
      fontName: customFont,
      language: customLanguage,
      templateSnapshot: templateScreenshotUrl || template?.image || "",
      pageScreenshot: screenshotUrl || "Not captured",

      addons: ADDONS_CONFIG.filter((a) => addons[a.id].selected)
        .map((a) => `${a.title} (${addons[a.id].billing})`)
        .join(", ") || "None selected",
      totalAmount: `₹${grandTotal.toLocaleString("en-IN")}`,
      
      // Razorpay Details
      razorpayPaymentId: paymentId || razorpayPaymentId || "Manual QR Payment / Not Verified",
      razorpayOrderId: orderId || razorpayOrderId || "None",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!data.success) {
        console.error("Web3Forms submission failed:", data);
      }
    } catch (err) {
      console.error("Web3Forms submission network error:", err);
    }
  };

  // Razorpay payment integration handler
  const handleRazorpayPayment = async () => {
    if (isPaying) return;
    setIsPaying(true);

    try {
      // 1. Load the script dynamically
      const loaded = await loadRazorpayScript();
      if (!loaded) {
        alert("Failed to load Razorpay Payment Gateway. Please check your internet connection.");
        setIsPaying(false);
        return;
      }

      // 2. Create order on backend (amount in paise)
      let orderId = "";
      try {
        const response = await fetch("/api/create-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: Math.round(grandTotal * 100), // amount in paise
            currency: "INR",
            receipt: `rcpt_launch_${businessName.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase().substring(0, 10)}_${Date.now()}`
          }),
        });
        
        if (response.ok) {
          const resData = await response.json();
          orderId = resData.order_id;
        } else {
          const errData = await response.json().catch(() => ({}));
          alert("Error creating payment order: " + (errData.error || "Server error"));
          setIsPaying(false);
          return;
        }
      } catch (err) {
        console.error("Could not create Razorpay Order on server:", err);
        alert("Failed to connect to order server. Please check your connection.");
        setIsPaying(false);
        return;
      }

      // 3. Define options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_SygrUUYeV6xSOC",
        amount: Math.round(grandTotal * 100), // in paise
        currency: "INR",
        name: "Web Launchy Fire",
        description: template ? `Purchase of ${template.name}` : "Website Launch Order",
        image: "/logo.png",
        order_id: orderId,
        prefill: {
          name: yourName || "",
          email: email || "",
          contact: phone || "",
          method: "upi",
        },
        notes: {
          business_name: businessName || "",
          template_name: template?.name || "",
        },
        theme: {
          color: "#ff6a16", // Primary Accent color
        },
        handler: async function (response) {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;
          
          try {
            // Verify payment signature on backend
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
              }),
            });
            
            const verifyData = await verifyRes.json().catch(() => ({}));
            
            if (verifyRes.ok && verifyData.success) {
              setRazorpayPaymentId(razorpay_payment_id);
              setRazorpayOrderId(razorpay_order_id);
              
              // Submit order with Razorpay details
              await submitToWeb3Forms(razorpay_payment_id, razorpay_order_id);
              
              // Clear form data from storage
              clearLaunchData();
              
              // Move to step 5 (success card)
              setStep(5);
            } else {
              alert("Payment verification failed: " + (verifyData.error || "Invalid signature. Please contact support."));
            }
          } catch (verifyErr) {
            console.error("Payment verification network error:", verifyErr);
            alert("Network error verifying payment. Please contact support with payment ID: " + razorpay_payment_id);
          } finally {
            setIsPaying(false);
          }
        },
        modal: {
          ondismiss: function () {
            setIsPaying(false);
          }
        }
      };

      const rzp = new window.Razorpay(options);
      
      // Handle payment failure event
      rzp.on("payment.failed", function (response) {
        alert("Payment failed: " + (response.error?.description || "Transaction cancelled or failed."));
        setIsPaying(false);
      });

      rzp.open();
    } catch (e) {
      console.error("Razorpay integration error:", e);
      alert("An error occurred during Razorpay payment initiation. Please try again.");
      setIsPaying(false);
    }
  };

  const handleLogoChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogoName(file.name);
      setLogoError(false);
      setIsUploadingLogo(true);
      try {
        const url = await uploadToImgBB(file);
        setLogoUrl(url);
      } catch (error) {
        console.error("Logo upload failed:", error);
        alert("Failed to upload logo. Please try again.");
      } finally {
        setIsUploadingLogo(false);
      }
    }
  };

  const handleImagesChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      setImagesList(files.map(f => f.name));
      setIsUploadingImages(true);
      try {
        const urls = [];
        for (const file of files) {
          const url = await uploadToImgBB(file);
          urls.push(url);
        }
        setImagesUrls(urls);
      } catch (error) {
        console.error("Images upload failed:", error);
        alert("Failed to upload one or more business images.");
      } finally {
        setIsUploadingImages(false);
      }
    }
  };

  return (
    <>
      <Header />
      <style>{`
        .launch-page {
          background: #fcfbfa;
          color: var(--text-1);
          min-height: calc(100dvh - 78px);
          padding: 24px 16px 60px;
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
        }
        .launch-container {
          max-width: 650px;
          margin: 0 auto;
        }
        
        /* Stepper header */
        .stepper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
          position: relative;
          padding: 0 8px;
        }
        .stepper-line {
          position: absolute;
          top: 13px;
          left: 0;
          right: 0;
          height: 2px;
          background: #e8e6e2;
          z-index: 1;
        }
        .stepper-line-active {
          position: absolute;
          top: 13px;
          left: 0;
          height: 2px;
          background: var(--accent);
          z-index: 1;
          transition: width 0.3s ease;
        }
        .step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 2;
          position: relative;
        }
        .step-circle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #eeece8;
          border: 2px solid #eeece8;
          color: var(--text-2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.78rem;
          font-weight: 700;
          transition: all 0.3s ease;
        }
        .step-item.active .step-circle {
          background: var(--accent);
          border-color: var(--accent);
          color: #fff;
          box-shadow: 0 0 10px rgba(255, 106, 22, 0.3);
        }
        .step-item.completed .step-circle {
          background: var(--accent);
          border-color: var(--accent);
          color: #fff;
        }
        .step-label {
          font-size: 0.72rem;
          margin-top: 6px;
          color: var(--text-3);
          font-weight: 600;
        }
        .step-item.active .step-label,
        .step-item.completed .step-label {
          color: var(--text-1);
        }

        /* Banner */
        .selected-banner {
          background: #fff5ec;
          border: 1px solid rgba(255, 106, 22, 0.15);
          color: #8c3200;
          border-radius: 10px;
          padding: 12px 16px;
          margin-bottom: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
          font-size: 0.85rem;
        }
        .selected-banner-tag {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #e9580d;
          display: block;
          margin-bottom: 1px;
        }

        /* Card panels */
        .details-card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }
        .details-title {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 4px;
          color: var(--text-1);
        }
        .details-subtitle {
          font-size: 0.82rem;
          color: var(--text-3);
          margin-bottom: 20px;
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
        @media (min-width: 640px) {
          .form-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px 14px;
          }
          .col-span-2 {
            grid-column: span 2;
          }
        }
        .form-group {
          display: flex;
          flex-direction: column;
        }
        .input-label {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-2);
          margin-bottom: 6px;
        }
        .input-field {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 10px 14px;
          color: var(--text-1);
          font-size: 0.88rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input-field:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(255, 106, 22, 0.1);
        }
        textarea.input-field {
          resize: vertical;
          min-height: 90px;
        }

        /* File upload */
        .upload-section {
          margin-top: 18px;
        }
        .upload-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        @media (min-width: 480px) {
          .upload-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .upload-box {
          border: 2px dashed var(--border-hover);
          background: var(--surface);
          border-radius: 10px;
          padding: 18px;
          text-align: center;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
        .upload-box:hover {
          border-color: var(--accent);
          background: rgba(255, 106, 22, 0.02);
        }
        .upload-icon {
          color: var(--accent);
          background: var(--accent-subtle);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: grid;
          place-items: center;
        }
        .upload-text-main {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-1);
        }
        .upload-text-sub {
          font-size: 0.68rem;
          color: var(--text-3);
        }

        /* Add-ons styling */
        .addon-card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 18px 20px;
          margin-bottom: 12px;
          transition: all 0.2s ease;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          position: relative;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.01);
        }
        .addon-card.selected {
          border-color: rgba(255, 106, 22, 0.4);
          background: #fffcf8;
        }
        .addon-icon-box {
          background: var(--surface);
          color: var(--accent);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }
        .addon-content {
          flex-grow: 1;
        }
        .addon-title {
          font-size: 0.95rem;
          font-weight: 750;
          color: var(--text-1);
          margin-bottom: 2px;
        }
        .addon-description {
          font-size: 0.78rem;
          color: var(--text-2);
          line-height: 1.4;
          margin-bottom: 12px;
          max-width: 460px;
        }
        .addon-plans {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .addon-plan-btn {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 5px 12px;
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--text-2);
          cursor: pointer;
          transition: all 0.15s;
        }
        .addon-plan-btn:hover {
          color: var(--text-1);
          border-color: var(--border-hover);
        }
        .addon-plan-btn.active {
          background: var(--accent);
          border-color: var(--accent);
          color: #fff;
        }
        .addon-plan-btn span.save-pill {
          background: rgba(255,255,255,0.2);
          color: #fff;
          font-size: 0.62rem;
          padding: 1px 5px;
          border-radius: 8px;
          margin-left: 5px;
        }
        .addon-check {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid var(--border-hover);
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: all 0.15s;
        }
        .addon-card.selected .addon-check {
          background: var(--accent);
          border-color: var(--accent);
          color: #fff;
        }
        .addons-total-box {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 12px 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 24px;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.01);
        }

        /* Order Summary */
        .summary-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 18px;
        }
        .summary-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
        }
        .summary-label {
          color: var(--text-2);
        }
        .summary-value {
          font-weight: 600;
          color: var(--text-1);
        }

        /* QR block */
        .qr-card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }
        .qr-box {
          border: 2px solid var(--accent);
          border-radius: 12px;
          padding: 8px;
          background: #fff;
          width: 160px;
          height: 160px;
          margin: 16px auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .upi-badge {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 4px 12px;
          font-size: 0.78rem;
          font-family: monospace;
          color: var(--text-1);
          font-weight: 600;
          display: inline-block;
          margin-bottom: 16px;
        }
        .upi-apps {
          display: flex;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 6px;
        }
        .upi-app-btn {
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 4px 10px;
          border-radius: 10px;
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--text-2);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* Buttons row */
        .btn-row {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }
        .btn-row .btn {
          flex: 1;
          border-radius: 10px;
          height: 44px;
          font-weight: 700;
          font-size: 0.88rem;
        }

        /* Confirmation page */
        .conf-card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 36px 24px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }
        .conf-check {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: rgba(40, 200, 64, 0.08);
          color: #28c840;
          display: grid;
          place-items: center;
          margin: 0 auto 18px;
        }
        .conf-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-1);
          margin-bottom: 8px;
        }
        .conf-subtitle {
          font-size: 0.88rem;
          color: var(--text-2);
          line-height: 1.5;
          max-width: 400px;
          margin: 0 auto 28px;
        }
      `}</style>

      <main className="launch-page">
        <div className="launch-container">
          {/* STEPPER PROGRESS */}
          <div className="stepper">
            <div className="stepper-line" />
            <div
              className="stepper-line-active"
              style={{
                width: `${((step - 1) / 3) * 100}%`,
              }}
            />
            {[
              { num: 1, label: "Template" },
              { num: 2, label: "Details" },
              { num: 3, label: "Add-ons" },
              { num: 4, label: "Payment" },
            ].map((s) => (
              <div
                key={s.num}
                className={`step-item ${step === s.num ? "active" : ""} ${
                  step > s.num ? "completed" : ""
                }`}
              >
                <div className="step-circle">
                  {step > s.num ? "✓" : s.num}
                </div>
                <span className="step-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* SELECTED TEMPLATE BANNER */}
          {step > 1 && step < 5 && template && (
            <div className="selected-banner">
              <div>
                <span className="selected-banner-tag">Selected Template</span>
                <span style={{ fontSize: "0.98rem", color: "var(--text-1)" }}>{template.name}</span>
              </div>
              <div style={{ textAlign: "right" }}>
                <span className="selected-banner-tag">Price</span>
                <span style={{ fontSize: "0.98rem", color: "var(--text-1)" }}>₹2,499</span>
              </div>
            </div>
          )}

          {/* STEP 1: SELECTED TEMPLATE VIEW */}
          {step === 1 && (
            <div className="details-card">
              <h1 className="details-title">Selected Template</h1>
              <p className="details-subtitle">Verify your selected design and proceed to setup</p>
              
              {template && (
                <div style={{ background: "var(--surface)", borderRadius: "10px", overflow: "hidden", border: "1px solid var(--border)" }}>
                  <iframe
                    src={iframeSrc}
                    title={`${template.name} selected template preview`}
                    style={{
                      display: "block",
                      width: "100%",
                      height: 300,
                      border: 0,
                      background: "#fff",
                    }}
                  />
                  <div style={{ padding: 18 }}>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-1)" }}>{template.name}</h3>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-2)", marginTop: 4, lineHeight: 1.4 }}>{template.tagline}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 18, paddingTop: 12, borderTop: "1px solid var(--border)" }}>
                      <span style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-1)" }}>₹2,499</span>
                      <Link href={`/template-preview/${template.id}`} className="btn btn-secondary btn-sm" style={{ height: 34, borderRadius: 6 }}>
                        Preview Live
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              <div className="btn-row">
                <Link href="/templates" className="btn btn-secondary" onClick={clearLaunchData}>
                  Change Template
                </Link>
                <button className="btn btn-primary" onClick={() => setStep(2)}>
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: BUSINESS DETAILS FORM */}
          {step === 2 && (
            <div className="details-card">
              <h1 className="details-title">Your business details</h1>
              <p className="details-subtitle">Fill in the information. Fields marked * are required.</p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!logoName) {
                    setLogoError(true);
                    return;
                  }
                  setLogoError(false);
                  setStep(3);
                }}
              >
                <div className="form-grid">
                  <div className="form-group">
                    <label className="input-label" htmlFor="b_name">Business / Company Name *</label>
                    <input
                      id="b_name"
                      required
                      type="text"
                      className="input-field"
                      placeholder="e.g. Apollo Diagnostic"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="input-label" htmlFor="y_name">Your Name</label>
                    <input
                      id="y_name"
                      type="text"
                      className="input-field"
                      placeholder="Your full name"
                      value={yourName}
                      onChange={(e) => setYourName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="input-label" htmlFor="p_num">Phone / WhatsApp *</label>
                    <input
                      id="p_num"
                      required
                      type="tel"
                      className="input-field"
                      placeholder="+91 99999 99999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="input-label" htmlFor="e_addr">Email</label>
                    <input
                      id="e_addr"
                      type="email"
                      className="input-field"
                      placeholder="you@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group col-span-2">
                    <label className="input-label" htmlFor="addr">Address</label>
                    <input
                      id="addr"
                      type="text"
                      className="input-field"
                      placeholder="Shop/Clinic full address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>

                  <div className="form-group col-span-2">
                    <label className="input-label" htmlFor="serv">Services / About Your Business</label>
                    <textarea
                      id="serv"
                      className="input-field"
                      placeholder="Describe your services, timings, specialties..."
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                    />
                  </div>
                </div>

                {/* Upload Section */}
                <div className="upload-section">
                  <span className="input-label">Upload files (logo required, images optional)</span>
                  <div className="upload-grid" style={{ marginTop: 8 }}>
                    {/* Logo upload */}
                    <label className="upload-box" htmlFor="logo-upload" style={logoError ? { borderColor: "#ff4f38", background: "#fff6f5" } : {}}>
                      <input
                        type="file"
                        id="logo-upload"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleLogoChange}
                        disabled={isUploadingLogo}
                      />
                      {isUploadingLogo ? (
                        <>
                          <div style={{ width: 38, height: 38, borderRadius: "50%", background: "var(--accent-subtle)", display: "grid", placeItems: "center" }}>
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-orange-500 border-t-transparent" />
                          </div>
                          <span className="upload-text-main">Uploading to cloud...</span>
                          <span className="upload-text-sub">Please wait</span>
                        </>
                      ) : logoUrl ? (
                        <>
                          <div style={{ width: 44, height: 44, borderRadius: 8, border: "1px solid var(--border-hover)", overflow: "hidden", background: "#fff", display: "grid", placeItems: "center" }}>
                            <img src={logoUrl} alt="Logo preview" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                          </div>
                          <span className="upload-text-main" style={{ color: "#28c840" }}>Logo Uploaded ✓</span>
                          <span className="upload-text-sub">Click to replace logo</span>
                        </>
                      ) : (
                        <>
                          <div className="upload-icon">
                            <Icon name="sparkles" className="h-4 w-4" />
                          </div>
                          <span className="upload-text-main">Upload Logo</span>
                          <span className="upload-text-sub">Required *</span>
                        </>
                      )}
                    </label>

                    {/* Business images upload */}
                    <label className="upload-box" htmlFor="images-upload">
                      <input
                        type="file"
                        id="images-upload"
                        multiple
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleImagesChange}
                        disabled={isUploadingImages}
                      />
                      {isUploadingImages ? (
                        <>
                          <div style={{ width: 38, height: 38, borderRadius: "50%", background: "var(--accent-subtle)", display: "grid", placeItems: "center" }}>
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-orange-500 border-t-transparent" />
                          </div>
                          <span className="upload-text-main">Uploading images...</span>
                          <span className="upload-text-sub">Please wait</span>
                        </>
                      ) : imagesUrls.length > 0 ? (
                        <>
                          <div style={{ width: 44, height: 44, borderRadius: 8, border: "1px solid var(--border-hover)", overflow: "hidden", background: "#fff", display: "grid", placeItems: "center" }}>
                            <img src={imagesUrls[0]} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                          </div>
                          <span className="upload-text-main" style={{ color: "#28c840" }}>{imagesUrls.length} Images Uploaded ✓</span>
                          <span className="upload-text-sub">Click to replace images</span>
                        </>
                      ) : (
                        <>
                          <div className="upload-icon">
                            <Icon name="layout" className="h-4 w-4" />
                          </div>
                          <span className="upload-text-main">Business images</span>
                          <span className="upload-text-sub">Optional — we can add</span>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                <div className="btn-row">
                  <button type="button" className="btn btn-secondary" onClick={() => setStep(1)}>
                    Back
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Review & Pay
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 3: ADD-ONS SERVICES */}
          {step === 3 && (
            <div>
              <div style={{ marginBottom: 20 }}>
                <h1 className="details-title">Add extra services</h1>
                <p className="details-subtitle" style={{ marginBottom: 0 }}>
                  Optional monthly/yearly services to grow your business online
                </p>
              </div>

              {ADDONS_CONFIG.map((addon) => {
                const state = addons[addon.id];
                return (
                  <div key={addon.id} className={`addon-card ${state.selected ? "selected" : ""}`}>
                    <div className="addon-icon-box">
                      <Icon name={addon.icon} className="h-4 w-4" />
                    </div>

                    <div className="addon-content">
                      <h3 className="addon-title">{addon.title}</h3>
                      <p className="addon-description">{addon.description}</p>
                      
                      <div className="addon-plans">
                        <button
                          type="button"
                          className={`addon-plan-btn ${state.selected && state.billing === "monthly" ? "active" : ""}`}
                          onClick={() => setAddonBilling(addon.id, "monthly")}
                        >
                          Monthly — ₹{addon.monthlyPrice}
                        </button>
                        <button
                          type="button"
                          className={`addon-plan-btn ${state.selected && state.billing === "yearly" ? "active" : ""}`}
                          onClick={() => setAddonBilling(addon.id, "yearly")}
                        >
                          Yearly — ₹{addon.yearlyPrice}
                          <span className="save-pill">Save ₹{addon.savings}</span>
                        </button>
                      </div>
                    </div>

                    <div className="addon-check" onClick={() => toggleAddon(addon.id)}>
                      {state.selected && (
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      )}
                    </div>
                  </div>
                );
              })}

              <div className="addons-total-box">
                <div>
                  <span style={{ fontSize: "0.68rem", color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.05em", display: "block" }}>
                    Add-ons total
                  </span>
                  <span style={{ fontSize: "0.78rem", color: "var(--text-2)", fontWeight: 500 }}>
                    Recurring charge — monthly or yearly as selected
                  </span>
                </div>
                <span style={{ fontSize: "1.15rem", color: "var(--text-1)", fontWeight: 700 }}>
                  ₹{addonsTotal.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="btn-row">
                <button type="button" className="btn btn-secondary" onClick={() => setStep(2)}>
                  Back
                </button>
                <button type="button" className="btn btn-primary" onClick={() => setStep(4)}>
                  Review & Pay
                </button>
              </div>

              <div style={{ textAlign: "center", marginTop: 16 }}>
                <button
                  type="button"
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--text-3)",
                    fontSize: "0.8rem",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    // Unselect all add-ons and proceed
                    setAddons({
                      maintenance: { selected: false, billing: "monthly" },
                    });
                    setStep(4);
                  }}
                >
                  Skip add-ons for now
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: PAYMENT SUMMARY & QR */}
          {step === 4 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Order Summary */}
              <div className="details-card" style={{ marginBottom: 0 }}>
                <h2 className="details-title" style={{ fontSize: "1.15rem", marginBottom: 16 }}>Order summary</h2>
                <div className="summary-list">
                  <div className="summary-item">
                    <span className="summary-label">Template</span>
                    <span className="summary-value">{template?.name}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Business</span>
                    <span className="summary-value">{businessName || "Not provided"}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Contact</span>
                    <span className="summary-value">{phone || "Not provided"}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Delivery</span>
                    <span className="summary-value">Within 48 hours</span>
                  </div>
                  {ADDONS_CONFIG.filter((a) => addons[a.id].selected).map((a) => (
                    <div className="summary-item" key={a.id}>
                      <span className="summary-label">{a.title} ({addons[a.id].billing === "monthly" ? "Monthly" : "Yearly"})</span>
                      <span className="summary-value">
                        ₹{addons[a.id].billing === "monthly" ? a.monthlyPrice : a.yearlyPrice}
                      </span>
                    </div>
                  ))}
                  <div className="divider" style={{ background: "var(--border)", margin: "8px 0" }} />
                  <div className="summary-item" style={{ fontSize: "1rem" }}>
                    <span className="summary-label" style={{ color: "var(--text-1)", fontWeight: 700 }}>Total</span>
                    <span className="summary-value" style={{ color: "var(--accent)", fontSize: "1.1rem", fontWeight: 800 }}>
                      ₹{grandTotal.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>

              {/* QR payment */}
              <div className="qr-card">
                <span className="input-label" style={{ display: "block", marginBottom: 16 }}>Payment Method</span>
                
                {/* Razorpay Button */}
                <button
                  type="button"
                  onClick={handleRazorpayPayment}
                  disabled={isPaying || isCapturing}
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    height: 52,
                    borderRadius: 12,
                    fontSize: "1rem",
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    background: "linear-gradient(135deg, #ff6a16 0%, #ff8838 100%)",
                    border: "none",
                    boxShadow: "0 4px 15px rgba(255, 106, 22, 0.35)",
                    cursor: (isPaying || isCapturing) ? "not-allowed" : "pointer",
                    transition: "all 0.2s ease",
                    opacity: (isPaying || isCapturing) ? 0.8 : 1,
                  }}
                >
                  {isPaying ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" style={{ display: "inline-block", width: 16, height: 16, borderTopColor: "transparent", borderBottomColor: "white", borderLeftColor: "white", borderRightColor: "white", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
                      Connecting Payment Gateway...
                    </>
                  ) : (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      Pay Securely with Card / UPI / Netbanking
                    </>
                  )}
                </button>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 12, fontSize: "0.72rem", color: "var(--text-3)" }}>
                  <span>🔒 PCI-DSS Compliant</span>
                  <span>•</span>
                  <span>⚡ Powered by Razorpay</span>
                </div>

                <div style={{ marginTop: 20 }}>
                  <button
                    type="button"
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--text-3)",
                      fontSize: "0.8rem",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onClick={() => setStep(3)}
                  >
                    Back to add-ons
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: PAYMENT SUCCESS CARD */}
          {step === 5 && (
            <div className="conf-card">
              <div className="conf-check">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="checkmark">
                  <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <style jsx>{`
                  @keyframes drawCheck {
                    to { stroke-dashoffset: 0; }
                  }
                  .checkmark {
                    stroke-dasharray: 24;
                    stroke-dashoffset: 24;
                    animation: drawCheck 0.5s ease-out forwards;
                  }
                `}</style>
              </div>
              <h1 className="conf-title">Payment Successful!</h1>
              <p className="conf-subtitle">
                Thank you for your order. We have successfully received your payment of <strong>₹{grandTotal.toLocaleString("en-IN")}</strong>.
              </p>

              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: "16px 20px", textAlign: "left", margin: "0 auto 28px", maxWidth: 460 }}>
                <h3 style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text-1)", borderBottom: "1px solid var(--border)", paddingBottom: 8, marginBottom: 10 }}>
                  Transaction Details
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: "0.8rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--text-3)" }}>Business Name</span>
                    <span style={{ fontWeight: 600, color: "var(--text-1)" }}>{businessName}</span>
                  </div>
                  {razorpayPaymentId && (
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "var(--text-3)" }}>Payment ID</span>
                      <span style={{ fontFamily: "monospace", fontWeight: 600, color: "var(--text-1)" }}>{razorpayPaymentId}</span>
                    </div>
                  )}
                  {razorpayOrderId && (
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "var(--text-3)" }}>Order ID</span>
                      <span style={{ fontFamily: "monospace", fontWeight: 600, color: "var(--text-1)" }}>{razorpayOrderId}</span>
                    </div>
                  )}
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--text-3)" }}>Status</span>
                    <span style={{ fontWeight: 650, color: "#28c840" }}>Paid ✓</span>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 460, margin: "0 auto" }}>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    height: 46,
                    borderRadius: 10,
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.82 11.82 0 0 0 20.885 3.488" />
                  </svg>
                  Open WhatsApp to Confirm Details
                </a>
                
                <Link href="/" onClick={resetFormStates} className="btn btn-secondary" style={{ height: 46, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
                  Back to Home
                </Link>
              </div>
            </div>
          )}
          {/* Hidden iframe to capture the full template preview screenshot */}
          {step === 4 && template && (
            <iframe
              id="template-preview-iframe"
              src={iframeSrc}
              style={{
                position: "absolute",
                top: -9999,
                left: -9999,
                width: 1200,
                height: 2000,
                border: "none",
                pointerEvents: "none",
                opacity: 0.01
              }}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
