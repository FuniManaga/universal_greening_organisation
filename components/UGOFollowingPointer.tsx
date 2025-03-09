import Image from "next/image";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

export function UGOFollowingPointer() {
  return (
    <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {programmes.map((programme) => (
        <FollowerPointerCard
          key={programme.slug}
          title={
            <TitleComponent
              title={programme.organizer}
              avatar={programme.organizerAvatar}
            />
          }
        >
          <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
            <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
              <Image
                src={programme.image}
                alt="thumbnail"
                layout="fill"
                objectFit="cover"
                className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold my-4 text-lg text-zinc-700">
                {programme.title}
              </h2>
              <h2 className="font-normal my-4 text-sm text-zinc-500">
                {programme.description}
              </h2>
              <div className="flex flex-row justify-between items-center mt-10">
                <span className="text-sm text-gray-500">{programme.date}</span>
                <div className="relative z-10 px-6 py-2 bg-green-600 text-white font-bold rounded-xl block text-xs">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </FollowerPointerCard>
      ))}
    </div>
  );
}

const programmes = [
  {
    slug: "ugo-fellowship",
    organizer: "Universal Greening Network",
    date: "Ongoing",
    title: "UGO Fellowship - 1st Cohort",
    description:
      "Our flagship fellowship program designed to nurture the next generation of environmental leaders. Currently accepting applications for the first cohort.",
    image: "/images/fellowship.jpg",
    organizerAvatar: "/images/ugo-avatar.png",
  },
  {
    slug: "iges-summit",
    organizer: "Universal Greening Network",
    date: "Annual",
    title: "International Green Economy Summit (IGES)",
    description:
      "A global conference bringing together thought leaders, policymakers, industry experts, and activists to address environmental challenges and promote sustainable development through innovative solutions.",
    image: "/images/iges-summit.jpg",
    organizerAvatar: "/images/ugo-avatar.png",
  },
  {
    slug: "green-economy-summit",
    organizer: "Universal Greening Network",
    date: "2015",
    title: "1st Green Economy Summit",
    description:
      "Inaugural summit focused on sustainable development and green economy initiatives, organized in collaboration with the Department of Economic Development, Environment, and Tourism (LEDET).",
    image: "/images/green-economy.jpg",
    organizerAvatar: "/images/ugo-avatar.png",
  },
];

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
