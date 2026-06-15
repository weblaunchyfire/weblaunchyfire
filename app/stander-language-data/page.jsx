import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { standardLanguages, standardLanguageTextData } from "@/components/template/stander/templateone/languageTextData";

export const metadata = {
  title: "Standard Template Language Data | Web Launchy Fire",
  description: "All language text data for Standard Template One.",
  robots: {
    index: false,
    follow: false,
  },
};

const groups = [
  ["Navigation", ["premiumLabel", "callNow", "bookConsultation", "exploreServices"]],
  ["Sections", ["whatWeOffer", "ourServices", "shop", "ourProducts", "viewAll", "gallery", "getInTouch", "contactUs"]],
  ["Products", ["orderViaWhatsApp"]],
  ["Contact Form", ["contactIntro", "firstName", "lastName", "emailAddress", "phoneNumber", "serviceInterestedIn", "message", "sendMessage"]],
  ["Contact Info", ["address", "phone", "email", "hours", "viewOnGoogleMaps", "chatOnWhatsApp"]],
  ["Footer", ["footerLine"]],
];

function humanize(key) {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());
}

export default function StanderLanguageDataPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f7f7f5] px-4 py-12 text-[#171717] sm:px-6 lg:px-8">
        <section className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="section-tag">Standard Template One</p>
            <h1 className="mt-3 text-4xl font-black tracking-normal sm:text-5xl">Language Text Data</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Standard package/template one-er UI copy ekhane language-wise rakha holo. Total {standardLanguages.length} languages.
            </p>
          </div>

          <div className="grid gap-5">
            {standardLanguages.map((language) => {
              const copy = standardLanguageTextData[language];

              return (
                <article key={language} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-5 py-4">
                    <h2 className="text-xl font-black tracking-normal">{language}</h2>
                    <span className="rounded-full bg-[#111827] px-3 py-1 text-xs font-bold text-white">{Object.keys(copy).length} text fields</span>
                  </div>
                  <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-3">
                    {groups.map(([groupName, keys]) => (
                      <div key={groupName} className="border-b border-slate-100 p-5 md:border-r xl:[&:nth-child(3n)]:border-r-0">
                        <h3 className="mb-3 text-xs font-black uppercase tracking-[.16em] text-orange-600">{groupName}</h3>
                        <dl className="space-y-3">
                          {keys.map((key) => (
                            <div key={key}>
                              <dt className="text-[11px] font-black uppercase tracking-[.12em] text-slate-400">{humanize(key)}</dt>
                              <dd className="mt-1 text-sm font-semibold leading-6 text-slate-800">{copy[key]}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
