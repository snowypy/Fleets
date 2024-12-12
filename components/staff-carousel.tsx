import { FadeIn, SlideIn } from "./animations";

// I made the 1st one but the following are tab completion.
const staffMembers = [
    { name: "Jett", role: "Owner", timeSpent: "6 months", image: "/staff/jett.png" },
    { name: "Kai", role: "Admin", timeSpent: "4 months", image: "/staff/kai.png" },
    { name: "Luna", role: "Moderator", timeSpent: "3 months", image: "/staff/luna.png" },
    { name: "Rex", role: "Moderator", timeSpent: "2 months", image: "/staff/rex.png" },
];

export default function StaffCarousel() {
    return (
        <div className="my-8 p-6 bg-gray-800 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Meet Our Staff</h2>
            <FadeIn>
                <div className="carousel flex justify-center">
                    {staffMembers.map((member, index) => (
                        <SlideIn
                            key={index}
                            delay={index * 0.2}
                            className={`carousel-item mx-4 ${
                                index === 0
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 translate-x-full"
                            }`}
                        >
                            <div className="bg-gray-700 p-4 rounded-lg">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-2"
                                />
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p>{member.role}</p>
                                <p>{member.timeSpent}</p>
                            </div>
                        </SlideIn>
                    ))}
                </div>
            </FadeIn>
        </div>
    );
}