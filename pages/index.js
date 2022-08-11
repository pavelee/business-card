import { useState, useEffect } from "react";
import Head from "next/head";
import {
    FaPhoneAlt,
    FaLocationArrow,
    FaClock,
    FaExclamationCircle,
    FaRegWindowClose,
} from "react-icons/fa";
import Image from "next/image";

const title = "Business Card";
const sign = "businesscard © 2022";
const phone = "+48 123 123 123";
const navbarItems = [
    {
        text: "About us",
        anchor: "#aboutus",
    },
    {
        text: "Training",
        anchor: "#training",
    },
    {
        text: "Classes",
        anchor: "#classes",
    },
    {
        text: "Process",
        anchor: "#process",
    },
    {
        text: "Contact",
        anchor: "#contact",
    },
];

const Logo = () => {
    return (
        <Image
            src={"https://picsum.photos/204/50"}
            width={204}
            height={50}
            alt={"logo"}
        />
    );
};

const MobileMenu = (props) => {
    const { visible = true, children, toggle } = props;
    const [isVisible, setIsVisible] = useState(visible);

    useEffect(() => {
        setIsVisible(visible);
    }, [visible]);

    return (
        <div
            className={
                `transition-all duration-500 fixed top-0 w-full rounded-xl p-5 bg-white z-50 opacity-95 ` +
                (visible ? 'translate-y-0' : '-translate-y-full')
            }
        >
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
    const { navbarItems } = props;
    return (
        <>
            {navbarItems.map((navbarItem) => {
                return (
                    <div key={navbarItem.anchor}>
                        <a href={navbarItem.anchor}>{navbarItem.text}</a>
                    </div>
                );
            })}
        </>
    );
};

const NavbarItemsWrapper = () => {
    return <NavbarItems navbarItems={navbarItems} />;
};

const ContextItems = () => {
    return (
        <>
            <div>
                <FaExclamationCircle className="inline-block" />
                <span className="inline-block ml-2">Open!</span>
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
                <span className="inline-block ml-2">Adress...</span>
            </div>
            <div>
                <FaClock className="inline-block" />
                <span className="inline-block ml-2">Mon-Fri: 7:30–18:30</span>
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
            <div className="order-1 mb-5 md:mb-0 md:order-2 md:basis-1/2 flex justify-center items-center">
                {image}
            </div>
        </div>
    );
};

const Burger = (props) => {
    const defaultBurgerClasses = 'h-1 rounded-sm mb-1 bg-black';
    const { onClick, width = 7 } = props;
    const [burgerClasses, setBurgerClasses] = useState(defaultBurgerClasses);

    useEffect(() => {
        setBurgerClasses(defaultBurgerClasses + ' ' + 'w-'+ width)
    }, []);
    
    return (
        <div
            className="md:hidden shrink cursor-pointer"
            onClick={() => {
                onClick();
            }}
        >
            <div className="flex flex-col">
                <div className={burgerClasses}></div>
                <div className={burgerClasses}></div>
                <div className={burgerClasses}></div>
            </div>
        </div>
    );
};

export default function Home() {
    const [isNavBarMenuVisible, setIsNavBarMenuVisible] = useState(false);
    const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <div className="hidden md:block z-50 w-full h-[50px] bg-[#f0f1f4]">
                    <div className="container mx-auto">
                        <div className="flex flex-row p-3 justify-between text-center">
                            <ContextItems />
                        </div>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="container mx-auto">
                        <nav>
                            <MobileMenu
                                visible={isNavBarMenuVisible}
                                toggle={setIsNavBarMenuVisible}
                            >
                                <div className="flex flex-col navbar-items">
                                    <NavbarItemsWrapper />
                                </div>
                            </MobileMenu>
                        </nav>
                        <MobileMenu
                            visible={isContextMenuVisible}
                            toggle={setIsContextMenuVisible}
                        >
                            <div className="flex flex-col gap-5">
                                <ContextItems />
                            </div>
                        </MobileMenu>
                        <div className="flex p-5 md:p-5">
                            <div className="mt-2 pr-3">
                                <Burger
                                    onClick={() => {
                                        setIsNavBarMenuVisible(true);
                                    }}
                                />
                            </div>
                            <div className="flex-auto text-center md:text-left">
                                <a href="/">
                                    <Logo />
                                </a>
                            </div>
                            <div className="mt-2 pl-3">
                                <Burger
                                    onClick={() => {
                                        setIsContextMenuVisible(true);
                                    }}
                                    width={1}
                                />
                            </div>
                            <nav>
                                <div className="hidden md:block flex-auto">
                                    <div className="navbar-items-desktop flex flex-row gap-10 justify-end">
                                        <NavbarItemsWrapper />
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div
                    className="flex bg-cover bg-center justify-center h-screen-md w-screen"
                    style={{
                        backgroundImage: `url("https://picsum.photos/1920/1080")`,
                    }}
                >
                    <div className="container mx-auto">
                        <div className="w-[80%] md:w-[60%] bg-white opacity-80 mx-auto p-5 rounded-xl mt-16 mb-16 md:mt-[10rem] md:mb-[10rem]">
                            <div className="text-2xl">
                                Quis cupidatat ut non pariatur cupidatat ex
                                excepteur anim sint dolore id eu minim. Ipsum
                                anim mollit qui tempor commodo aliqua magna
                                sunt. Ipsum anim qui irure commodo. Anim Lorem
                                sit qui nulla dolore nostrud reprehenderit
                                tempor.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row mt-10">
                    <div className="container mx-auto">
                        <DescriptionBox
                            title={
                                "Occaecat qui ea anim laborum et enim in eiusmod est eiusmod minim."
                            }
                            image={
                                <Image
                                    src={"https://picsum.photos/480/320"}
                                    width={480}
                                    height={320}
                                />
                            }
                        >
                            <p className="mb-3">
                                Adipisicing non velit velit cillum sit deserunt.
                                Ex consequat aliqua sunt labore quis voluptate
                                ipsum nisi ut laboris enim. Tempor nostrud ad
                                incididunt ut sunt tempor voluptate anim ipsum
                                enim proident. Anim sit ad excepteur enim
                                mollit. Aliqua est laborum tempor culpa sit non
                                nostrud tempor nulla voluptate quis
                                reprehenderit.
                            </p>
                            <p className="mb-3">
                                Culpa elit ipsum ullamco sint ex. Ex dolor in
                                nostrud pariatur incididunt qui. Exercitation
                                aliquip eiusmod esse cupidatat non aute aliquip
                                velit esse ut exercitation magna.
                            </p>
                            <p>
                                Ipsum veniam nostrud culpa do consectetur minim
                                consectetur. Pariatur eu est in consequat sint
                                excepteur excepteur incididunt do magna
                                exercitation tempor. Commodo elit commodo cillum
                                occaecat non consectetur incididunt.
                            </p>
                        </DescriptionBox>
                    </div>
                </div>
                <div className="flex flex-row mt-10">
                    <div className="container mx-auto">
                        <DescriptionBox
                            title={
                                "Ea nostrud deserunt aliqua labore irure laboris qui eiusmod quis sit aliqua laboris qui occaecat."
                            }
                            image={
                                <Image
                                    src={"https://picsum.photos/480/320"}
                                    width={480}
                                    height={320}
                                />
                            }
                        >
                            <p className="mb-3">
                                Tempor do in ea Lorem cillum eiusmod aute tempor
                                voluptate ex commodo deserunt culpa. Id id eu
                                velit do nulla. Ex qui nulla ullamco voluptate
                                ad et aliqua est non. Qui non non duis deserunt
                                non mollit et et. Eu occaecat sint ex minim et
                                veniam incididunt sunt laborum. Labore dolore
                                culpa dolore est sunt duis aute dolor velit.
                            </p>
                            <p className="mb-3">
                                Consequat id occaecat pariatur aute do dolore
                                dolor laborum incididunt reprehenderit cillum
                                aute. Culpa culpa tempor eiusmod elit consequat
                                non eiusmod. Cupidatat ea laboris aliquip anim
                                tempor in commodo veniam aute labore. Dolore
                                Lorem culpa cillum laboris enim duis. Minim
                                aliqua fugiat ex minim cupidatat culpa nulla.
                                Quis qui eu id deserunt sit quis aliquip anim
                                excepteur Lorem ad voluptate.
                            </p>
                            <p>
                                Consequat veniam aliqua culpa tempor elit. Qui
                                excepteur do elit mollit. Aliqua non magna duis
                                mollit non pariatur sunt sunt ipsum in in. Irure
                                aliqua fugiat labore velit reprehenderit culpa
                                in culpa. Duis minim quis sunt ea dolor aliquip
                                ex aute. Ex duis in velit veniam enim amet.
                                Officia eu culpa fugiat veniam commodo velit.
                            </p>
                        </DescriptionBox>
                    </div>
                </div>
            </main>
            <footer>
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
                            <div className="shrink">{sign}</div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
