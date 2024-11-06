import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Presentation from "@/components/Presentation";
import I18nIntlProvider from "@/config/i18n/i18n-intl-provider";

export default function Home() {
  return (
    <I18nIntlProvider>
      <div className="font-[family-name:var(--font-geist-sans)] relative text-white bg-primary_1">
        <Header />
        <Presentation />
        <Intro />
        <Footer />
        <div className="fixed z-[9999] top-[-300%] left-[-150%] h-[600%] w-[600%] animate-grain bg-[url(/noise.png)] bg-[200px] bg-repeat opacity-25 pointer-events-none"></div>
      </div>
    </I18nIntlProvider>
  );
}
