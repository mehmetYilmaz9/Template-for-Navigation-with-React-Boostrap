import React, { useState, useRef }  from 'react';
import {useOnClickOutside} from './hook';

const Navigation = (props) => {
	
const [open, setOpen] = useState(false);
const node = useRef(); 
useOnClickOutside(node, () => setOpen(false));
	
//const mobileLinks = document.querySelectorAll('.navigation__link');
function closeMenu() {
	document.getElementById('navi-toggle').checked = false;
};

	return (
		
		<div className="navigation" >
	
			<input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
		
			<label htmlFor="navi-toggle" open={open} setOpen={setOpen} className="navigation__button" >
				<span className="navigation__icon">&nbsp;</span>
			</label>
		
			<nav className="navigation__nav" >
				
				<ul className="navigation__list" >
					<li className="navigation__item" >
						<a	href="#section-about" 
							className="navigation__link"
							onClick={() => setOpen(closeMenu())}
							>About</a> 
					</li>

					<li className="navigation__item">
						<a	href="#section-service" 
							className="navigation__link"  	
							onClick={() => setOpen(closeMenu())}
							>Service</a>
					</li>

					<li className="navigation__item">
						<a	href="#section-contact"  
							className="navigation__link"  
							onClick={() => setOpen(closeMenu())}
							>Contact</a>
					</li>         
				</ul>
		
			</nav>   
			
			<div className="navigation__background">&nbsp;</div>  
		
		</div>	

		
	);
};



export default Navigation;

