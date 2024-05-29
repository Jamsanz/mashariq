import { FC, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface IInformationCard {
  image: string;
  title: string;
  description: string;
  reverse?: boolean;
  hasParsedContent?: boolean;
}

const InformationCard: FC<IInformationCard> = (props) => {
  const { t } = useTranslation();
  const [show, toggle] = useState(false);

  const isLeft = useMemo(() => props.reverse, [props.reverse]);

  const content = useMemo(
    () =>
      props.description
        .split('\n\n')
        .map((sentence, i, description) => {
          if (props.hasParsedContent) return sentence;
          return `${sentence}${description.length - 1 === i ? '' : '<br /><br />'}`;
        })
        .join(''),
    [props.description, props.hasParsedContent]
  );

  return (
    <div
      data-testid="infocard"
      className={`${isLeft ? 'py-10' : 'pt-10 sm:py-10'} grid grid-cols-2 sm:gap-[60px] lg:gap-[80px] xl:gap-[100px]`}
    >
      <div data-aos="fade-right" className={`mb-5 col-span-2 md:col-span-1  ${isLeft ? 'order-1 md:order-2' : ''}`}>
        {props.title && <h1 className="tracking-[-0.36px] md:tracking-[-1.6px] text-[18px] lg:text-[32px] font-bold md:font-extrabold mb-6">
          {props.title}
        </h1>}
        <div
          className={
            !show
              ? 'line-clamp-[9] md:line-clamp-6 xl:line-clamp-[10] 2xl:line-clamp-none'
              : 'transition ease-in-out delay-150'
          }
        >
          <article
            className="font-jakarta md:text-justify text-[14px] md:text-[16px]"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        {
          !content.includes(`<li class="flex">`) &&
          <button onClick={() => toggle((prev) => !prev)} className="2xl:invisible font-bold capitalize underline mt-1">
            {show ? t('see_less') : t('see_more')}
          </button>
        }
      </div>
      <div
        data-aos="fade-left"
        className={`flex col-span-2 md:col-span-1 h-fit ${isLeft ? 'order-2 md:order-1 justify-start' : 'justify-end'
          } `}
      >
        <img
          src={props.image}
          alt={`Information photo of ${props.title}`}
          className="object-cover object-center 2xl:w-[700px] rounded-2xl"
        />
      </div>
    </div>
  );
};

export default InformationCard;
