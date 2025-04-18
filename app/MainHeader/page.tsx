"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  HomeIcon,
  UserIcon,
  HeartIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

export default function FallPreventionPage() {
  const [showMore, setShowMore] = useState(false);

  const toggleMoreCards = () => {
    setShowMore((prev) => !prev);
  };

  const preventionStrategies = [
    {
      title: "Environmental Modifications",
      icon: <HomeIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      items: [
        "Remove clutter and secure loose rugs",
        "Install grab bars in bathrooms and non-slip mats",
        "Ensure proper lighting in hallways and staircases",
      ],
      bgColor: "bg-blue-50 dark:bg-blue-900/30",
    },
    {
      title: "Personal Safety Measures",
      icon: <UserIcon className="h-6 w-6 text-green-600 dark:text-green-400" />,
      items: [
        "Wear supportive, non-slip footwear",
        "Use mobility aids (e.g., canes, walkers) if needed",
        "Regular exercise to improve strength and balance",
      ],
      bgColor: "bg-green-50 dark:bg-green-900/30",
    },
    {
      title: "Medical & Behavioral Steps",
      icon: <HeartIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      items: [
        "Review medications with a doctor to reduce side effects",
        "Schedule regular vision and hearing check-ups",
        "Avoid rushing or multitasking while walking",
      ],
      bgColor: "bg-purple-50 dark:bg-purple-900/30",
    },
  ];

  const hospitalStrategies = Array.from({ length: 6 }, (_, i) => ({
    title: `Hospital Safety Tip ${i + 1}`,
    icon: <BuildingOffice2Icon className="h-6 w-6 text-red-600 dark:text-red-400" />,
    items: [
      "Ensure bed rails are secured properly",
      "Keep medical equipment organized and cables tucked",
      "Train staff for emergency fall protocols",
    ],
    bgColor: "bg-red-50 dark:bg-red-900/30",
  }));

  const CheckIcon = ({ color = "blue" }: { color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 text-${color}-500`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );

  const PreventionCard = ({
    title,
    icon,
    items,
    index,
    bgColor,
  }: {
    title: string;
    icon: React.ReactNode;
    items: string[];
    index: number;
    bgColor: string;
  }) => {
    const colors = ["blue", "green", "purple", "red"];
    const color = colors[index % colors.length];

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className={`${bgColor} rounded-xl shadow-sm overflow-hidden p-6 hover:shadow-md transition-all duration-300 border border-transparent hover:border-${color}-200 dark:hover:border-${color}-800 relative group`}
      >
        <div
          className={`absolute inset-0 rounded-xl border-2 border-${color}-300 dark:border-${color}-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
        ></div>

        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 bg-${color}-100 dark:bg-${color}-900 rounded-lg`}>
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {title}
          </h3>
        </div>
        <ul className="space-y-3">
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ x: -10 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.1 * i }}
              className="flex items-start gap-2"
            >
              <span className={`text-${color}-500 mt-0.5`}>
                <CheckIcon color={color} />
              </span>
              <span className="text-gray-700 dark:text-gray-300">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    );
  };

  const MainHeader = () => (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl"
    >
      <div className="absolute inset-0 bg-blue-600 dark:bg-blue-900 z-0"></div>
      <Image
        src="/fall-prevention-header.jpg"
        alt="Fall Prevention"
        fill
        className="object-cover z-10"
        priority
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
        }}
      />
      <div className="absolute inset-0 bg-black/40 z-20 flex items-center justify-center px-4">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center"
        >
          How Can We Prevent Falls?
        </motion.h1>
      </div>
    </motion.header>
  );

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      <MainHeader />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8 text-center"
      >
        Key Prevention Strategies
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {preventionStrategies.map((strategy, index) => (
          <PreventionCard
            key={index}
            title={strategy.title}
            icon={strategy.icon}
            items={strategy.items}
            index={index}
            bgColor={strategy.bgColor}
          />
        ))}

        {showMore &&
          hospitalStrategies.map((strategy, index) => (
            <PreventionCard
              key={`hospital-${index}`}
              title={strategy.title}
              icon={strategy.icon}
              items={strategy.items}
              index={index + preventionStrategies.length}
              bgColor={strategy.bgColor}
            />
          ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex justify-center mt-12"
      >
        <button
          onClick={toggleMoreCards}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          {showMore ? "Show Less" : "Learn More"}
        </button>
      </motion.div>
    </main>
  );
}