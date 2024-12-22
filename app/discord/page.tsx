export default function Discord() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-7xl mb-4">Our Discord</h1>
            <p className="text-5-lg mb-8">
                Join our Discord server to connect with our community and get started!
            </p>
            <a
                href="https://discord.gg/seacatsscallywags"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-[#7289DA] text-white rounded-lg hover:bg-[#7289DA]/80"
            >
                Join Now
            </a>
        </div>
    );
}