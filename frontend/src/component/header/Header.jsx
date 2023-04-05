import React from 'react'
import './Header.css'
export const Header = () => {
    return (
        <>
            <header>
                <div class="header-container">
                    <div class="leftside">
                        <div class="leftside-logo">
                            <img src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
                            />
                            <h4>CipherSchools</h4>
                        </div>
                    </div>
                    <div class="rightside">
                        <i class="fa-solid fa-toggle-on"></i>
                        <p>Browse</p>
                        <i class="fas fa-caret-down"></i>
                        <i class="far fa-bell"></i>
                        <i class="fas fa-search"></i>
                    </div>
                </div>
            </header>
        </>
    )
}
