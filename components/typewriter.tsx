import { TypeWriterString_T } from '@/lib/data';
import Typewriter from 'typewriter-effect';

export default function TypeWriterEffect({ texts }: { texts: TypeWriterString_T[] }) {
  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: true
      }}
      onInit={(typewriter) => {
        typewriter.typeString("I am ");
        texts.forEach(({ prefix, items }) => {
          typewriter
            .typeString(prefix)
          typewriter.typeString(" ");
          items.forEach((item, index) => {
            typewriter
              .typeString(item)
              .pauseFor(500);
              typewriter.deleteChars(item.length);
          });

          typewriter.deleteChars(prefix.length + 1).start();
        });
      }}
    />
  );
};