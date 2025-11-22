/* eslint-disable react/jsx-key */
import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  // Optional wrapper styles
  className?: string;
  // Optional icon styles
  iconClassName?: string;
  // Optional tooltip styles
  tooltipClassName?: string;
}

// List of social links with icons, title & URL
const socialLink = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Slack",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Slack className="w-5 h-5" />,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    // Tooltip provider wraps all tooltip items
    <TooltipProvider>
      {/* Wrapper for all social icons */}
      <div className={cn("flex items-center gap-3.5", className)}>
        {/* Loop through each social link */}
        {socialLink?.map((item) => (
          <Tooltip>
            {/* Tooltip trigger wraps the clickable icon */}
            <TooltipTrigger asChild>
              <Link
                key={item?.title}
                // Open in new tab
                target="_blank"
                // Security best practice
                rel="noopener noreferrer"
                // Link URL
                href={item?.href}
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect",
                  iconClassName
                )}
              >
                {/* Render the social icon */}
                {item?.icon}
              </Link>
            </TooltipTrigger>
            {/* Tooltip content (the small pop-up text) */}

            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold border-shop_light_green",
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
