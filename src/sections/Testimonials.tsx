import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Amit Sharma",
    position: "CEO @Tech Solutions Pvt. Ltd.",
    text: "Incredible work on our website. The design is sleek and user-friendly, and the functionality is spot-on. Highly recommend!",
    avatar: memojiAvatar1,
  },
  {
    name: "Priya Gupta",
    position: "Product Manager @Green Innovations",
    text: "The user interface and experience designed by Kshitij significantly enhanced our product's performance and user engagement.",
    avatar: memojiAvatar2,
  },
  {
    name: "Ravi Kumar",
    position: "CTO @Innovate Labs",
    text: "The attention to detail and dedication shown by Kshitij during the development phase exceeded our expectations.",
    avatar: memojiAvatar3,
  },
  {
    name: "Ananya Sarode",
    position: "Founder,CEO @Nebula Nexus Innovations",
    text: "With their expertise, our online platform became more intuitive and efficient. Highly recommend their services!",
    avatar: memojiAvatar4,
  },
  {
    name: "Vikas Rao",
    position: "Marketing Head @Stacktically",
    text: "A fantastic collaborator! Kshitij helped us design a responsive website that significantly improved our brand's visibility.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say about Me"
          description="Don't just take my word for it. See what my clients have to say
        about my work"
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials?.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="size-14 bg-gray-700 rounded-full inline-flex items-center justify-center flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm  text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm mt-4 md:text-base md:mt-6">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
