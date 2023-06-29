export interface ComponentNameProps {
  title: string;
  subTitle?: string;
}

export default function ComponentName({ title, subTitle }: ComponentNameProps) {
  return (
    <div class="
            w-full 
            flex 
            justify-center 
            items-center 
            flex-col
            py-16
            text-center
            space-y-3
        ">
      <div class="flex items-center justify-center space-x-5 w-full">
        <h2 class="
                    text-3xl 
                    md:text-5xl
                    lg:text-6xl
                    font-black
                    flex 
                    flex-wrap 
                    w-2/3 
                ">
          {title}
        </h2>
      </div>
      <p>{subTitle}</p>
    </div>
  );
}
