import { Typography } from "@material-tailwind/react";

const SITEMAP = [
    {
        title: "Company",
        links: ["About Us", "Careers", "Our Team"],
    },
    {
        title: "Contact us",
        links: ["Twitter", "GitHub", "Contact Us"],
    },
    {
        title: "Resources",
        links: ["Blog", "Newsletter", "Affiliate Program"],
    },
    {
        title: "Products",
        links: ["Shop", "My Cart", "My Account"],
    },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <>
            <footer className="relative w-full bg-gray-100 border-t border-gray-300">
                <div className="mx-auto container px-8">
                    <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
                        {SITEMAP.map(({ title, links }, key) => (
                            <div key={key} className="w-full">
                                <Typography
                                    className="mb-4 font-bold uppercase"
                                >
                                    {title}
                                </Typography>
                                <ul className="space-y-1">
                                    {links.map((link, key) => (
                                        <Typography key={key} as="li" color="blue-gray" className="font-normal">
                                            <a
                                                href="#"
                                                className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                                            >
                                                {link}
                                            </a>
                                        </Typography>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-blue-gray-50 py-9">
                        <Typography
                            variant="small"
                            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
                        >
                            &copy; {currentYear} <a> Aircraft Engineers Store</a>. All Rights Reserved.
                        </Typography>
                    </div>
                </div>
            </footer>   
        </>
    );
};

export default Footer;





