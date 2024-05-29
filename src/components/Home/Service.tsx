import InformationCard, { IInformationCard } from "./InfoCard"
;

export interface IServiceProps {
  title: string;
  info: IInformationCard;
  icon: React.ReactNode;
}

const Service = (props: IServiceProps) => {
  const { title, info, icon } = props;
  return (
    <section className="mt-12 md:mt-4 xl:mt-12 lg:mb-10 mx-6 md:mb-[24px] md:mx-[60px] xl:mx-[100px] relative overflow-hidden">
      {icon}
      <h2 className="font-jakarta text-lg md:text-5xl text-center my-4 md:my-8 font-medium tracking-tighter">{title}</h2>
      <InformationCard {...info} />
    </section>
  )
}

export default Service