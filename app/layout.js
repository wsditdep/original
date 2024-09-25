import '@fortawesome/fontawesome-free/css/all.min.css';
import "./styles/auth.scss";
import "./styles/appLayout.scss";
import "./styles/styles.scss";
import "./styles/global.scss";
import { Toaster } from "react-hot-toast";
import LiveSupport from '@/components/liveSupport/LiveSupport';
import favicon from "@/public/faviconV2.png";

export const metadata = {
  title: "Tailor-made holidays, Luxury Tour Operator - Original Travel",
  description: "Tailor-made holidays, Luxury Tour Operator - Original Travel",
  icons: {
    icon: {
      url: {favicon},
      type: "image/png",
    },
    shortcut: { url: "/faviconV2.png", type: "image/png" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <Toaster position="top-center" />
        <div className="platform-layout-parent">
          <div className="platform-layout-childs">
            {children}
          </div>
        </div>
        <LiveSupport />
      </body>
    </html>
  );
}
