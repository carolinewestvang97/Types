import { useEffect, useState } from "react";
//import App from "../../App";

const FrontPage = () => <h1>Archive</h1>;
const Archive = () => <h1>Archive</h1>;
const Labs = () => <h1>Labs</h1>;
const ContactMe = () => <h1>Contact me</h1>;

export function MenuBar() {
    const [route, setRoute] = useState(window.location.hash);

    useEffect(() => {
        const onHashChange = () => {
          setRoute(window.location.hash);
        };

    window.addEventListener('hashchange', onHashChange);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);    

  const renderPage = () => {
    switch (route) {
      case '#archive':
        return <Archive />;
      case '#labs':
        return <Labs />;
        case '#contact':
            return <ContactMe />;
      default:
        return <FrontPage />;
    }
  };
        
    return(
        <>
            <ul>
            <li><a href="#/">Front page</a></li>
            <li><a href="#archive">Archive</a></li>
            <li><a href="#labs">Labs</a></li>
            <li><a href="#contact">Contact me</a></li>
            </ul>
            {renderPage()}
        </>
    )
}