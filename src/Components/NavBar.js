import React, {useEffect, useState} from 'react';
import "./Compenents-Style/NavBar.css"
import logo from "../Assets/Foodieland.svg"
import facebook from "../Assets/001-facebook.svg"
import twitter from "../Assets/003-twitter.svg"
import instagram from "../Assets/004-instagram.svg"
import menu from "../Assets/icons8-menu-arrondi-24.png"

function NavBar() {
    const [test, setTest] = useState(false)
    const [largeur, setLargeur] = useState(window.innerWidth)
    const onClicktets = () => {
        setTest(!test)
    }
    useEffect(() => {
        const changeWidth = () => {
            setLargeur(window.innerWidth)
            if(window.innerWidth > 800){
                setTest(true)
            }
        }
            window.addEventListener('resize', changeWidth)
        return () => {
         window.removeEventListener('resize', changeWidth)
        }
    },[])
    return (
        <header>
            <nav className="navBar">

                <div className="navBarLogo"><img alt="un triangle aux trois côtés égaux" src={logo}/></div>
                {(test || largeur > 800) && (
                    <>
                        <div className="navBarlink">
                            <ul>
                                <a href="#foo" className="navBarElements">
                                    <li>Home</li>
                                </a>
                                <a href="#foo" className="navBarElements">
                                    <li>Recipes</li>
                                </a>
                                <a href="#foo" className="navBarElements">
                                    <li>Contact</li>
                                </a>
                                <a href="#foo" className="navBarElements">
                                    <li>About</li>
                                </a>
                            </ul>
                        </div>
                        <div className="navBarSocialMedia">
                            <a href="#foo">

                                <img alt="un triangle aux trois côtés égaux" src={facebook}/>

                            </a>
                            <a href="#foo">
                                <img alt="un triangle aux trois côtés égaux" src={twitter}/>
                            </a>
                            <a href="#foo">
                                <img alt="un triangle aux trois côtés égaux" src={instagram}/>
                            </a>
                        </div>
                    </>
                )}
                <div className="navBarMenu" onClick={onClicktets}>
                    <img alt="un triangle aux trois côtés égaux" src={menu}/>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;