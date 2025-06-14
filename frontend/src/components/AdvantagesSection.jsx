import { FaMoneyBillWave, FaChartLine, FaSync, FaListUl } from 'react-icons/fa';

export const AdvantagesSection = () => {
  const advantages = [
    {
      icon: <FaMoneyBillWave className="text-blue-500 text-4xl" />,
      title: "Save Theme",
      description: "Make a Guide to the Packages Of Fluids"
    },
    {
      icon: <FaChartLine className="text-blue-500 text-4xl" />,
      title: "Save Strategy",
      description: "Go to Create Responsible Asset Growth Plan, BMPL"
    },
    {
      icon: <FaSync className="text-blue-500 text-4xl" />,
      title: "Transfer Renewal",
      description: "Promise Access and Value to Your Agents"
    },
    {
      icon: <FaListUl className="text-blue-500 text-4xl" />,
      title: "Multiple Options",
      description: "Ensure the Group's new Team, trusted Agents"
    }
  ];

  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Advantages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {advantages.map((advantage, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="flex justify-center mb-4">
              {advantage.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
            <p className="text-gray-600">{advantage.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
