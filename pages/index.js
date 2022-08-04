import { useState, useEffect } from "react";
import Head from "next/head";
import {
    FaDoorOpen,
    FaPhoneAlt,
    FaLocationArrow,
    FaClock,
    FaExclamationCircle,
    FaRegWindowClose,
} from "react-icons/fa";
import Image from "next/image";

const title = "Business Card";
const phone = "+48 123 123 123";
const navbarItems = [
    {
        text: "O nas",
        anchor: "#onas",
    },
    {
        text: "Program",
        anchor: "#program",
    },
    {
        text: "Zajęcia",
        anchor: "#zajecia",
    },
    {
        text: "Rekrutacja",
        anchor: "#rekrutacja",
    },
    {
        text: "Kontakt",
        anchor: "#kontakt",
    }
];

const Logo = () => {
    return <Image src={"/logo.webp"} width={204} height={50} alt={"logo"} />;
};

const MobileMenu = (props) => {
    const { visible = false, children, toggle } = props;
    const [isVisible, setIsVisible] = useState(visible);

    useEffect(() => {
        setIsVisible(visible);
    }, [visible]);

    if (isVisible === false) {
        return <></>;
    }
    return (
        <div className="fixed top-0 w-full rounded-xl p-5 bg-white z-50 opacity-95">
            <div className="flex justify-end">
                <div className="shrink">
                    <FaRegWindowClose
                        className="cursor-pointer"
                        onClick={() => {
                            toggle(!isVisible);
                        }}
                    />
                </div>
            </div>
            <div className="mobile-menu-content">{children}</div>
        </div>
    );
};

const NavbarItems = (props) => {
    // const { navbarItems } = props;
    return (
        <>
            {navbarItems.map((navbarItem) => {
                return <div><a href={navbarItem.anchor}>{navbarItem.text}</a></div>;
            })}
        </>
    );
};

const ContextItems = () => {
    return (
        <>
            <div>
                <FaExclamationCircle className="inline-block" />
                <span className="inline-block ml-2">Otwarte zapisy!</span>
            </div>
            <div>
                <FaPhoneAlt className="inline-block" />{" "}
                <span className="inline-block ml-2">
                    <a className="text-[blue]" href={"tel:" + phone}>
                        {phone}
                    </a>
                </span>
            </div>
            <div>
                <FaLocationArrow className="inline-block" />
                <span className="inline-block ml-2">
                    ul. Nieznana 6/12, Warszawa
                </span>
            </div>
            <div>
                <FaClock className="inline-block" />
                <span className="inline-block ml-2">Pn–Pt: 7:30–18:30</span>
            </div>
        </>
    );
};

const DescriptionBox = (props) => {
    const { title, children, image } = props;
    return (
        <div className="flex flex-col md:flex-row">
            <div className="order-2 md:order-1 md:basis-1/2 pr-5 pl-5">
                <h2 className="text-2xl mb-5">{title}</h2>
                {children}
            </div>
            <div className="order-1 mb-5 md:mb-0 md:order-2 md:basis-1/2">
                <div className="flex justify-center">
                    <div className="shrink">{image}</div>
                </div>
            </div>
        </div>
    );
};

export default function Home() {
    const [isNavBarMenuVisible, setIsNavBarMenuVisible] = useState(false);
    const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="hidden md:block z-50 w-full h-[50px] bg-[#f0f1f4]">
                    <div className="container mx-auto">
                        <div className="flex flex-row p-3 justify-between text-center">
                            <ContextItems />
                        </div>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="container mx-auto">
                        <MobileMenu
                            visible={isNavBarMenuVisible}
                            toggle={setIsNavBarMenuVisible}
                        >
                            <div className="flex flex-col navbar-items">
                                <NavbarItems />
                            </div>
                        </MobileMenu>
                        <MobileMenu
                            visible={isContextMenuVisible}
                            toggle={setIsContextMenuVisible}
                        >
                            <div className="flex flex-col gap-5">
                                <ContextItems />
                            </div>
                        </MobileMenu>
                        <div className="flex p-5 md:p-5">
                            <div
                                className="md:hidden shrink cursor-pointer mt-2 pr-3"
                                onClick={() => {
                                    setIsNavBarMenuVisible(true);
                                }}
                            >
                                <div className="flex flex-col">
                                    <div className="h-1 w-7 rounded-sm mb-1 bg-black"></div>
                                    <div className="h-1 w-7 rounded-sm mb-1 bg-black"></div>
                                    <div className="h-1 w-7 rounded-sm bg-black"></div>
                                </div>
                            </div>
                            <div className="flex-auto text-center md:text-left">
                                <Logo />
                            </div>
                            <div
                                className="md:hidden shrink cursor-pointer mt-2 pl-3"
                                onClick={() => {
                                    setIsContextMenuVisible(true);
                                }}
                            >
                                <div className="flex flex-col">
                                    <div className="h-1 w-1 rounded-xl mb-1 bg-black"></div>
                                    <div className="h-1 w-1 rounded-xl mb-1 bg-black"></div>
                                    <div className="h-1 w-1 rounded-xl bg-black"></div>
                                </div>
                            </div>
                            <div className="hidden md:block flex-auto">
                                <div className="navbar-items-desktop flex flex-row gap-10 justify-end">
                                    <NavbarItems />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="flex bg-cover bg-center justify-center h-screen-md w-screen"
                    style={{ backgroundImage: `url("/bg.webp")` }}
                >
                    <div className="container mx-auto">
                        <div className="w-[80%] md:w-[60%] bg-white opacity-80 mx-auto p-5 rounded-xl mt-16 mb-16 md:mt-[10rem] md:mb-[10rem]">
                            <div className="text-2xl">
                                "Bardzo ważne jest zrozumienie, że inteligencja
                                emocjonalna nie jest przeciwieństwem
                                inteligencji, nie jest to triumf serca nad głową
                                - jest to unikalne skrzyżowanie obu" ~ Dorota
                                Ciosek
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row mt-10">
                    <div className="container mx-auto">
                        <DescriptionBox
                            title={"O nas"}
                            image={
                                <Image
                                    src={"/a1.webp"}
                                    width={480}
                                    height={320}
                                />
                            }
                        >
                            <p className="mb-3">
                                Jesteśmy przedszkolem, które powstało z myślą o
                                rozwoju inteligencji emocjonalnej u Dzieci.
                            </p>
                            <p className="mb-3">
                                Mamy świadomość, że umiejętność radzenia sobie z
                                emocjami to najlepsze wyposażenie Dziecka na
                                przyszłość, bowiem sukces w dorosłym życiu
                                zależy w dużej mierze od umiejętności kierowania
                                swoimi emocjami.
                            </p>
                            <p>
                                Naszym priorytetem jest stworzenie przyjaznego i
                                stymulującego miejsca, gdzie dzieci będą mogły
                                zdobyć umiejętność rozumienia, wyrażania, a
                                przede wszystkim świadomego kontrolowania
                                własnych emocji.
                            </p>
                        </DescriptionBox>
                    </div>
                </div>
                <div className="flex flex-row mt-10">
                    <div className="container mx-auto">
                        <DescriptionBox
                            title={
                                "Nasza misja: rozwój inteligencji emocjonalnej przez zabawę"
                            }
                            image={
                                <Image
                                    src={"/a2.webp"}
                                    width={480}
                                    height={320}
                                />
                            }
                        >
                            <p className="mb-3">
                                Rozwój inteligencji emocjonalnej (EQ) następuje
                                już od początku życia. Jednak kluczowym momentem
                                nabycia i ukształtowania świadomości
                                emocjonalnej jest wiek przedszkolny. Dlatego tak
                                ważne jest, aby w tym czasie Dziecko nauczyło
                                się identyfikować swoje emocje, nazywać je,
                                akceptować, oraz reagować poprawnie.
                            </p>
                            <p className="mb-3">
                                W celu osiągnięcia inteligencji emocjonalnej,
                                nie wystarczy znajomość teorii, dotyczącej
                                zagadnienia. Sukces tkwi w świadomym i
                                konsekwentnym nauczaniu poprzez odpowiedni
                                program, który kontynuowany jest działaniami
                                Rodziców w domu.
                            </p>
                            <p>
                                Dzięki temu Dziecko będzie w stanie zaakceptować
                                siebie; utrzymywać prawidłowe relacje z
                                rówieśnikami, rodzicami i wychowawcami;
                                skutecznie motywować się do działania (nawet
                                pomimo pojawiających się niesprzyjających
                                okoliczności); osiągać sukcesy w przyszłości.
                            </p>
                        </DescriptionBox>
                    </div>
                </div>
                <div className="mt-10 border-t pt-10">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row gap-14">
                            <div className="md:basis-1/2">
                                <div className="flex justify-center md:justify-end">
                                    <div>
                                        <Logo />
                                    </div>
                                </div>
                            </div>
                            <div className="md:basis-1/2">
                                <div className="flex flex-col gap-5 text-center md:text-left">
                                    <ContextItems />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center p-5 mt-10">
                            <div className="shrink">oknonaswiat © 2022</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
