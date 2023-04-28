import React from "react";
import ReactDOM from "react-dom";
import Center from "./Center";

const Backdrop: React.FC<BackdropProps> = (props) => {
	return (
		<div
			className="fixed top-0 left-0 w-full h-screen bg-black/75 z-50"
			onClick={props.onClick}
		/>
	);
};

const Overlay: React.FC<OverlayProps> = (props) => {
	return (
		<div
			className={`fixed w-1/2 md:1/3 lg:w-1/4 bg-transparent z-[100] overflow-auto scroll-smooth ${props.className}`}
		>
			{props.children}
		</div>
	);
};

interface BackdropProps {
	onClick?: React.MouseEventHandler;
}

interface OverlayProps {
	children: React.ReactNode;
	className?: string;
}

interface ModalProps extends BackdropProps, OverlayProps {}

const Modal: React.FC<ModalProps> = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClick={props.onClick} />,
				document.getElementById("modal-root")!
			)}
			{ReactDOM.createPortal(
				<Center>
					<Overlay className={props.className}>{props.children}</Overlay>
				</Center>,
				document.getElementById("modal-root")!
			)}
		</>
	);
};

export default Modal;
