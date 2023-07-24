import React from 'react';

type OfferDetailsItemProps = {
  imgSrc: string;
  altText: string;
  title: string;
  data: { id: number; name: string }[];
};

function OfferDetailsItem({
  imgSrc,
  altText,
  title,
  data,
}: OfferDetailsItemProps) {
  return (
    data && (
      <div className='md:basis-6/12 grid grid-cols-[max-content,1fr] grid-rows-[max-content,1fr] gap-x-[0.375rem] gap-y-[.625rem] text-greyText mb-5 items-start'>
        <img src={imgSrc} alt={altText} />
        <div>{title}</div>
        <div className='col-start-2 flex flex-wrap gap-[0.3125rem]'>
          {data.map((item) => {
            return (
              item && (
                <span
                  key={item.id}
                  className='py-[0.3125rem] px-[.875rem] bg-greyBorder rounded-[1.25rem] text-[.875rem]'
                >
                  {item.name}
                </span>
              )
            );
          })}
        </div>
      </div>
    )
  );
}

export default OfferDetailsItem;
