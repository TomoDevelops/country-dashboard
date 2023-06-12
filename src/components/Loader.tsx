const Loader = () => {
    return (
        <div className="duration-300 flex space-x-3 justify-center">
            <div className="w-7 h-7 bg-dark rounded-full animate-bounce animation-delay-100"></div>
            <div className="w-7 h-7 bg-mid rounded-full animate-bounce animation-delay-300"></div>
            <div className="w-7 h-7 bg-light rounded-full animate-bounce animation-delay-600"></div>
        </div>
    );
};

export default Loader;
