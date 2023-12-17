import logo from "../assets/react.svg"

const Loader = () => {
    return (
        <div className="flex h-fit w-fit mx-auto items-center justify-center spin rounded-xl bg-white shadow-lg">
            <div className="h-12 w-12 border-0 border-solid border-primary border-t-transparent flex p-2">
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Loader;
