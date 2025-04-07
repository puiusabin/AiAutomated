export interface StepData {
  number: number;
  title: string;
  description: string;
  cta?: { text: string; href: string };
  bgColor: string;
  textColor: string;
  borderColor: string;
  hasImage?: boolean;
}

export const steps: StepData[] = [
  {
    number: 1,
    title: "Subscribe",
    description:
      "If our services is a good fit, start your subscription. Access your project board, and we'll reach out the same day for a introductory discussion.",
    bgColor: "bg-white",
    textColor: "text-black",
    borderColor: "border-black",
  },
  {
    number: 2,
    title: "Share your vision",
    description:
      "Once we have your vision, we'll analyse your goals, business requirements and constraints, break the project into bite-sized tasks, and start implementing.",
    bgColor: "bg-zinc-900",
    textColor: "text-white",
    borderColor: "border-white/80",
  },
  {
    number: 3,
    title: "Continuous results",
    description:
      "Our team effectively solves your tasks and implements AI as a strategic asset, ensuring it becomes an integral part of your company's workflow.",
    bgColor: "bg-zinc-900",
    textColor: "text-white",
    borderColor: "border-white/80",
  },
  {
    number: 4,
    title: "Enjoy the growth",
    description:
      "Our results drive your business growth, which is our main goal. We offer detailed instructions, training, and tech support as long as you need to maximize our work's value.",
    bgColor: "bg-zinc-900",
    textColor: "text-white",
    borderColor: "border-white/80",
    hasImage: true,
  },
];