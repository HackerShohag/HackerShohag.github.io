import Typewriter from 'typewriter-effect';

function TypeWriterEffect({ texts }: { texts: string[] }) {
  return (
    <Typewriter
      options={{
        strings: texts,
        autoStart: true,
        loop: true,
      }}
    />
  )
}

export default TypeWriterEffect;