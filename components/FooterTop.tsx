import { Clock, Mail, MapPin, Phone } from "lucide-react";

// 1. We define a TypeScript interface that describes what each contact item looks like
//    - title: The main text
//    - subtitle: A smaller text under the title
//    - icon: The icon we show next to the text

interface ContactItemData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

// 2. This is our data array. Each object represents one item in the footer.
//    We store the title, subtitle, and an icon component.

const data: ContactItemData[] = [
  {
    title: "Visit Us",
    subtitle: "New Orlean, USA",
    icon: (
      <MapPin className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Call Us",
    subtitle: "+12 958 648 597",
    icon: (
      <Phone className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Working Hours",
    subtitle: "Mon - Sat: 10:00 AM - 7:00 PM",
    icon: (
      <Clock className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Email Us",
    subtitle: "Shopcart@gmail.com",
    icon: (
      <Mail className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
];

const FooterTop = () => {
  return (
    // 3. We create a grid layout:
    //    - 2 columns on small screens
    //    - 4 columns on large screens
    //    - A border at the bottom

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 border-b">
      {data?.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 group hover:bg-gray-50 p-4 transaction-colors hoverEffect"
        >
          {item?.icon}
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-black transition-colors hoverEffect">
              {item?.title}
            </h3>
            <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-900 hoverEffect">
              {item?.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterTop;
