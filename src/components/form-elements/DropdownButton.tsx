import React, {useEffect, useRef} from 'react';
import CaretDownIcon from "../icons/CaretDownIcon";
import "../../styles/DropdownButton.scss";

type DropdownButtonProps = {
    text?: string;
    Icon?: () => React.ReactNode;
    children?: React.ReactNode;
};

const DropdownButton: React.FC<DropdownButtonProps> = ({ text, Icon = CaretDownIcon, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (isOpen && buttonRef.current && event.target && !buttonRef.current!.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [buttonRef, isOpen]);

    return (
        <section className="dropdown-button-container" ref={buttonRef}>
            <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)} >
                {text && <span>{text}</span>}
                <Icon />
            </button>
            {(isOpen && children) && <section className="child-wrapper" onClick={e => e.stopPropagation()}>{children}</section>}
        </section>
    );
};

export default DropdownButton;
