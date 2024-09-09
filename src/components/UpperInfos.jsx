import { infoItems } from "../data/Infos";
const UpperInfos = () => {
  return (
    <div className="bg-[#2A2C38] flex p-5">
      <ul className="flex container mx-auto  flex-wrap md:justify-end lg:justify-end justify-center">
        {infoItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-center text-white text-sm gap-2"
          >
            {item.icon}
            <span className={`mr-2 ${item.style}`}>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpperInfos;
